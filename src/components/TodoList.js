// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Item from '../components/Todo';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="items">
        {
          this.props.items.map(item => (
            <Item toggle={this.props.toggle} key={item.id} item={item} />
          ))
        }
      </div>
    )
  }
}

export default TodoList;
