import Image from "next/image";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import HeroImage from "../components/layout/HeroImage";
import Navbar from "../components/layout/Navbar";
import crabtree from "../public/fallenOfficers/crabtree.png";
import sparks from "../public/fallenOfficers/sparks.png";
import allen from "../public/fallenOfficers/allen.png";
import adams from "../public/fallenOfficers/adams.png";
import hale from "../public/fallenOfficers/hale.png";
import holden from "../public/fallenOfficers/holden.png";
import lee from "../public/fallenOfficers/lee.png";
import paul from "../public/fallenOfficers/paul.png";

import heroImg from "../public/raleigh-city.png";
import styles from "../styles/Fallen-Officers.module.scss";

const fallenOfficers = [
  {
    name: "Detective Thomas Gilbert Crabtree",
    background: "Friday, September 1, 1922",
    imgSrc: crabtree,
    link: "https://www.odmp.org/officer/3566-detective-thomas-gilbert-crabtree",
  },
  {
    name: "Patrolman Robert Earl Sparks",
    background: "Saturday, March 8, 1968",
    imgSrc: sparks,
    link: "https://www.odmp.org/officer/12592-patrolman-robert-earl-sparks",
  },
  {
    name: "Patrolman James Wade Allen",
    background: "Thursday, December 5, 1968",
    imgSrc: allen,
    link: "https://www.odmp.org/officer/1145-patrolman-james-wade-allen",
  },
  {
    name: "Patrolman James Gale Lee",
    background: "Thursday, December 5, 1968",
    imgSrc: lee,
    link: "https://www.odmp.org/officer/8016-patrolman-james-gale-lee",
  },
  {
    name: "Police Officer Delma Devon Adams",
    background: "Sunday, February 3, 1980",
    imgSrc: adams,
    link: "https://www.odmp.org/officer/1049-police-officer-delma-devon-adams",
  },
  {
    name: "Police Officer Denise Jericha Holden",
    background: "Friday, August 4, 1995",
    imgSrc: holden,
    link: "https://www.odmp.org/officer/867-police-officer-denise-jericha-holden",
  },
  {
    name: "Detective Paul Andrew Hale",
    background: "Friday, July 11, 1997",
    imgSrc: hale,
    link: "https://www.odmp.org/officer/14937-detective-paul-andrew-hale",
  },
  {
    name: "Master Officer Charles Radford Paul, III",
    background: "Tuesday, September 10, 2002",
    imgSrc: paul,
    link: "https://www.odmp.org/officer/16383-master-officer-charles-radford-paul-iii",
  },
];

const FallenOfficers = () => {
  return (
    <div>
      <Navbar />
      <HeroImage imageSrc={heroImg} heroText={"Remembering Fallen Officers"} />

      <div className="container-fluid bg-light border-top pb-5">
        <div className={`${styles.textLightGray} col pt-5 pb-3 text-center`}>
          <h4>
            The RPDF remembers officers who lost their lives in the line of duty. <br /> Click
            on the photos to learn more about these heroes:
          </h4>
        </div>
        <div className="container text-center">
          <div className="row row-align-center justify-content-center mt-2 g-4">
            {fallenOfficers.map((data, index) => (
              <div className="col-12 col-sm-12 col-md-6" key={index}>
                <a
                  className="col-12 col-sm-12 col-md-6"
                  href={data.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card py-2 officer-card d-flex">
                    <div className={`${styles.bodImageWrapper}`}>
                      <Image
                        src={data.imgSrc}
                        alt={data.name}
                        className="rounded-1"
                        height={125}
                        width={100}
                      />
                    </div>
                    <div className={`${styles.grow1} mx-2`}>
                      <div className="fs-4 fw-bold py-1">{data.name}</div>
                      <div className={`${styles.textLightGray}`}>
                        {data.background}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <main className={styles.main}></main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default FallenOfficers;
