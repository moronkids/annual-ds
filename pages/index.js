import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
//components
import SectionIntro from "components/landing-page/section-intro";
import SectionDesc from "components/landing-page/section-desc";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className="ds-container d-flex flex-column mx-auto">
        <SectionIntro />
      </div>
      <SectionDesc />
    </div>
  );
}
