import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import classes from "./main-navigation.module.css";

export default function MainNavigation() {
  const status = useSession().status;
  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href='/'>
        <div className={classes.logo}>Next Auth</div>
      </Link>
      <nav>
        <ul>
          {status !== "authenticated" && (
            <li>
              <Link href='/auth'>Login</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
          )}
          {status === "authenticated" && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
