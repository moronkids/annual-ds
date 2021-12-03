import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
//dummy data
import datadesc from "src/helpers/dummy-data/datadesc.json";
import datafund from "src/helpers/dummy-data/datafund.json";
//components
import SectionIntro from "src/components/landing-page/sl/section-intro";
import SectionDesc from "src/components/landing-page/sl/section-desc";
import SectionAct from "src/components/landing-page/sl/section-our-act";
import SectionStartUp from "src/components/landing-page/sl/section-startup-type";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className="ds-container d-flex flex-column mx-auto">
        <SectionIntro />
      </div>
      <SectionDesc
        slide={true}
        data={datadesc.data}
        afterData={datadesc.afterData}
        person={datadesc.person}
        title={datadesc.title}
        afterDataHTML={datadesc.afterDataHTML}
        photo={datadesc.photo}
      />
      <SectionAct />
      <SectionDesc
        slide={datafund.slide}
        reverse={datafund.reverse}
        data={datafund.data}
        afterData={datafund.afterData}
        afterDataHTML={datafund.afterDataHTML}
        photo={datafund.photo}
      />
      <SectionStartUp reverse={false} />
      <SectionStartUp reverse={true} />
    </div>
  );
}
