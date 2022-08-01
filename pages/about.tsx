import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import videoPlaceholder from "../public/video-placeholder.png";

import aboutUs from "../public/aboutUs.png"
import placeholderAvatar from "../public/boardMembers/avatarPlaceholder.png"

import styles from "../styles/About.module.scss"


const bodOfficers = [
  { name: "Brenda Gibson", position: 'Chair', background: 'Community Leader', imgSrc: placeholderAvatar },
  { name: "Christine Craig", position: 'Vice Chair', background: 'Vice President, Government Relations, WakeMed Health & Hospital', imgSrc: placeholderAvatar },
  { name: "Kristye Brackett", position: 'Secretary', background: 'Senior Counsel, CapDev', imgSrc: placeholderAvatar },
  { name: "Maurice Smith", position: 'Treasurer', background: 'CEO, Local Government Federal Credit Union', imgSrc: placeholderAvatar },
  { name: "Temple Sloan, IV", position: 'Chair, Executive Committee', background: 'Trail Creek Investments', imgSrc: placeholderAvatar },
];

const bodMembers = [
  { name: "Larry Barbour", background: 'President & CEO, North State Bank', imgSrc: placeholderAvatar },
  { name: "Scott Duckworth", background: 'Regional President, Brasfield & Gorrie', imgSrc: placeholderAvatar },
  { name: "Dr. Tim Garner", background: 'Raleigh Neurosurgical Clinic', imgSrc: placeholderAvatar },
  { name: "Laurie Geer", background: 'Community Leader', imgSrc: placeholderAvatar },
  { name: "Gaffney Gunter", background: 'Owner/Operator, Gunter Enterprises Inc.', imgSrc: placeholderAvatar },
  { name: "Curry Huskes", background: 'Area Sales Manager, CPI Security', imgSrc: placeholderAvatar },
  { name: "Bryan Pfohl", background: 'Chairman & CEO, Sunrock Group Holdings', imgSrc: placeholderAvatar },
  { name: "Chandler Spaulding", background: 'Director, Communications & Government Relations, Smith Anderson Law Firm', imgSrc: placeholderAvatar },
  { name: "Judy Zelnak", background: 'Community Leader', imgSrc: placeholderAvatar },
  { name: "Silvia West", background: 'North Carolina Museum of History', imgSrc: placeholderAvatar },
];


const About = () => {
  return (
    <div>
      <Navbar />
      <div className={`${styles.videoHero} bg-primary bg-gradient container-fluid mb-5`}>
        <div className="container">
          <div className="row row-align-center">
            <div className="col-md-6">
              <div className="shadow-lg">
                <Image src={videoPlaceholder} alt="RPDF Logo" layout="responsive" />
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
              <Image src={aboutUs} alt="RPDF Logo" layout="responsive" />
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
            <p>The Raleigh Police Department Foundation (RPDF) was established in 2022 by local business and civic leaders to strengthen the Raleigh Police Department services and to promote public safety in Raleigh by organizing innovative programs and events that raise tax-deductible donations. An independent, non-profit 501c3 organization, RPDF dedicates its efforts to assuring safer neighborhoods and highly -skilled and equipped police through better technology, education, and programming.</p>
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
                <div className={styles.bodImageWrapper}>
                  <Image src={data.imgSrc} alt="RPDF Logo" layout="responsive" />
                </div>
                <div className="text-uppercase pt-3">{data.position}</div>
                <div className="fs-3 fw-bold py-1">{data.name}</div>
                <div className={`${styles.textGray1} pb-5`}>{data.background}</div>
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
              <div className={styles.bodImageWrapper}>
                <Image src={data.imgSrc} alt="RPDF Logo" layout="responsive" />
              </div>
              <div className="fs-4 fw-bold py-1">{data.name}</div>
              <div className={`${styles.textLightGray} pb-5`}>{data.background}</div>
            </div>
          ))}
        </div>
      </div>


      <ContactForm />
      <Footer />
    </div>
  );
}

export default About;