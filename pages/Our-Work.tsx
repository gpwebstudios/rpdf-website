import Navbar from "../components/layout/Navbar";
import heroImg from "../public/ourworkhero_sm.png"
import c1 from "../public/our-work-equipment.png"
import c2 from "../public/our-work-training.png"
import c3 from "../public/our-work-support.png"
import c4 from "../public/our-work-community.png"
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
            <div className={`${styles.card} mx-auto text-center p-2`}>
              <h2>Innovation & Equipment</h2>
              <Image src={c1} alt="Innovation & Equipment" className={'text-center rounded-2'} width={450} height={300} layout="responsive" />
              <p className={styles.text}>By providing better technology, education and programming, the RPDF is dedicated to assuring safer neighborhoods and a highly-skilled and equipped police force.</p>
            </div>

            <div className={`${styles.card} mx-auto text-center p-2`}>
              <h2>Advanced Training & Leadership</h2>
              <Image src={c2} alt="Advanced Training & Leadership" className="rounded-2" width={450} height={300} layout="responsive" />
              <p className={styles.text}>Funding specialty skills training and leadership development opportunities that strengthen the RPD and its ability to keep our communities safe.</p>
            </div>
          </div>
        </section>


        <div className={styles.center}>
          <hr className={styles.hr}/>
          <Image src={logo} alt="shield logo" className="pt-3 pb-3" />
          <hr className={styles.hr}/>
        </div>

        <section className={`${styles.section} container-fluid`}>
          <div className={styles.grid}>
            <div className={`${styles.card} mx-auto text-center p-2`}>
              <h2>Supporting Our Officers</h2>
              <Image src={c3} alt="Supporting Our Officers" className="rounded-2" width={450} height={300} layout="responsive" />
              <p className={styles.text}>Honoring fallen heroes, and/or aiding police officers and their families who are seriously injured in the line of duty.</p>
            </div>

            <div className={`${styles.card} mx-auto text-center p-2`}>
              <h2>Community Impact</h2>
              <Image src={c4} alt="Community Support" className="rounded-2" width={450} height={300} layout="responsive" />
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