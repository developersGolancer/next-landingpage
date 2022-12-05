import Head from "next/head";
import Header from "../components/header";
import HowItWork from "../components/how-work";
import JobSuccess from "../components/job-success";
import Levels from "../components/levels";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <HowItWork />
        <Levels />
        <JobSuccess />
      </main>
    </div>
  );
}
