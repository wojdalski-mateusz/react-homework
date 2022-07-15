import { useState } from "react";

function Contact() {
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
          onChange={(event) => setEmail(event.target.value)}
        />
        <h4>Wiadomość</h4>
        <textarea
          name="message"
          value={message}
          placeholder="wpisz treść wiadomości"
          rows={10}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button>Wyślij</button>
      </form>
      <div>
        {list.map((a) => (
          <div className="user-input-area">
            <p>E-mail: {a.email}</p>
            <p>Wiadomość: {a.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
