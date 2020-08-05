import React from "react";
import queryString from "query-string";
import { database } from "../config/firebaseConfig";
import { storage } from "../config/firebaseConfig";

class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      text: "",
      imagename: ""
    };
  }
  componentDidMount() {
    const url = this.props.location.search;
    const params = queryString.parse(url);
    const id = params.id;
    const threadRef = database.ref(`/temp`).child(id);
    threadRef.on("value", snapshot => {
      let thread = snapshot.val();
      this.setState({
        subject: thread.subject,
        text: thread.text,
        imagename: thread.imagename
      });
    });
  }
  getImage = () => {
    console.log(this.state.imagename);
    storage
      .ref("/")
      .child("images")
      .child(this.state.imagename)
      .getDownloadURL()
      .then(url => {
        this.setState({
          imgurl: url
        });
      });
  };
  render() {
    return (
      <div>
        <h1>{this.state.subject}</h1>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default Thread;
