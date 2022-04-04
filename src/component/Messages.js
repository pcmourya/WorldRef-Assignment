import React from "react";
import "./Messages.css";

function Messages() {
  return (
    <div className="main-container">
      <div className="address">
        <div className="date">
          <p>16 Feb 2021</p>
          <p>Deal No.: 89713</p>
        </div>
        <div>
          <div className="date">
            <h3>Some sort of text </h3>
          </div>
        </div>
      </div>
      <div className="message">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Messages;
