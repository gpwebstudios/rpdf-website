import Navbar from "../components/layout/Navbar";
import heroImg from "../public/ourworkhero_crop.png"
import c1 from "../public/rpdf_tech6.jpg"
import c2 from "../public/training.png"
import c3 from "../public/officerSmile.jpg"
import c4 from "../public/community.png"
import Image from "next/image";
import styles from '../styles/OurWork.module.scss'
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer"
import logo from "../public/shieldlogo.svg";
import HeroImage from "../components/layout/HeroImage";



const OurWork = () => {
  return (
    <div>
      <Navbar />
      <HeroImage imageSrc={heroImg} heroText={"Promoting a Thriving Community"} />

      <main className={styles.main}>
        <div className={`pb-5 ${styles.details}`}>
          <h5 className={styles.title}>
            The funds raised through the Raleigh Police Department Foundation (RPDF) support the health and safety of our community.
            By providing better technology, education and programming, the RPDF is dedicated to assuring safer neighborhoods and a highly-skilled and equipped police force.
          </h5>
        </div>
        <section className={`${styles.section} container-fluid`}>
          <div className={styles.grid}>
            <div className={`${styles.card} mx-auto text-center pt-2`}>
              <h2>Innovation & Equipment</h2>
              <Image src={c1} alt="Innovation & Equipment" className={'text-center'} width={450} height={300} layout="responsive" />
              <p className={styles.text}>By providing better technology, education and programming, the RPDF is dedicated to assuring safer neighborhoods and a highly-skilled and equipped police force.</p>
            </div>

            <div className={`${styles.card} mx-auto text-center pt-2`}>
              <h2>Advanced Training & Leadership</h2>
              <Image src={c2} alt="Advanced Training & Leadership" width={450} height={300} layout="responsive" />
              <p className={styles.text}>Funding specialty skills training and leadership development opportunities that strengthen the RPD and its ability to keep our communities safe.</p>
            </div>
          </div>
        </section>


        <div className={styles.center}>
          <svg className={styles.svg} width="310" height="30" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 300 10" stroke="#23578E" />
          </svg>
          <Image src={logo} alt="shield logo" className="pt-3 pb-3" />
          <svg className={styles.svg} width="310" height="30" strokeWidth="3" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 10 L 300 10" stroke="#23578E" />
          </svg>
        </div>

        <section className={`${styles.section} container-fluid`}>
          <div className={styles.grid}>
            <div className={`${styles.card} mx-auto text-center pt-2`}>
              <h2>Supporting Our Officers</h2>
              <Image src={c3} alt="Supporting Our Officers" width={450} height={300} layout="responsive" />
              <p className={styles.text}>Honoring fallen heroes, and/or aiding police officers and their families who are seriously injured in the line of duty.</p>
            </div>

            <div className={`${styles.card} mx-auto text-center pt-2`}>
              <h2>Community Support</h2>
              <Image src={c4} alt="Community Support" width={450} height={300} layout="responsive" />
              <p className={styles.text}>Strengthening our community through youth and outreach programs, internships and scholarships to support tomorrow’s police force.</p>
            </div>
          </div>
        </section>

      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default OurWork;