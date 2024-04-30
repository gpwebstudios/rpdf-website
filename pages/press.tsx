import Navbar from "../components/layout/Navbar";
import heroImg from "../public/raleigh-city.png";
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer";
import HeroImage from "../components/layout/HeroImage";
import styles from "../styles/Press.module.scss";

const newsArticles = [
  {
    date: "10/30/23",
    title: "RPDF Adds Three New Board Members",
    description: "The Raleigh Police Department Foundation (RPDF) announces three new members elected to its Board of Directors: Bill Baker, Development Partner, Keith Corporation; Tom Fritsch, Senior Managing Director, CBRE; and Kade Ross, Chief Information Officer, Bandwidth.",
    link: "https://www.instagram.com/p/CzENujArWml/?next=%2Fp%2FCPGWXObLarf%2F&hl=hr&img_index=1",
  },
  {
    date: "10/13/23",
    title: "Meet Teddy: The RPD’s Newest Member",
    description: "Meet Teddy, the newest team member of the Raleigh Police Department. Teddy is the police department's first-ever therapy dog in training.",
    link: "https://www.wral.com/story/meet-teddy-raleigh-police-department-welcomes-newest-member/21095437/",
  },
  {
    date: "09/14/23",
    title: "RPD Gets Enduro Bikes and Adds Greenway Unit",
    description: "Raleigh police are expanding their Greenway unit in hopes of improving public safety.",
    link: "https://www.cbs17.com/news/local-news/wake-county-news/raleigh-police-add-new-enduro-bikes-to-greenway-unit-to-increase-safety-patrols/",
  },
  {
    date: "05/20/23",
    title: "RPD Connects with Local Community for National Police Week",
    description: "National Police Week has come to an end, and Raleigh officers mark it with a meet and greet at the Midtown Farmers Market Saturday afternoon.",
    link: "https://www.wral.com/story/raleigh-police-celebrate-end-of-national-police-week-by-connecting-with-community/20872349/",
  },
  {
    date: "05/14/23",
    title: "WRAL Tower Lights Up Blue to Honor National Police Week",
    description: "The view on Western Boulevard will look a little different this week, as the WRAL News tower lights up blue in honor of National Police Week.",
    link: "https://www.wral.com/story/wral-tower-lights-up-blue-to-honor-national-police-week/20859400/",
  },
  {
    date: "12/21/22",
    title: "Raleigh Police Add New Horse to Department",
    description: "Luna, a Percheron/Quarter horse mix, began her first shift with the police department on Wednesday after receiving new “shoes” for Christmas.",
    link: "https://www.cbs17.com/news/local-news/wake-county-news/no-more-horsing-around-raleigh-police-add-new-horse-to-department/",
  },
  {
    date: "10/6/22",
    title: "Raleigh Police Department, Other Agencies Meet with Community",
    description: "Police officers throughout the Triangle took some time this morning to have a cup of coffee and meet with members of the community.",
    link: "https://abc11.com/raleigh-police-coffee-with-a-cop-day-downtown-chief-estella-patterson/12297325/",
  },
  {
    date: "10/5/22",
    title: "Raleigh Police Host 'Coffee with a Cop'",
    description: "In an effort to increase transparency, engage in the community and develop mutual trust and respect, Raleigh police officers spread out across the city to chat with the community.",
    link: "https://www.wral.com/raleigh-police-host-coffee-with-a-cop-to-break-down-barriers/20507993/",
  },
];

const Press = () => {
  return (
    <div>
      <Navbar />
      <HeroImage imageSrc={heroImg} heroText={"RPDF in the News"} />

      <div className="container-fluid bg-light border-top pb-5">
        <div className={`${styles.textLightGray} col py-5 text-center`}>
          <h4>
            The latest news around the Raleigh Police Department Foundation
          </h4>
        </div>
        <div className={`container border-bottom border-top`}>
          <div className=" my-5 g-5">
            <div className="row row-align-center">
              {newsArticles.map((article, index) => (
                <div className="col-md-6" key={index}>
                  <div
                    className={`${styles.news} bg-white border border-light rounded-1 p-3 shadow-sm mb-3`}
                  >
                    <p className={`${styles.textLightGray}`}>{article.date}</p>
                    <div>
                      <h5 className="">{article.title}</h5>
                      <div className={`${styles.textLightGray} pb-2`}>
                        {article.description}
                      </div>
                      <a className={`${styles.link}`} href={article.link} target="_blank" rel="noopener noreferrer">
                        Read full story
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <main className={styles.main}></main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Press;
