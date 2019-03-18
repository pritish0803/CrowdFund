pragma solidity ^0.4.17;
contract CampaignFactory
{
    address[] public deployedCampaign;

    function createCampaign(uint minimum) public
    {
         address newCampaign=new Campaign(minimum,msg.sender);
         deployedCampaign.push(newCampaign);
    }
    function getDeployedCampaign() public view returns(address[])
    {
        return deployedCampaign;
    }
}

contract Campaign
{

    struct Request
    {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address=>bool) approvals;
    }
    Request[] public request;


    address public manager;
    uint public minContribution;
    mapping(address=>bool) public approvers;
    uint public approverCount;

    modifier restricted()
    {
        require(msg.sender==manager);
        _;
    }

    function Campaign(uint minimum,address creator) public
    {
        manager=creator;
        minContribution=minimum;
    }
    function contribute() public payable
    {
        require(msg.value>minContribution);
        approvers[msg.sender]=true;
        approverCount++;
    }


    function createRequest(string description,uint value,address recipient) public restricted
    {
        Request memory newRequest=Request({
            description:description,
            value:value,
            recipient:recipient,
            complete:false,
            approvalCount:0
        });
        request.push(newRequest);
    }
    function approveRequest(uint index) public
    {
        Request storage requests=request[index];

        /*require(approvers[msg.sender]);
        require(!request[index].approvals[msg.sender]);
        request[index].approvalCount++;
        request[index].approvals[msg.sender]=true;*/

        require(approvers[msg.sender]);
        require(!requests.approvals[msg.sender]);
        requests.approvalCount++;
        requests.approvals[msg.sender]=true;

    }
    function finalizeRequest(uint index) public restricted
    {
        require(!request[index].complete);
        require(request[index].approvalCount>(approverCount/2));
        request[index].complete=true;
        request[index].recipient.transfer(request[index].value);

    }
    function getSummary() public view returns (
      uint,uint,uint,uint,address
    ) {
      return (
        minContribution,
        this.balance,
        request.length,
        approverCount,
        manager
      );

    }
    function getRequestCount() public view returns (uint) {
      return (request.length); 
    }
}
