import React from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

class FormComponent extends React.Component {
  state = {
    text: '',
  }  

  handleSubmit = () => {
    const URL = process.env.NODE_ENV !== 'development' ? process.env.REACT_APP_APIPRODUCTION : process.env.REACT_APP_APILOCAL 
    axios.post(`${URL}/add`, {
      text: this.state.topic,
    })
    .then(() => {
      
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          value={this.state.topic}
          onChange={e => this.setState({ text: e.target.value })}
        />
        <Form.Button type='submit' />
      </Form>
    )
  }
}

export default FormComponent