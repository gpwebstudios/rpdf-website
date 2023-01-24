import Navbar from "../components/layout/Navbar";
import heroImg from "../public/ourworkhero_sm.png";
import c1 from "../public/our-work-equipment.png";
import c2 from "../public/our-work-training.png";
import c3 from "../public/our-work-support.png";
import c4 from "../public/our-work-community.png";
import teamRaleigh from "../public/team-raleigh2.png";
import Image from "next/image";
import styles from "../styles/OurWork.module.scss";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import logo from "../public/shieldlogo.svg";
import HeroImage from "../components/layout/HeroImage";

const OurWork = () => {
  return (
    <div>
      <Navbar />
      <HeroImage
        imageSrc={heroImg}
        heroText={"Promoting a Thriving Community"}
      />

      <main className={styles.main}>
        <div className={`pb-5 ${styles.details}`}>
          <h5 className={styles.title}>
            The funds raised through the Raleigh Police Department Foundation
            (RPDF) support the health and safety of our community. By providing
            better technology, education and programming, the RPDF is dedicated
            to assuring safer neighborhoods and a highly-skilled and equipped
            police force.
          </h5>
        </div>
        <section className={`${styles.section} container-fluid`}>
          <div className={styles.grid}>
            <div className={`${styles.card} mx-auto text-center p-2`}>
              <h2>Innovation & Equipment</h2>
              <Image
                src={c1}
                alt="Innovation & Equipment"
                className={"text-center rounded-2"}
                width={450}
                height={300}
                layout="responsive"
              />
              <p className={styles.text}>
                By providing better technology, education and programming, the
                RPDF is dedicated to assuring safer neighborhoods and a
                highly-skilled and equipped police force.
              </p>
            </div>

            <div className={`${styles.card} mx-auto text-center p-2`}>
              <h2>Advanced Training & Leadership</h2>
              <Image
                src={c2}
                alt="Advanced Training & Leadership"
                className="rounded-2"
                width={450}
                height={300}
                layout="responsive"
              />
              <p className={styles.text}>
                Funding specialty skills training and leadership development
                opportunities that strengthen the RPD and its ability to keep
                our communities safe.
              </p>
            </div>
          </div>
        </section>

        <div className={styles.center}>
          <hr className={styles.hr} />
          <Image src={logo} alt="shield logo" className="pt-3 pb-3" />
          <hr className={styles.hr} />
        </div>

        <section className={`${styles.section} container-fluid`}>
          <div className={styles.grid}>
            <div className={`${styles.card} mx-auto text-center p-2`}>
              <h2>Supporting Our Officers</h2>
              <Image
                src={c3}
                alt="Supporting Our Officers"
                className="rounded-2"
                width={450}
                height={300}
                layout="responsive"
              />
              <p className={styles.text}>
                Honoring fallen heroes, and/or aiding police officers and their
                families who are seriously injured in the line of duty.
              </p>
            </div>

            <div className={`${styles.card} mx-auto text-center p-2`}>
              <h2>Community Impact</h2>
              <Image
                src={c4}
                alt="Community Support"
                className="rounded-2"
                width={450}
                height={300}
                layout="responsive"
              />
              <p className={styles.text}>
                Strengthening our community through youth and outreach programs,
                internships and scholarships to support tomorrow’s police force.
              </p>
            </div>
          </div>
        </section>

        <div
          className={`${styles.card} ${styles.mw600}  mx-auto text-center p-2 mt-5`}
        >
          <h2>Team Raleigh</h2>
          <Image
            src={teamRaleigh}
            alt="Team Raleigh"
            className="rounded-2"
            width={450}
            height={300}
            layout="responsive"
          />
          <p className={styles.text}>
            <a
              className={`${styles.link}`}
              href={`https://www.facebook.com/TeamRaleighLEU/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Team Raleigh LEU </strong>
            </a>
            is a group of current and retired law enforcement cyclists. They are
            dedicated to Remembering the Fallen and Inspiring the Standing. The
            core of the team are members of the Raleigh Police Department
            however a few are from other agencies. Their core mission during the
            year is to facilitate and staff the Wreath Laying Ceremonies for the
            Raleigh Police Officers that have died in the line of duty and in
            May of each year they participate in bike ride to Washington DC to
            honor all fallen officers across the United States.
          </p>
        </div>
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default OurWork;
