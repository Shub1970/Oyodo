import React from "react";
import { useRef } from "react";

const MessageForm = () => {
  const refSubject = useRef();
  const refMessage = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      subject: refSubject.current.value,
      message: refMessage.current.value,
    });
  };

  return (
    <>
      <div className="Message">
        <h2>Send me a message</h2>
        <form className="form" onSubmit={handleSubmit}>
          <h4 className="lable">Subject</h4>
          <input type="text" ref={refSubject} />
          <h4 className="lable">Message</h4>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="message here......."
            ref={refMessage}
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default MessageForm;
