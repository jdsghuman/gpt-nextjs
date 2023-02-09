import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames/bind";
import Button from "@components/Button";

import styles from "./Nav.module.scss";
const cx = classNames.bind(styles);

const Nav = () => {
  const router = useRouter();

  const handleLink = (link: string) => {
    router.push(link);
  };

  return (
    <nav className={styles.nav}>
      <Button
        onClick={() => handleLink("/")}
        className={cx("button", {
          button__active: router.pathname === "/",
        })}
      >
        Text
      </Button>
      <Button
        onClick={() => handleLink("art")}
        className={cx("button", {
          button__active: router.pathname === "/art",
        })}
      >
        Art
      </Button>
    </nav>
  );
};

export default Nav;
