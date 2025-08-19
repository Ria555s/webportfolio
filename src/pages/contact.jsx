import React from "react";
import "./Contact.css";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">

      <h2 className="contact-heading">Get in Touch</h2>
      <p className="contact-subtext">
        We'd love to hear from you. Send us a message and we'll respond ASAP.
      </p>

      <form className="contact-form">
        <div className="input-group">
          <label>Full Name</label>
          <div className="input-icon">
            <User className="icon" />
            <input type="text" placeholder="Enter your full name" required />
          </div>
        </div>

        <div className="input-group">
          <label>Email Address</label>
          <div className="input-icon">
            <Mail className="icon" />
            <input type="email" placeholder="Enter your email" required />
          </div>
        </div>

        <div className="input-group">
          <label>Subject</label>
          <div className="input-icon">
            <MessageSquare className="icon" />
            <input type="text" placeholder="What’s this about?" required />
          </div>
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea placeholder="Tell us how we can help you..." required></textarea>
        </div>

        <button type="submit" className="send-btn">
          <Send className="send-icon" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;

