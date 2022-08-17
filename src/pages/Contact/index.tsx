import Form from "../../components/Form";
import styles from "./styles.module.scss";
import MessageCards from "../../components/MessageCards";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { FormatDate } from "../../utils/formatDate";

interface MessageProps {
  id: string;
  email: string;
  message: string;
  created_at: string;
  dataFormatted: string;
}

const Contact = () => {
  const [getMessages, setGetMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    const loadMessages = async () => {
      const response = await api.get("/message");

      if (response) {
        if (response.status === 200 && response.data) {
          const messagesFormatted = response.data.map(
            (message: MessageProps) => ({
              ...message,
              dataFormatted: FormatDate(message.created_at),
            })
          );
          setGetMessages(messagesFormatted);
        }
      }
    };

    loadMessages();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Form />
        <section className={styles.messages}>
          <h1>Mensagens</h1>
          <MessageCards messages={getMessages} />
        </section>
      </main>
    </div>
  );
};

export default Contact;
