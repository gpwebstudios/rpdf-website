import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import styles from "../styles/htb.module.scss";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import HeroImage from "../components/layout/HeroImage";
import HeroImageResponsive from "../components/layout/HeroImageResponsive";
import bgBlue from "../public/bgBlue.png";
import botbFlyer from "../public/botbFlyer.png";


const BOTB = () => {
    return (
        <div>
            <Navbar />
            <HeroImageResponsive imageSrc={bgBlue} heroText={"Battle of The Badges"} heroText2={""} />


            <div className="container text-center">
                <div className="row row-align-center justify-content-center mt-2 g-4">
                    <div className="col-12 col-md-6 pb-3">
                        <div
                            className={`${styles.card} ${styles.mw700}  mx-auto text-center p-2 my-5`}
                        >
                            <Image
                                src={botbFlyer}
                                alt="BOTB Flyer"
                                className="border border-4 rounded-1"
                                width={1500}
                                height={2000}
                                layout="responsive"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <div className="container py-5">
                            <div>
                                <div className={`pl-5`}>
                                    <div className="flex align-items-start flex-column">
                                        <div className="pt-1 mt-3 pb-1">
                                            <h2 >Battle of The Badges</h2>
                                            <div className={styles.paragraph}>
                                                <p>The Raleigh Police Department will compete against the Raleigh Fire Department in a friendly hockey match! This event will take place at the Lenovo Center on April 1, 2025, at 7:00 PM. The public is invited to attend, and all proceeds will benefit Officer Gillick, who was injured in an officer-involved shooting in January of this year. Donations will be accepted through the Raleigh Police Department Foundation at the door and online.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="pt-1 mt-3 pb-3 border-bottom text-center">
                                            <p className={styles.paragraph}>You can learn more about the Raleigh Police Department Foundation and how you can help via the link below, select Officer Gillick in the drop down to donate to his cause.</p>
                                            <a href="https://www.paypal.com/donate/?hosted_button_id=9Q9VAR2DUTRAJ" className={`btn btn-primary px-5 mt-3`}>Donate to RPDF and Officer Gillick</a>
                                        </div>
                                    </div>

                                </div>
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

export default BOTB;