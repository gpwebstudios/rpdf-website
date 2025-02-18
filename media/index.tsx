import media1 from "./botb2.png";
import media2 from "./htbbanner.png";
import media3 from "./rpdf-hero-1.png";
import media4 from "./rpdf-hero-2.png";
import media5 from "./supportBg.png";

export const media = [media1, media2, media3, media4,media5];
export const mediaByIndex = (index: number) => media[index % media.length];
