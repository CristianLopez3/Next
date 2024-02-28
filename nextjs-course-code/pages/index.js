import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
