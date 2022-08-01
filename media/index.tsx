import media1 from "./rpdf-hero-1.png";
import media2 from "./rpdf-hero-2.png";
import media3 from "./rpdf-hero-3.png";


export const media = [media1, media2, media3];
export const mediaByIndex = (index: number) => media[index % media.length];
