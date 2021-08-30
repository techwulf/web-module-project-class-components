import React from "react";

class Item extends React.Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div className="item">
        <p>{this.props.item.task}</p>
      </div>
    )
  }
}

export default Item;