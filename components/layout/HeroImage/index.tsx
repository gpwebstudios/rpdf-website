import Image from "next/image";
import styles from "./hero-image.module.scss"

const HeroImage = ({ imageSrc , heroText}: { imageSrc: any, heroText: string }) => {

  return (
    <div className={`${styles.heroImageContainer} container-fluid px-0`}>
      <div className={styles.heroGradient}></div>
      <div>        
        <Image className={"hero_image"} src={imageSrc} alt="hero" layout='fill' />
      </div>
      <h1 className={"hero_text"}>{heroText}</h1>
    </div>
  );
};

export default HeroImage;