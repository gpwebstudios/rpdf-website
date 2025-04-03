//import media1 from "./bgBlue.png";
import media1 from "./htbbanner.png";
import media2 from "./rpdf-hero-1.png";
import media3 from "./rpdf-hero-2.png";
import media4 from "./supportBg.png";

export const media = [media1, media2, media3, media4];
export const mediaByIndex = (index: number) => media[index % media.length];
