import Image from "next/image";
import styles from "./donate-section.module.scss";
import donateImage from "../../public/donateSection.png"
import { BiDonateHeart } from "react-icons/bi";

const DonateSection = () => {
  return (
    <>
      <div className={`${styles.donateContainer} container-fluid mt-5`}>
        <div className={`${styles.donateRow} row align-items-center`}>
          <div className="col-md-6 px-0">
            <div className={`${styles.imageWrapper} m-auto `}>
              <Image src={donateImage} alt="RPDF Logo" layout="responsive" />
            </div>
          </div>
          <div className={`${styles.donateDescription} col-md-6 text-center p-3`}>
            <BiDonateHeart />
            <h1 className="py-3">Help Make a Difference</h1>
            <div className="pb-5 px-3 fs-5">
              Every dollar raised by the RPDF is used to support the Raleigh Police Department’s mission of preserving and improving the quality of life here in our community.
            </div>
            <button className="btn btn-primary px-5">Donate Here</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default DonateSection;