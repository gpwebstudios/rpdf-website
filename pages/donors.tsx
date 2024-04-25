import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import styles from "../styles/Donors.module.scss";
import Flyer from "../components/Flyer";
import bobluddy from "../public/bobluddy.png";
import nancyhall from "../public/nancyhall.png";
import stone from "../public/stone.png";
import raleighneuro from "../public/raleighneuro.png";
import bryanpfohl from "../public/bryanpfohl.png";
import frankholdingjr from "../public/frankholdingjr.png";
import gregorypoole from "../public/gregorypoole.png";
import larrybarbour from "../public/larrybarbour.png";
import toddandlaura from "../public/toddandlaura.png";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import HeroImage from "../components/layout/HeroImage";
import heroImg from "../public/support_sm.png";
import flyer from "../public/rpdf-flyer2.png";


const Donors = () => {
  return (
    <div>
      <Navbar />
      <HeroImage imageSrc={heroImg} heroText={"How Our Donors Make a Difference"} />
      {/* <div className={styles.header}>
        <div className="pb-2 pt-2">
          <h2 className={styles.title}>
            
          </h2>
        </div>
        <div className={`pb-5 ${styles.details}`}>
          <h5>
            Individual and corporate donations to the Raleigh Police Department Foundation are vital to the support the Foundation can give to the RPD.
            Since its founding in 2022, the Board has raised over $3 million to enhance the programs and services so very necessary in making Raleigh the safest city in America.
            While city tax dollars pay salaries and operations, the RPDF steps in to provide a margin of excellence.
            The Raleigh business community, especially, has rallied around the Foundation.
            We are grateful to those generous corporations and individuals who have stepped up to fund the important work of RPD officers-- from electric bicycles for Greenway patrols to youth basketball camps for at-risk teens.
            To all who have heeded the call THANK YOU.
          </h5>
        </div>
      </div> */}
      <div className={`${styles.textLightGray} col p-5 pb-2 text-center`}>
        <h5 className={styles.title}>
          Individual and corporate donations to the Raleigh Police Department Foundation are vital to the support the Foundation can give to the RPD.
          Since its founding in 2022, the Board has raised over $3 million to enhance the programs and services so very necessary in making Raleigh the safest city in America.
          While city tax dollars pay salaries and operations, the RPDF steps in to provide a margin of excellence.
          The Raleigh business community, especially, has rallied around the Foundation.
          We are grateful to those generous corporations and individuals who have stepped up to fund the important work of RPD officers-- from electric bicycles for Greenway patrols to youth basketball camps for at-risk teens.
          To all who have heeded the call THANK YOU.
        </h5>
      </div>
      <div
        className={`${styles.card} ${styles.mw600}  mx-auto text-center p-2 my-5`}
      >
        <Image
          src={flyer}
          alt="Donor Flyer"
          className="border border-4 rounded-1"
          width={1000}
          layout="responsive"
        />
      </div>
      <main className={styles.main}>
        <div className="pb-5">
          <h2 className={styles.title2}>
            Donor Highlights
          </h2>
        </div>
        <div className="container text-center">
          <div className="row row-align-center justify-content-center mt-5 px-2 g-4">
            <div className="col-12 col-md-4 pb-3">
              <div className={`${styles.imageContainer} shadow`}>
                <Image src={larrybarbour} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Larry Barbour</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>on behalf of North State Bank</div>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <div className={`${styles.imageContainer} shadow`}>
                <Image src={bryanpfohl} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Bryan Pfohl</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>Sunrock Group Holdings</div>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <div className={`${styles.imageContainer} shadow`}>
                <Image src={gregorypoole} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Gregory Poole</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>Gregory Poole Equipment Company</div>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <div className={`${styles.imageContainer} shadow`}>
                <Image src={toddandlaura} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Todd Warrick and Laura Bunn</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>First Horizon Bank</div>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <div className={`${styles.imageContainer} shadow`}>
                <Image src={bobluddy} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Bob Luddy</div>
              <div className={`${styles.officerQuote} pb-1 fst-italic`}>CaptiveAire Systems</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>"The Raleigh Police Department is imperative to the civility for all of our citizens. They have always shown great respect and are highly professional. It is important that we support them."</div>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <div className={`${styles.imageContainer} shadow`}>
                <Image src={nancyhall} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Nancy Hall and The Lonnie and Carol Poole Family Foundation</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>"I believe that this police department (RPD) really does an amazing job in the ways that they are engaging in the community and that it is very important."</div>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <div className={`${styles.imageContainer} shadow`}>
                <Image src={stone} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Jim and Caroline Stone</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>"We have both grown up in Raleigh and took the police for granted, and now we feel like it is our turn to step up and support them."</div>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <div className={`${styles.imageContainer} shadow`}>
                <Image src={raleighneuro} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Dr. Tim Garner</div>
              <div className={`${styles.officerQuote} pb-1 fst-italic`}>Raleigh Neurosurgical Clinic</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>"We recognize that the RPD is protecting us, protecting our livelihood, protecting our families, protecting our businesses… we believe that it’s time for us to step up and support our police."</div>
            </div>
            <div className="col-12 col-md-4 pb-3">
              <div className={`${styles.imageContainer} shadow`}>
                <Image src={frankholdingjr} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Frank Holding Jr.</div>
              <div className={`${styles.officerQuote} pb-1 fst-italic`}>First Citizens Bank</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>"We contributed to the Raleigh Police Department Foundation
                because of the great work the Raleigh Police Department does and we want to be a part of supporting them."</div>
            </div>
          </div>
        </div>
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Donors;