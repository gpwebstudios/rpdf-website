import Image from "next/image";
import { BiDonateHeart } from "react-icons/bi";
import donateImage from "../../public/donateSection.png";
import image1 from "../../public/vertical2.png";
import image2 from "../../public/vertical3.png";
import image3 from "../../public/vertical4.png";
import styles from "./honor-the-badge.module.scss";

const HonorTheBadge = () => {
    return (
      <>
        <div className={`${styles.donateContainer} container-fluid mt-5`}>
          <div className={`${styles.donateRow} row align-items-center`}>
            <div className="col-md-4 px-0">
              <div className={`${styles.imageWrapper} m-auto`}>
                <Image src={image1} alt="RPDF Logo" layout="responsive" />
              </div>
            </div>
            <div className="col-md-4 px-0">
              <div className={`${styles.imageWrapper} m-auto`}>
                <Image src={image2} alt="RPDF Logo" layout="responsive" />
              </div>
            </div>
            <div className="col-md-4 px-0">
              <div className={`${styles.imageWrapper} m-auto`}>
                <Image src={image3} alt="RPDF Logo" layout="responsive" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
export default HonorTheBadge;