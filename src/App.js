import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTestData = [
  {
    task: 'Test list',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Test second item',
    id: Date.now(),
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {listItems:initialTestData}
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  onAdd = name => {
    const newItem = {
      name: name,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      ...this.state,
      listItems: [...this.state.listItems, newItem]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
