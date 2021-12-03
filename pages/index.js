import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
//components
import SectionIntro from "src/components/landing-page/sl/section-intro";
import SectionDesc from "src/components/landing-page/sl/section-desc";
import { 
  SectionGadget, 
  SectionPartners 
} from "src/components/landing-page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dailysocial - Annual Report 2021</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <div className="ds-container d-flex flex-column mx-auto">
        <SectionIntro />
      </div>
      <SectionDesc />

      <SectionGadget />

      <SectionPartners />
    
    </div>
  );
}
