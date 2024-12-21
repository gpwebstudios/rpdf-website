import Image from "next/image";
import styles from "./hero-image-responsive.module.scss"

const HeroImageResponsive = ({ imageSrc , heroText, heroText2}: { imageSrc: any, heroText: string, heroText2: string }) => {

    return (
        <div className={`${styles.heroImageContainer} container-fluid px-0`}>
          <div className="imageWrapper text">        
            <Image className={"hero_image"} src={imageSrc} alt="hero" layout='fill' objectFit="cover"/>
          </div>
          <div className={`${styles.heroTextContainer} text-center`}>
            <h1 className={`${styles.hero_text}`}>{heroText}</h1>
          <h1 className={`${styles.hero_text}`}>{heroText2}</h1>
          </div>
          
        </div>
      );
};

export default HeroImageResponsive;