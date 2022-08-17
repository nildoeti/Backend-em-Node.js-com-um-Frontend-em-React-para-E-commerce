import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import ButtonSendMessage from "./ButtonSendMessage";
import Input from "./Input";
import styles from "./styles.module.scss";

const Form = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (email !== "" && message !== "") {
      const response = await api.post("/message", {
        email: email,
        message: message,
      });

      if (response.status === 200) {
        navigate("/");
        navigate("/contact");
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1>Entre em contato</h1>
      <Input
        labelText="E-mail"
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <p style={{ fontSize: "0.6rem", margin: "0.5rem 0", color: "red" }}>
        * Campo obrigatório
      </p>
      <Input
        labelText="Mensagem"
        type="text"
        placeholder="Sua mensagem"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <p style={{ fontSize: "0.6rem", margin: "0.5rem 0", color: "red" }}>
        * Campo obrigatório
      </p>
      <ButtonSendMessage text="Enviar mensagem" />
    </form>
  );
};

export default Form;
