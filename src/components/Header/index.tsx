/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, useLocation } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import styles from "./styles.module.scss";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logoImg} alt="Logo DIO Shopping" />
        <div className={styles.menuNavigation}>
          <Link to="/">
            <a className={pathname === "/" ? styles.active : ""}>Home</a>
          </Link>
          <Link to="/contact">
            <a className={pathname === "/contact" ? styles.active : ""}>
              Contact
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
