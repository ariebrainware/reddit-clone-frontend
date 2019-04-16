import React from 'react'; 
import { Header } from 'semantic-ui-react';

const HeaderPage = (props) => (
  <div className={props.className || ''}>
    <Header as='h1'>{props.children}</Header>
  </div>
)

export default HeaderPage