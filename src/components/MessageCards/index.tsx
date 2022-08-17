import styles from "./styles.module.scss";

interface MessageProps {
  id: string;
  email: string;
  message: string;
  created_at: string;
  dataFormatted: string;
}

interface MessageCardsProps {
  messages: MessageProps[];
}

const MessageCards = ({ messages }: MessageCardsProps) => {
  return (
    <>
      {messages.length === 0 ? (
        <h3>Nenhuma mensagem cadastrada!</h3>
      ) : (
        messages.map(({ id, message, email, dataFormatted }) => (
          <div key={id} className={styles.cards}>
            <h1>E-mail: {email}</h1>
            <p>Mensagem: {message}</p>
            <span>{dataFormatted}</span>
          </div>
        ))
      )}
    </>
  );
};

export default MessageCards;
