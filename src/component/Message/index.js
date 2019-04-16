import React from 'react'
import { Message } from 'semantic-ui-react'

const Notif = (props) => (
  <Message>
    <Message.Header>{props.header || 'Information'}</Message.Header>
    <p>
      {props.text}
    </p>
  </Message>
)

export default Notif