import React ,{ Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card,Grid,Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component{
  static async getInitialProps(props){
     const campaign=Campaign(props.query.address);
     const summary =await campaign.methods.getSummary().call();
     console.log(summary);
     return{
       address:props.query.address,
       minContribution:summary[0],
       //see console log for verifyinng this
       balance:summary[1],
       requestCount:summary[2],
       approverCount:summary[3],
       manager:summary[4]
     } ;
  }
  renderCards()
  {
    const {
        balance,
        manager,
        minContribution,
        requestCount,
        approverCount

    }=this.props;
    const items=[
    {  header: manager,
      meta:'Address of Manager',
      description:'Manager created this campaign and can create request',
    style:{overflowWrap:'break-word'}},

    {  header: minContribution,
      meta:'Minimum Contribution in Wei',
      description:'You have to contribute at least this much in wei',
    //style:{overflowWrap:'break-word'}
  },
  {  header: requestCount,
    meta:'Number of requests',
    description:'A request tries to withdraw money from the contract',
  //style:{overflowWrap:'break-word'}
},
{  header: approverCount,
  meta:'Number of Approvers',
  description:'Total person who have contributed to this',
//style:{overflowWrap:'break-word'}
},
{  header: web3.utils.fromWei(balance,'ether'),
  meta:'Campaign balance in ether',
  description:'How much money campaign has left to spend',
//style:{overflowWrap:'break-word'}
}
    ];
    return <Card.Group items={items} />;
  }
  render(){
    return(
    <Layout>
    <h3>Campaign show</h3>
    <Grid>
    <Grid.Row>
      <Grid.Column width={10}>
        {this.renderCards()}

      </Grid.Column>

      <Grid.Column width={6}>
        <ContributeForm address={this.props.address}/>
      </Grid.Column>
      </Grid.Row>

      <Grid.Row>
      <Grid.Column>
      <Link route={`/campaigns/${this.props.address}/requests`}>
          <a>
            <Button primary> View request </Button>
          </a>
      </Link>
      </Grid.Column>
      </Grid.Row>

    </Grid>



    </Layout>);
  }
}

export default CampaignShow;
