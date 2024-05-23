import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact">
      <form action="" id="contact">
        <div>
          <i>
            Please note that this form is currently in construction, and will
            not send any message to me at the moment!
          </i>
        </div>
        <label htmlFor="email">Your contact information:</label>
        <input type="email" required />
        <label htmlFor="reason">Subject:</label>
        <select name="reason" id="reason" required>
          <option value="recruitment">I have a job opportunity for you</option>
          <option value="connect">I have a question</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="content">Message:</label>
        <input type="text" className="message-content" />
        <div className="not-a-robot">
          <input type="checkbox" id="robot" name="robot" />
          <label htmlFor="robot">I am not a robot</label>
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
