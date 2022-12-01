import Navbar from "../components/layout/Navbar";
import heroImg from "../public/raleigh-city.png"
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer"
import HeroImage from "../components/layout/HeroImage";
import styles from "../styles/Press.module.scss";

const newsArticles = [
    {
        date: 'October 5, 2022',
        title: 'Raleigh Police Host Coffee with a Cop',
        description: 'In an effort to increase transparency, engage in the community and develop mutual trust and respect, Raleigh police officers on Wednesday are spread out across the city hoping to chat with the community.',
        link: 'https://www.wral.com/raleigh-police-host-coffee-with-a-cop-to-break-down-barriers/20507993/'
    },
    {
        date: 'November 5, 2022',
        title: 'RPDF Purchases New Equipment for RPD',
        description: 'Courtesy of generation donations from RPDF supporters, the RPDF was able to purchase new equipment for the RPD.',
        link: 'https://www.google.com'
    },
    {
        date: 'December 5, 2022',
        title: 'RPDF Hosts 1st Annual Holiday Party',
        description: 'RPDF hosted its first annual holiday party for RPD officers and their families.',
        link: 'https://www.google.com'
    },
    {
        date: 'January 5, 2023',
        title: 'Raleigh Police Save Kittens',
        description: 'Raleigh police officers saved a litter of kittens from a burning building.',
        link: 'https://www.google.com'
    },
]

const Press = () => {
    return (
        <div>
            <Navbar />
            <HeroImage imageSrc={heroImg} heroText={"RPDF in the News"} />

            <div className="container-fluid bg-light border-top pb-5">
                <div className={`${styles.textLightGray} col py-5 text-center`}>
                    <h4>The latest news around the Raleigh Police Department Foundation</h4>
                </div>
                <div className={`container border-bottom border-top`}>
                    <div className=" my-5 g-5">
                        <div className="row row-align-center">
                            {newsArticles.map((article, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className={`${styles.news} ${index % 2 === 0 ? '' : `${styles.right}`} ${index % 2 === 1 ? '' : `${styles.left}`} bg-white border border-light rounded-1 p-3 shadow-sm`}>
                                        <p className={`${styles.date}`}>{article.date}</p>
                                        <div>
                                            <h5 className="">{article.title}</h5>
                                            <div className={`${styles.textLightGray} pb-2`}>
                                                {article.description}
                                            </div>
                                            <a className={`${styles.link}`} href={article.link}>Read full story</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <main className={styles.main}>

            </main>
            <ContactForm />
            <Footer />
        </div>
    );
}

export default Press;