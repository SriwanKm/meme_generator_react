import Image from "next/image";
import styles from "./page.module.css";
import Head from "./components/Head"
import InputFeild from "./components/InputFeild";
import Meme from "./components/Meme"


export default function Home() {
  return (
    <main>
      <Head />
      <div className={styles.dude}> Hello dude?</div>
      <InputFeild/>
      <Meme/>
    </main>
  );
}
