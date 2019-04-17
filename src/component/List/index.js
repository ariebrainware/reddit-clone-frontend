import React from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';

import Icon from '../Icon';
import Message from '../Message';

class TopicList extends React.Component{
  state = {
    topic: [],
  }

  fetchData = () => {
    const URL = process.env.NODE_ENV !== 'development' ? process.env.REACT_APP_APIPRODUCTION : process.env.REACT_APP_APILOCAL 
    axios.get(URL).then(response => {
      this.setState({
        topic: response.data,
      })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  renderEmptyMessage = () => (
    <Message text='Empty topic list' />
  )

  render() {
    return (
      <List divided relaxed>
        {
          this.state.topic.length !== 0 ? this.state.topic.map(data => (
            <List.Item>
              <List.Content>
                <List.Header as='a'>{data.text}</List.Header>
                <div className="votes"><Icon name='angle up'/>{data.upvotes}</div>
              </List.Content>
            </List.Item>
          )) : this.renderEmptyMessage
        }
      </List>
    )
  }
}

export default TopicList