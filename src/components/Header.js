import { useCallback } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import classes from "./Header.module.css";
import Menu, { MenuItem } from "./Menu";
import GoogleLogo from "../assets/google-black.png";
import EmailLogo from "../assets/envelope-black.png";

function Button({ icon, children, onClick }) {
  return (
    <button className={classes.button} onClick={onClick}>
      <Icon name={icon} />
      <span className={classes.label}>{children}</span>
    </button>
  );
}

export default function Header() {
  const renderMenuButton = useCallback(
    (onClick) => (
      <Button icon="account_circle" onClick={onClick}>
        Login
      </Button>
    ),
    []
  );
  const loginWithGoogle = useCallback(() => console.log("Google"), []);

  return (
    <header className={classes.container}>
      <div className={classes.content}>
        <Logo />
        <ul className={classes.nav}>
          <li>
            <Link to="/settings">
              <Button icon="settings">Setting</Button>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
