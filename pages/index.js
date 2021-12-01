import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
//components
import SectionIntro from "src/components/landing-page/sl/section-intro";
import SectionDesc from "src/components/landing-page/sl/section-desc";
import SectionAct from "src/components/landing-page/sl/section-our-act";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className="ds-container d-flex flex-column mx-auto">
        <SectionIntro />
      </div>
      <SectionDesc />
      <SectionAct />
    </div>
  );
}
