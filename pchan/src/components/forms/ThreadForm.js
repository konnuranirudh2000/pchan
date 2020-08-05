import React from "react";

import { storage } from "../../config/firebaseConfig";
import { database } from "../../config/firebaseConfig";
const shortid = require("shortid");

class ThreadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      text: "",
      img: null,
      imgname: ""
    };
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleUpload = e => {
    e.preventDefault();
    const imageFile = this.state.img;
    var imageName = imageFile.name;
    console.log(imageName);
    var imageExtension = imageName.split(".")[imageName.split(".").length - 1];
    var newName = `${shortid.generate()}${Date.now()}.${imageExtension}`;
    storage.ref(`images/${newName}`).put(imageFile);
    var thread = {
      subject: this.state.subject,
      text: this.state.text,
      imagename: newName
    };
    database.ref("/temp").push(thread);
  };

  handleChange = e => {
    var image = e.target.files[0];
    this.setState({ img: image });
  };

  handleInputChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>Subject:</label>
          <input type="text" name="subject" onChange={this.handleInputChange} />
          <br />
          <br />
          <label>Text:</label>
          <input type="text" name="text" onChange={this.handleInputChange} />
          <br />
          <br />
          <input type="file" onChange={this.handleChange} />
          <br />
          <br />
          <button onClick={this.handleUpload} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ThreadForm;
