import React from 'react';

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <form action="https://formspree.io/f/xnqleqrk" method="post">
        <label htmlFor="fullNames">Name</label>
        <input
          className="field"
          type="text"
          placeholder="Name"
          name="fullName"
        />
        <label htmlFor="Email">Email</label>
        <input
          className="field"
          type="email"
          placeholder="Email"
          name="Email"
        />
        <label htmlFor="message">how can I help you?</label>
        <textarea
          className="field"
          required
          name="message"
          id="message"
          cols="40"
          rows="3"
          placeholder="Please enter your message"
        ></textarea>
        <div className="contact-buttons-container">
          <input type="submit" value="send" className="send-btn" />
          <input type="reset" value="reset" className="reset-btn" />
        </div>
      </form>
    </div>
  );
}
