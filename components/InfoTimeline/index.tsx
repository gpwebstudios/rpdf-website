import Image from "next/image";
import styles from "./info-timeline.module.scss";
import tl1 from "../../public/video-placeholder.png"
import tl2 from "../../public/tl-2.png"
import tl3 from "../../public/tl-3.png"
import tl4 from "../../public/tl-4.png"
import { BsFillPlayFill } from 'react-icons/bs'



const pageData = [
  {
    imageSrc: tl1,
    description: "The RPDF is an independent, non-profit organization dedicated to assuring safer neighborhoods and highly-skilled and equipped police through better technology, education and programming.",
    buttonText: "Play Video",
  },
  {
    imageSrc: tl2,
    description: "The RPDF funds critical equipment and initiatives designed to support a thriving community.",
    buttonText: "Our Work",
  },
  {
    imageSrc: tl3,
    description: "The RPDF aims to protect our community by strengthening the Raleigh Police Department services and promoting public safety.",
    buttonText: "About Us",
  },
  {
    imageSrc: tl4,
    description: "Take a look behind the badge and meet the inspiring officers who work tirelessly to protect our community.",
    buttonText: "The Faces of The RPD",
  },
]

const InfoTimeline = () => {
  return (
    <>
      <div className={`${styles.infoTimeline} container-fluid`}>
        <div className={styles.timelineDotsContainer}>
        </div>
        <div className={styles.tlLine}>
          {pageData.map((data, index) => (
            <div className="row text-center align-items-center" key={index}>
              <div className="col-md-6">
                <div className={`${styles.imageWrapper} p-5 m-auto `}>
                  <Image src={data.imageSrc} alt="RPDF Logo" layout="responsive" />
                </div>
              </div>
              <div className={`col-md-6 text-center ${index % 2 == 0 ? '' : styles.colOrderFirst}`}>
                <div className={`${styles.sectionDescription} fs-4 pb-5 m-auto`}>
                  {data.description}
                </div>
                <button className="btn btn-primary px-5">
                  <div className="d-flex align-items-center"> {data.buttonText === 'Play Video' && <><BsFillPlayFill /> &nbsp;</>}
                    {data.buttonText}</div>

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>);
}
export default InfoTimeline