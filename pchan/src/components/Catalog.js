import React from "react";
import { database } from "../config/firebaseConfig";
import Tile from "./Tile";
class Catalog extends React.Component {
  constructor() {
    super();
    this.state = {
      threads: []
    };
  }
  componentDidMount() {
    const threadsRef = database.ref(`/temp`);
    threadsRef.on("value", snapshot => {
      let threads = snapshot.val();
      let newState = [];
      for (let thread in threads) {
        newState.push({
          id: thread,
          subject: threads[thread].subject,
          text: threads[thread].text
        });
      }
      this.setState({
        threads: newState
      });
      //   console.log(this.state);
    });
  }
  render() {
    console.log(this.state);
    const liStyle = {
      listStyleType: "none"
    };
    if (this.state) {
      return (
        <div>
          <h1>
            <a href="/threadForm">New Thread</a>
          </h1>
          <section className="display-item">
            <div className="wrapper">
              <ul style={liStyle}>
                {this.state.threads.map(thread => {
                  console.log(this.state);
                  if (!thread.subject) {
                    console.log("item doesn't exist");
                    return <div>Item is not found</div>;
                  } else {
                    console.log("item exists");
                    return (
                      <li key={thread.id}>
                        <Tile
                          subject={thread.subject}
                          id={thread.id}
                          text={thread.text}
                        />
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </section>
        </div>
      );
    }
    return <div>Error</div>;
  }
}

export default Catalog;
