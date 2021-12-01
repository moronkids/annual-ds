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
      <SectionDesc
        slide={true}
        data={
          "“2021 is not about adapting anymore, it’s time for us to move forward, strengthen our foundation, to connect, and to innovate more. Within a year, I have to say all of the endeavours and dedication we have invested will only lead us into further improvements. We have done and improve so much, holding one purpose, our dream in DailySocial.id to help as many founders and entrepreneurs navigate technology and innovation, and this is one of those times where we make our dreams come true.”"
        }
        afterData={
          "Here it is what we did in 2021 to make technology and innovation available for all!"
        }
        personData={
          <>
            <p className="p-0 m-0">Rama Muamaya</p>
            <p className="text-desc">Founder & CEO</p>
          </>
        }
        person={
          <>
            <p className="p-0 m-0">Rama Muamaya</p>
          </>
        }
        title={
          <>
            <p className="text-desc">Founder & CEO</p>
          </>
        }
      />
      <SectionAct />
      <SectionDesc
        slide={false}
        reverse={true}
        data={
          "“Even during the pandemic, 2021 has been very generous for Indonesia’s digital industry. As of end of November, the number of disclosed funding transaction is almost doubled year-on-year with around 30% increase of total publicized amount. We also witness the birth of 7 new unicorn startups, this year alone, with at least $1 billion valuation.”"
        }
        afterData={
          <>
            <p className="p-0 m-0">Amir Karimuddin</p>
            <p className="text-desc">
              Chief Editor and Research DailySocial.id
            </p>
          </>
        }
      />
    </div>
  );
}
