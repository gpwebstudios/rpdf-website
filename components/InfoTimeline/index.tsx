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
    description: "The RPDF is a non-profit organization dedicated to empowering police with advanced technology, top-notch education, and innovative programs. A well-equipped and well-trained police force means a safer tomorrow, and a safer community, for everyone.",
    buttonText: "Learn More",
    btnHref: '/'
  },
  {
    imageSrc: tl2,
    description: "The RPDF helps to equip our police force with the resources they need to keep our communities safer and more secure through donations of critical equipment and initiatives that make a real difference.",
    buttonText: "See Our Efforts in Action",
    btnHref: '/Our-Work'
  },
  {
    imageSrc: tl3,
    description: "At its core, the RPDF is driven by a steadfast commitment to nurturing a safer, more secure Raleigh for all. Through forward-thinking initiatives and collaborative partnerships, we empower the Raleigh Police Department with the resources and support needed to elevate their capabilities. Our mission is to champion proactive measures that fortify public safety, fostering an environment where our community can thrive without fear.",
    buttonText: "About the RDPF",
    btnHref: '/about'
  },
  {
    imageSrc: tl4,
    description: "Take a look behind the badge and meet the dedicated men and women of the Raleigh Police Department who work tirelessly to protect our communities. These are the incredible local heroes who answer the call, without hesitation, when our safety is on the line.",
    buttonText: "Meet Our Local Heroes",
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
                  className={`${styles.imageWrapper} ${data.buttonText === 'Learn More' ? 'p-5' : 'p-5'} m-auto `}
                  onClick={() => data.buttonText === 'Learn More' && setModalShow(true)}>
                  <Link href={data.btnHref}>
                    <Image src={data.imageSrc} alt="RPDF Logo" layout="responsive" />
                  </Link>
                </div>
              </div>
              <div className={`col-md-6 text-center ${index % 2 == 0 ? '' : styles.colOrderFirst}`}>
                <div className={`${styles.sectionDescription} pb-4 m-auto`}>
                  {data.description}
                </div>
                {data.buttonText === 'Learn More'
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