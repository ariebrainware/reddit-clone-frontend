import React from 'react';
import { List, Form } from 'semantic-ui-react';
import axios from 'axios';

import Icon from '../../component/Icon';
import Message from '../../component/Message';

axios.defaults.baseURL = process.env.NODE_ENV !== 'development' 
  ? process.env.REACT_APP_APIPRODUCTION 
  : process.env.REACT_APP_APILOCAL 

class TopicList extends React.Component{
  state = {
    topics: [],
    newTopic: '',
    upvoteData: [],
  }

  fetchData = () => {
    axios.get().then(response => {
      this.setState({
        topics: response.data,
      })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  renderEmptyMessage = () => (
    <Message text='Empty topic list' />
  )

  handleSubmit = () => {
    axios.post(`/add`, {
      text: this.state.newTopic,
    })
    .then(() => {
      this.fetchData()
      this.setState({
        newTopic: '',
      })
    })
    .catch(err => console.log(err))
  }

  handleUpvotes = (id) => {
    this.setState({
      upvoteData: this.state.topics
    })
    console.log(this.state.upvoteData)
    console.log(id)
  }

  render() {
    return (
      <div>
        <List divided relaxed>
          {
            this.state.topics.length !== 0 ? this.state.topics.map(data => (
              <List.Item key={data.id}>
                <List.Content>
                  <List.Header>{data.text}</List.Header>
                  <div className="votes" onClick={() => this.handleUpvotes(data.id)}><Icon name='angle up'/>{data.upvotes}</div>
                </List.Content>
              </List.Item>
            )) : this.renderEmptyMessage()
          }
        </List>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            value={this.state.newTopic}
            onChange={e => this.setState({ newTopic: e.target.value })}
          />
          <Form.Button type='submit'> ADD </Form.Button>
        </Form>
      </div>
    )
  }
}

export default TopicList