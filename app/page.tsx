import shopify from '@shopify/app-bridge'
import styles from "./page.module.css";
import Script from "next/script";

export default function Home() {
  return (
    <main className={styles.main}>
      <button id="open-picker">Open Resource Picker</button>
    
    </main>
  );
}
