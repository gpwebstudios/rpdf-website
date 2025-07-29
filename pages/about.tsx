import Image from "next/image";
import React from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import VideoModal from "../components/layout/VideoModal";
import aboutUs from "../public/aboutUs.png";
import aboutUs2 from "../public/aboutUs2.png";
import BrendaGibson from "../public/boardMembers/Brenda-Gibson.png";
import ChandlerSpaulding from "../public/boardMembers/Chandler-Spaulding.png";
import ChristineCraig from "../public/boardMembers/Christine-Craig.png";
import GaffneyGunter from "../public/boardMembers/Gaffney-Gunter.png";
import JudyZelnak from "../public/boardMembers/Judy-Zelnak.png";
import KristyeBrackett from "../public/boardMembers/Kristye-Brackett.png";
import LarryBarbour from "../public/boardMembers/Larry-Barbour.png";
import LaurieGeer from "../public/boardMembers/Laurie-Geer.png";
import MauriceSmith from "../public/boardMembers/Maurice-Smith.png";
import placeholderAvatar from "../public/boardMembers/rpdfPlaceholder.png";
import JudySteveZelnak from "../public/boardMembers/Judy-Steve-Zelnak.png";
import ScottDuckworth from "../public/boardMembers/Scott-Duckworth.png";
import TempleSloan from "../public/boardMembers/Temple-Sloan.png";
import MikeSmith from "../public/boardMembers/Mike-Smith.png"
import TimGarner from '../public/boardMembers/Tim-Garner.png'
import BryanPfohl from "../public/boardMembers/Bryan-Pfohl.png"
import TinaShanahan from "../public/boardMembers/Tina-Shanahan.png"
import SylviaWest from "../public/boardMembers/Sylvia-West.png"
import TomFritsch from "../public/boardMembers/Tom-Fritsch.png"
import BillBaker from "../public/boardMembers/Bill-Baker.png"
import KadeRoss from "../public/boardMembers/Kade-Ross.png"
import LTMcCrimmon from "../public/boardMembers/LTMcCrimmon.png"
import GregCarr from "../public/boardMembers/Greg-Carr.png"
import chiefVideo from "../public/chiefVideo.png";
import styles from "../styles/About.module.scss";





const bodOfficers = [
  { name: "Brenda Gibson", position: 'Chair', background: 'Community Leader', imgSrc: BrendaGibson },
  { name: "Christine Craig", position: 'Vice Chair', background: 'Vice President, Government Relations', background2: 'WakeMed Health & Hospitals', imgSrc: ChristineCraig },
  { name: "Kristye Brackett", position: 'Secretary', background: 'Senior Counsel, CapDev', imgSrc: KristyeBrackett },
  { name: "Maurice Smith", position: 'Treasurer', background: 'Attorney & Counselor at Law, M Smith Law PLLC', imgSrc: MauriceSmith },
  { name: "Judy Zelnak", position: 'Executive Committee, Member-at-Large', background: 'Community Leader', imgSrc: JudyZelnak },
  { name: "Mike Smith", position: 'Governance Chair', background: 'President, Kane Realty Group', imgSrc: MikeSmith },
  { name: "Kade Ross", position: 'Member-at-Large', background: 'Chief Information Officer, Bandwidth', imgSrc: KadeRoss },
];

const bodMembers = [
  { name: "Bill Baker", background: 'Development Partner, Keith Corporation', imgSrc: BillBaker },
  { name: "Larry Barbour", background: 'President & CEO, North State Bank', imgSrc: LarryBarbour },
  { name: "Greg Carr", background: 'EVP, Executive Director Comerica Bank', imgSrc: GregCarr },
  { name: "Scott Duckworth", background: 'Regional President, Brasfield & Gorrie', imgSrc: ScottDuckworth },
  { name: "Tom Fritsch", background: 'Senior Managing Director, CBRE', imgSrc: TomFritsch },
  { name: "Dr. Tim Garner", background: 'Raleigh Neurosurgical Clinic', imgSrc: TimGarner },
  { name: "Laurie Geer", background: 'Community Leader', imgSrc: LaurieGeer },
  { name: "Gaffney Gunter", background: 'Owner/Operator, Gunter Enterprises Inc.', imgSrc: GaffneyGunter },
  { name: "LT McCrimmon", background: 'Senior Director, APCO', imgSrc: LTMcCrimmon },
  { name: "Bryan Pfohl", background: 'Chairman & CEO, Sunrock Group Holdings', imgSrc: BryanPfohl },
  { name: "Christina Alvarado Shanahan", background: 'RADM, US Navy (Ret)', imgSrc: TinaShanahan },
  { name: "Temple Sloan, IV", background: 'Trail Creek Investments', imgSrc: TempleSloan },
  { name: "Chandler Spaulding", background: 'Director, Communications & Government Relations, Smith Anderson Law Firm', imgSrc: ChandlerSpaulding },
  { name: "Sylvia West", background: 'North Carolina Museum of History', imgSrc: SylviaWest },
];

const donorQuotes = [
  {
    name: "Judy & Steve Zelnak",
    background: "Community Leaders",
    quote: "The starting point for a vibrant, prosperous and enjoyable community is the safety and security of its residents. We are pleased to support the Raleigh Police Chief and our RPD officers as they work to keep Raleigh safe.",
    avatarSrc: JudySteveZelnak
  },
  {
    name: "Gaffney Gunter",
    background: "Owner/Operator, Gunter Enterprises Inc.",
    quote: "There are so many incredible officers on the Raleigh Police force – and their efforts have a tremendous impact on our community. When funding falls short, I’m proud to donate to support the many outreach programs and initiatives that I know will help keep our community safe.",
    avatarSrc: GaffneyGunter
  },
  {
    name: "Bryan Pfohl",
    background: "CEO & Chairman, The Sunrock Group",
    quote: "The reason I support the RPDF is simple — it’s about caring for those who are caring for us.",
    avatarSrc: BryanPfohl
  }
]


const About = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Navbar />
      <div className={`${styles.videoHero} bg-primary bg-gradient container-fluid mb-5`}>
        <div className="container">
          <div className="row row-align-center">
            <div className="col-md-6">
              <div className="shadow-lg" onClick={() => setModalShow(true)}>
                <Image src={chiefVideo} alt="RPDF Logo" layout="responsive" />
              </div>

            </div>
            {/* TODO: should text come before/after video on mobile? */}
            <div className={`${styles.videoDescription} col-md-6 m-auto text-center`}>
              <p>INTRODUCING THE</p>
              <h1>Raleigh Police Department</h1>
              <h1>Foundation</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row row-align-center">
          <div className="col-md-6">
            <div className={styles.imageWrapper}>
              <Image src={aboutUs2} alt="RPDF Logo" layout="responsive" priority={true} />
            </div>
          </div>
          <div className={`${styles.aboutDescription} col-md-6`}>
            <div className="flex align-items-start flex-column">
              <div className="mb-5 pb-5 border-bottom">
                <h2>Our Mission</h2>
                <p>The Raleigh Police Department Police Foundation is an independent, non-profit 501(c)(3) organization whose mission is dedicated to advancing public safety initiatives and promoting police support for a safe and thriving community.</p>
              </div>
              <div className="pt-5 mt-5 pb-5 border-bottom">
                <h2>Our Vision</h2>
                <p>To support the Raleigh Police Department’s mission of making Raleigh the safest city in America.
                </p>
              </div>
            </div>

          </div>
          <div className={`${styles.textLightGray} col py-5`}>
            <p>The Raleigh Police Department Foundation (RPDF) was established in 2022 by local business and civic leaders to strengthen the Raleigh Police Department services and to promote public safety in Raleigh by organizing innovative programs and events that raise tax-deductible donations. An independent, non-profit 501c3 organization, RPDF dedicates its efforts to assuring safer neighborhoods and highly-skilled and equipped police through better technology, education, and programming. For tax purposes, our EIN number is 27-0326382.</p>
          </div>
        </div>
      </div>

      <div className={`${styles.bodContainer} container-fluid text-white text-center p-5`}>
        <h1>Board of Directors</h1>
        <h2>Officers</h2>
        <div className="container">
          <div className="row row-align-center justify-content-center mt-5 px-2 g-4">
            {bodOfficers.map((data, index) => (
              <div className="col-12 col-sm-6 col-md-4" key={index}>
                <div className={`${styles.bodImageWrapper} border border-light border-2 rounded-1`}>
                  <Image src={data.imgSrc} alt="RPDF Logo" layout="responsive" />
                </div>
                <div className="text-uppercase pt-3">{data.position}</div>
                <div className="fs-3 fw-bold py-1">{data.name}</div>
                <div className={`${styles.textGray1} pb-5`}>{data.background}{data.background2 && (<><br /> {data.background2}</>)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h2 className="text-center mt-5">Board Members</h2>
      <div className="container text-center">
        <div className="row row-align-center justify-content-center mt-5 px-2 g-4">
          {bodMembers.map((data, index) => (
            <div className="col-12 col-sm-6 col-md-3" key={index}>
              <div className={`${styles.bodImageWrapper}`}>
                <Image src={data.imgSrc} alt="RPDF Logo" layout="responsive" className="rounded-1" />
              </div>
              <div className="fs-4 fw-bold py-1">{data.name}</div>
              <div className={`${styles.textLightGray} pb-5`}>{data.background}</div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="container-fluid bg-light border-top pb-5">
        <h2 className="text-center mt-5">Hear from Our Donors</h2>
        <div className={`container`}>
          <div className="row row-align-center my-3 g-5">
            {donorQuotes.map((donor, index) => (
              <div className={`${index % 2 === 0 ? '' : 'ms-auto'} col-12 col-md-8`} key={index}>
                <div className={`${index % 2 === 0 ? '' : 'text-end'} bg-white border border-light rounded-1 p-3 shadow-sm`}>
                  <p>"{donor.quote}"</p>
                  <div className={`${index % 2 === 0 ? '' : 'justify-content-end'} d-flex align-items-center`}>
                    <div className={`${index % 2 === 0 ? 'pe-3' : 'order-2 justify-content-end ps-3'} ${styles.donorQuoteAvatar}`}>
                      <Image src={donor.avatarSrc} alt="RPDF Logo" width={100} height={100} className={`rounded-circle border border-2`} />
                    </div>
                    <div className={index % 2 === 0 ? '' : 'text-end'}>
                      — {donor.name}<br /> <i className={styles.textLightGray}>{donor.background}</i>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}


      <ContactForm />
      <Footer />
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        videoUrl={'https://www.youtube.com/watch?v=Sa-MaK58cG0'}
      />
    </div>
  );
}

export default About;