import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTestData = [
  {
    task: 'Create a todo list',
    id: Date.now()+2,
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
      task: name,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      listItems: [...this.state.listItems, newItem]
    });
  }

  handleToggle = id => {
    this.setState({
      ...this.state,
      listItems: this.state.listItems.map(item => {
        if (item.id === id) {
          return({
            ...item,
            completed: !item.completed
          });
        } else {
          return(item);
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <TodoForm onAdd={this.onAdd}/>
        <TodoList toggle={this.handleToggle} items={this.state.listItems}/>
        <button className="final">Clear Completed!</button>
      </div>
    );
  }
}

export default App;
