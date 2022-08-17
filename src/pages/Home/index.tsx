import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/contact");
    }, 3000);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <h1>404</h1>
      <h3>Page Not Found</h3>
    </div>
  );
};

export default Home;
