import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js</title>
      </Head>
      
      <div>Welcome to <a className="text-teal-500" href="https://nextjs.org/docs/getting-started" target="_blank" rel="noreferrer">Next.js</a></div>
      
    </>
  );
}
