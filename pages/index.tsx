import type { NextPage } from "next";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import DonateSection from "../components/DonateSection";
import EmblaCarousel from "../components/EmblaCarousel/EmblaCarousel";
import InfoTimeline from "../components/InfoTimeline";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import styles from "../styles/Home.module.scss";


const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Raleigh Police Department Foundation</title>
        <meta
          name="description"
          content="Raleigh Police Department Foundation"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <EmblaCarousel slides={slides} />
      <InfoTimeline />
      <DonateSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
