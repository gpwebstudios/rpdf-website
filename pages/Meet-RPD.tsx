import Image from "next/image";
import React from "react";
import ChiefLetter from "../components/ChiefLetter";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import HeroImage from "../components/layout/HeroImage";
import Navbar from "../components/layout/Navbar";
import VideoModal from "../components/layout/VideoModal";
import heroImg from "../media/rpdf-hero-3.png";
import BrownVideo from "../public/videoStill-Brown.png";
import KidderVideo from "../public/videoStill-Kidder.png";
import RodriguesVideo from "../public/videoStill-Rodrigues.png";
import ThompsonVideo from "../public/videoStill-Thompson.png";
import styles from '../styles/MeetRPD.module.scss';

const officerData = [
  { name: "JM Thompson", quote: "To be a public servant means to see something that needs to be done and to do it. If I see someone in need, or a victim who needs help, I’m the person who goes in and takes care of that. ", imgSrc: ThompsonVideo },
  { name: "MT Rodrigues", quote: "Typically, when someone calls 911, it could be the worst day of their life. As police officers, when we respond to a call, our goal is to leave that person in a better state than when they called us for help.", imgSrc: RodriguesVideo },
  { name: "Chelsea Kidder", quote: "The community side of policing is what I’m really passionate about. Being out in the community changes your perspective and lets you really help each day.", imgSrc: KidderVideo },
  { name: "Darell Brown", quote: "To serve means something extremely important to me. It really means something when you can solve a problem in a community that can help them sleep better at night.", imgSrc: BrownVideo },
]


const MeetRPD = () => {
  const [modal1Show, setModal1Show] = React.useState(false);
  const [modal2Show, setModal2Show] = React.useState(false);
  const [modal3Show, setModal3Show] = React.useState(false);
  const [modal4Show, setModal4Show] = React.useState(false);

  return (
    <div>
      <Navbar />
      <HeroImage imageSrc={heroImg} heroText={"Meet the RPD"} />

      <main className={styles.main}>
        <div className="pb-5">
          <h2 className={styles.title}>
            Our Officers
          </h2>
        </div>
        <div className="container text-center">
          <div className="row row-align-center justify-content-center mt-5 px-2 g-4">
            <div className="col-12 col-md-6 pb-3">
              <div className={`${styles.imageContainer} shadow`} onClick={() => setModal1Show(true)}>
                <Image src={ThompsonVideo} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">JM Thompson</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>"To be a public servant means to see something that needs to be done and to do it. If I see someone in need, or a victim who needs help, I’m the person who goes in and takes care of that."</div>
            </div>
            <div className="col-12 col-md-6 pb-3">
              <div className={`${styles.imageContainer} shadow`} onClick={() => setModal2Show(true)}>
                <Image src={RodriguesVideo} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">MT Rodrigues</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>"Typically, when someone calls 911, it could be the worst day of their life. As police officers, when we respond to a call, our goal is to leave that person in a better state than when they called us for help."</div>
            </div>

            <div className="col-12 col-md-6 pb-3">
              <div className={`${styles.imageContainer} shadow`} onClick={() => setModal3Show(true)}>
                <Image src={KidderVideo} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Chelsea Kidder</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>"The community side of policing is what I’m really passionate about. Being out in the community changes your perspective and lets you really help each day."</div>
            </div>

            <div className="col-12 col-md-6 pb-3">
              <div className={`${styles.imageContainer} shadow`} onClick={() => setModal4Show(true)}>
                <Image src={BrownVideo} alt="" layout="responsive" objectFit="contain" />
              </div>
              <div className="fs-4 fw-bold py-1">Darell Brown</div>
              <div className={`${styles.officerQuote} pb-5 fst-italic`}>"To serve means something extremely important to me. It really means something when you can solve a problem in a community that can help them sleep better at night"</div>
            </div>
          </div>
        </div>
      </main>
      <ChiefLetter />
      <ContactForm />
      <Footer />
      <VideoModal
        show={modal1Show}
        onHide={() => setModal1Show(false)}
        videoUrl={'https://www.youtube.com/watch?v=WJu9gmK5wLw'}
      />
      <VideoModal
        show={modal2Show}
        onHide={() => setModal2Show(false)}
        videoUrl={'https://www.youtube.com/watch?v=XYQ1eFKJzQg'}
      />
      <VideoModal
        show={modal3Show}
        onHide={() => setModal3Show(false)}
        videoUrl={'https://www.youtube.com/watch?v=JjPx2jYb5FI'}
      />
      <VideoModal
        show={modal4Show}
        onHide={() => setModal4Show(false)}
        videoUrl={'https://www.youtube.com/watch?v=nVrmchQ1TH4'}
      />
    </div>
  );
}

export default MeetRPD;