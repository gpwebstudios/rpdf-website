import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import styles from "../styles/htb.module.scss";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import HeroImage from "../components/layout/HeroImage";
import HeroImageResponsive from "../components/layout/HeroImageResponsive";
import heroImg from "../public/htbbanner.png";
import icons from "../public/icons.png";
import ackcard from "../public/ackcard.png";


const HTB = () => {
  return (
    <div>
      <Navbar />
      <HeroImageResponsive imageSrc={heroImg} heroText={"Celebrate Someone Special, Make a Lasting Impact"} />
      <div className="container py-5">
        <div className="row align-items-center d-flex justify-content-center mb-5 mt-2">
          <div className="col-md-4">
            <Image className={styles.icons} src={icons} alt="HTB Logo" layout="intrinsic" priority={true}/>
          </div>
          <div className="col-md-auto align-items-center justify-content-between text-center">
            <h1>Give a Badge, a Star or a Shield</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <Image className={styles.imagecontainer} src={ackcard} alt="HTB Logo" layout="responsive" priority={true} />
          </div>
          <div className={`${styles.paragraph} col-md-9`}>
            <p>Honor the courage and commitment of those who serve and protect our community. The <b>Honor
              the Badge</b> program offers the unique opportunity to make a meaningful donation to the Raleigh
              Police Department Foundation in honor of or in memory of a loved one, friend, or hero. Whether
              recognizing a current officer, remembering a loved one, or saluting a friend's service; your donation
              creates a lasting impact. Every contribution helps the foundation provide critical support,
              resources, and programs for officers and their families.</p>
            <p>Alongside each individual tribute, a personalized acknowledgment card is sent to the honoree or
              their family, letting them know about your generous gift. Your donation helps to fund vital
              initiatives that support officers and the communities they serve.</p>
          </div>
        </div>
        <div>
          <div className={`pl-5`}>
            <div className="flex align-items-start flex-column">
              <div className="pt-1 mt-3 pb-1">
                <h2 >Why Your Support Matters</h2>
                <div className={styles.paragraph}>
                  <p><b>The Raleigh Police Department Foundation</b> n is steadfast in its mission to build a safer, stronger Raleigh – one where trust,
                    compassion, and effective policing thrive. Every single donation to the Foundation directly empowers our officers by
                    providing them with the tools, resources, and support they need to serve our community with excellence.
                  </p>
                  <p>When you choose to donate to <b>Honor the Badge</b>, you’re doing more than making a contribution—you’re creating a meaningful impact. Here’s how:</p>
                  <ul>
                    <li><b>Celebrate Service:</b> Pay tribute to a current officer, loved one, or community leader whose dedication inspires others.</li>
                    <li><b>Preserve Memories:</b> : Honor the legacy of those who gave their lives in service to protect us, ensuring their bravery is never
                      forgotten.</li>
                    <li><b>Strengthen Our Community:</b> Your donation creates lasting change, equipping officers to build trust, enhance safety, and
                      foster deeper connections throughout Raleigh.</li>
                  </ul>
                  <p>By donating to <b>Honor the Badge</b>, you are part of something bigger – a movement to uplift those who dedicate their lives to
                    protecting ours while shaping a brighter, safer future for everyone. Your support goes beyond the moment; it creates a ripple
                    effect of kindness, respect, and security that will be felt across generations. Join us in making a difference today.</p>
                </div>
              </div>
              <div className="pt-1 mt-3 pb-3 border-bottom">
                <p className={styles.paragraph}>Together, we can make a difference. Honor a hero in your life while making an impact in the lives of many.</p>
                <a href="https://www.paypal.com/donate/?hosted_button_id=ZEWB49DX3C6SW" className={`btn btn-primary px-5 mt-3`}>I Want to Honor the Badge</a>
                <p className={styles.text}><i>Please leave gift details on the second page of your checkout process. An acknowledgment card will be sent to the name and address provided.</i></p>
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