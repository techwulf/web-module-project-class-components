import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input:''
    }
  }

  onChange = evt => {
    this.setState({
      input: evt.target.value
    });
  }

  onClick = evt => {
    evt.preventDefault();
    if (this.state.input !== ''){
      this.props.onAdd(this.state.input);
    }
    this.setState({...this.state,input:''});
  }

  render() {
    return (
      <form>
        <input 
          type="text" 
          name="item" 
          value={this.state.input} 
          onChange={this.onChange}
        />
        <button onClick={this.onClick}>Add</button>
      </form>
    )
  }
}

export default TodoForm;