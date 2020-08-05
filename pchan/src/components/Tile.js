import React from "react";

class Tile extends React.Component {
  render() {
    return (
      <div>
        <h3>
          <a href={"thread?id=" + this.props.id}>{this.props.subject}</a>
        </h3>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Tile;
