import React from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';

import Icon from '../Icon';
import Message from '../Message';

class PostList extends React.Component{
  state = {
    post: []
  }

  fetchData = () => {
    axios.get('http://localhost:3001/topic').then(response => {
      this.setState({
        post: response.data
      })
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchData()
    }, 1000)
    console.log(this.state.post)
  }

  render() {
    return (
      <List divided relaxed>
        {
          this.state.post.length !== 0 ? 
            this.state.post.map(data => (
              <List.Item>
                <List.Content>
                  <List.Header as='a'>{data.text}</List.Header>
                  <div className="votes"><Icon name='angle up'/>{data.upvotes}</div>
                </List.Content>
              </List.Item>
            )) : <Message text='Empty list post'> {console.log('empty')} </Message>
        }
      </List>
    )
  }
}

export default PostList