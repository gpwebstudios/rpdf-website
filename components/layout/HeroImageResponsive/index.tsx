import Image from "next/image";
import styles from "./hero-image-responsive.module.scss"

const HeroImageResponsive = ({ imageSrc , heroText}: { imageSrc: any, heroText: string }) => {

    return (
        <div className={`${styles.heroImageContainer} container-fluid px-0`}>
          <div className="imageWrapper">        
            <Image className={"hero_image"} src={imageSrc} alt="hero" layout='fill' objectFit="cover"/>
          </div>
          <h1 className={"hero_text"}>{heroText}</h1>
        </div>
      );
};

export default HeroImageResponsive;