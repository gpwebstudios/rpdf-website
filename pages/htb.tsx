import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import styles from "../styles/Donors.module.scss";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import HeroImage from "../components/layout/HeroImage";
import heroImg from "../media/honorthebadgehero.png";
import htbimg from "../public/vertical3.png";


const HTB = () => {
    return (
        <div>
      <Navbar />
      <HeroImage imageSrc={heroImg} heroText={""} />
      <div className="container py-5">
        <div className="row row-align-center">
          <div className="col-md-6">
            <div className={styles.imageWrapper}>
              <Image src={htbimg} alt="HTB Logo" layout="responsive" priority={true} />
            </div>
          </div>
          <div className={`${styles.aboutDescription} col-md-6`}>
            <div className="flex align-items-start flex-column">
              <div className="mb-3 pb-3 border-bottom">
                <h2>Celebrate a Local Hero, Make an Impact</h2>
                <p>Honor the courage and commitment of those who serve and protect your local community. Our Honor the Badge program offers a meaningful, personalized way to celebrate someone special or remember a loved one while supporting the Raleigh Police Department Foundation's mission. Your contribution honors their bravery and helps fund vital resources, programs, and support for officers and their families.</p>
                <br />
                <p>Each tribute includes a thoughtful acknowledgment card sent to the honoree or their family, letting them know about your generous gift.</p>
                <h4>Your donation will provide:</h4>
                <ul>
                    <li>Critical support for local officers and their families</li>
                    <li>Funding community initiatives</li>
                    <li>Programs that honor the service and sacrifice of those in uniform</li>
                </ul>
              </div>
              <div className="pt-3 mt-3 pb-3 border-bottom">
                <h2>Why Your Support Matters</h2>
                <p>The Raleigh Police Department Foundation is committed to fostering a safer, stronger community. Every donation ensures our officers have the tools, resources, and encouragement to serve effectively and compassionately. When you donate to Honor the Badge, you:
                </p>
                <ul>
                    <li>Recognize the service of a current officer or loved one.</li>
                    <li>Preserve the memory of a hero who made the ultimate sacrifice.</li>
                    <li>Create a lasting legacy that benefits our community.</li>
                </ul>
              </div>
              <div className="pt-3 mt-3 pb-3 border-bottom">
                <h3>Join Us</h3>
                <p>Together, we can make a difference. Honor a hero in your life while making an impact in the lives of many.</p>
                <a href="/contact" className="btn btn-primary px-5 mt-3">Make a donation today</a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
    );
};

export default HTB;