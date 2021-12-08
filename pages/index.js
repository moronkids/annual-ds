import Head from "next/head";
//dummy data
import datadesc from "src/helpers/dummy-data/datadesc.json";
import datafund from "src/helpers/dummy-data/datafund.json";
//components
import SectionIntro from "src/components/landing-page/sl/section-intro";
import SectionDesc from "src/components/landing-page/sl/section-desc";
import SectionAct from "src/components/landing-page/sl/section-our-act";
import SectionStartUp from "src/components/landing-page/sl/section-startup-type";
import { 
  SectionGadget, 
  SectionPartners,
  SectionReaders,
  SectionJourney,
  SectionEcosystem, 
  SectionWhatNext,
  SectionDevices
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
      <SectionStartUp reverse={false} startuptype={"unicorn"} />
      <SectionStartUp reverse={true} startuptype={"centaur"} />

      <SectionGadget />

      <SectionDevices />

      <SectionReaders />

      <SectionPartners />

      <SectionWhatNext />

      <SectionJourney />

      <SectionEcosystem />
    </div>
  );
}
