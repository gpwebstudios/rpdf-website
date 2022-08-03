import Image from "next/image";
import Link from 'next/link';
import React from "react";
import Button from 'react-bootstrap/Button';
import { BsFillPlayFill } from 'react-icons/bs';
import tl2 from "../../public/tl-2.png";
import tl3 from "../../public/tl-3.png";
import tl4 from "../../public/tl-4.png";
import tl1 from "../../public/chiefVideo.png";
import VideoModal from "../layout/VideoModal";
import styles from "./info-timeline.module.scss";


const pageData = [
  {
    imageSrc: tl1,
    description: "The RPDF is an independent, non-profit organization dedicated to assuring safer neighborhoods and highly-skilled and equipped police through better technology, education and programming.",
    buttonText: "Play Video",
    btnHref: '/'
  },
  {
    imageSrc: tl2,
    description: "The RPDF funds critical equipment and initiatives designed to support a thriving community.",
    buttonText: "Our Work",
    btnHref: '/Our-Work'

  },
  {
    imageSrc: tl3,
    description: "The RPDF aims to protect our community by strengthening the Raleigh Police Department services and promoting public safety.",
    buttonText: "About Us",
    btnHref: '/about'
  },
  {
    imageSrc: tl4,
    description: "Take a look behind the badge and meet the inspiring officers who work tirelessly to protect our community.",
    buttonText: "The Faces of The RPD",
    btnHref: '/Meet-RPD'
  },
]

const InfoTimeline = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className={`${styles.infoTimeline} container mt-5`}>
        <div className={styles.timelineDotsContainer}>
        </div>
        <div className={styles.tlLine}>
          {pageData.map((data, index) => (
            <div className="row text-center align-items-center" key={index}>
              <div className="col-md-6">
                <div
                  className={`${styles.imageWrapper} ${data.buttonText === 'Play Video' ? 'p-5' : 'p-5'} m-auto `}
                  onClick={() => data.buttonText === 'Play Video' && setModalShow(true)}>
                  <Image src={data.imageSrc} alt="RPDF Logo" layout="responsive" />
                </div>
              </div>
              <div className={`col-md-6 text-center ${index % 2 == 0 ? '' : styles.colOrderFirst}`}>
                <div className={`${styles.sectionDescription} pb-4 m-auto`}>
                  {data.description}
                </div>
                {data.buttonText === 'Play Video'
                  ?
                  <Button className="px-5" variant="primary" onClick={() => setModalShow(true)}>
                    <div className="d-flex align-items-center">
                      <BsFillPlayFill /> &nbsp; {data.buttonText}</div>
                  </Button>

                  : <Link href={data.btnHref}>
                    <button className="btn btn-primary px-5">
                      <div className="d-flex align-items-center">
                        {data.buttonText}</div>
                    </button>
                  </Link>
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <VideoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        videoUrl={'https://www.youtube.com/watch?v=Sa-MaK58cG0'}
      />
    </>);
}
export default InfoTimeline