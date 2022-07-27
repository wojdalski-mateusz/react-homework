import { useState } from "react";
import Button from "./Button";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, message };
    if (email && message) {
      setList((item) => [...item, data]);
    }
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h1>Formularz kontaktowy</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h4>Email</h4>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="wprowadź e-mail"
          autoFocus
          required
          onChange={({target}) => setEmail(target.value)}
        />
        <h4>Wiadomość</h4>
        <textarea
          name="message"
          value={message}
          placeholder="wpisz treść wiadomości"
          rows={10}
          required
          onChange={({target}) => setMessage(target.value)}
        />
        <Button text={"Wyślij"} />
      </form>
      <div>
        {list.map(({email, message}) => (
          <div className="user-input-area">
            <p>E-mail: {email}</p>
            <p>Wiadomość: {message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
