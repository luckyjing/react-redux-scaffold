import React from 'react';
import Button from '@ali/dblx/lib/Button';
import { render } from 'react-dom';

var App = function() {
  return <div style={{
      'marginTop': '100',
      'textAlign': 'center'
    }}>
    <Button type="primary">欢迎加入技术栈:React/ReactDom/Redux/React-Redux/DBLX</Button>
  </div>
}

render(<App/>, document.getElementById('stage'));
