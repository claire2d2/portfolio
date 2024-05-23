const Contact = () => {
  return (
    <div>
      <form action="" id="contact">
        <div>
          Please note that this form is currently in construction, and will not
          send any message to me at the moment!
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
        <label htmlFor="robot">I am not a robot</label>
        <input type="checkbox" id="robot" name="robot" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Contact;
