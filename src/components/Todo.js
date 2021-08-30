import React from "react";

class Item extends React.Component {
  constructor() {
    super();
    this.state = null;
  }

  clickItem = () => {
    console.log('clicked');
    this.props.toggle(this.props.item.id);
  }

  render() {
    return (
      <div 
        className={`item${this.props.item.completed ? ' completed': ''}`}
        onClick={this.clickItem}
      >
        <p>{this.props.item.task}</p>
      </div>
    )
  }
}

export default Item;