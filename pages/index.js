import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
//components
import SectionIntro from "components/landing-page/section-intro";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className="ds-container d-flex mx-auto">
        <SectionIntro />
      </div>
    </div>
  );
}
