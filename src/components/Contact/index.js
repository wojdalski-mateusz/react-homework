import { useState } from "react";
import Button from "../Button/index";
import * as S from "./styles";

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
      <S.ContactForm onSubmit={handleSubmit}>
        <h4>Email</h4>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="wprowadź e-mail"
          autoFocus
          required
          onChange={({ target }) => setEmail(target.value)}
        />
        <h4>Wiadomość</h4>
        <textarea
          name="message"
          value={message}
          placeholder="wpisz treść wiadomości"
          rows={10}
          required
          onChange={({ target }) => setMessage(target.value)}
        />
        <Button text={"Wyślij"} />
      </S.ContactForm>
      <div>
        {list.map(({ email, message }) => (
          <S.UserInputArea>
            <p>E-mail: {email}</p>
            <p>Wiadomość: {message}</p>
          </S.UserInputArea>
        ))}
      </div>
    </div>
  );
};

export default Contact;
