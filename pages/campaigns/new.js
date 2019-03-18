import React ,{ Component } from 'react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import { Form,Button,Input,Message } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import { Link,Router} from '../../routes';
class CampaignNew extends Component
{
  state={
    minimumContribution:'',
    errorMessage:'',
    loading:false
  };
  onSubmit=async (event)=>{
    event.preventDefault();
    this.setState({loading:true,errorMessage:''});
    try {
      const accounts=await web3.eth.getAccounts();

      await factory.methods.createCampaign(this.state.minimumContribution).send({
        gas:'1000000',
         from: accounts[0]
      });
      Router.pushRoute('/');

    } catch (e) {
      this.setState({errorMessage:e.message});

    } this.setState({loading:false});


  };
  render()

  {

    return (
          <Layout>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <h3> Create Campaign </h3>
          <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
              <label> Minimum Contribution </label>
              <Input label='wei'
              labelPosition='right'
              value={this.state.minimumContribution}
              onChange={event=>this.setState({minimumContribution:event.target.value})}
              />


            </Form.Field>
            <Message error header='OOOPPS' content={this.state.errorMessage}/>
            <Button loading={this.state.loading} primary>Create</Button>

          </Form>
          </Layout>

    );
  }
}
export default CampaignNew;
