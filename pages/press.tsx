import Navbar from "../components/layout/Navbar";
import heroImg from "../public/raleigh-city.png"
import ContactForm from "../components/ContactForm";
import Footer from "../components/layout/Footer"
import HeroImage from "../components/layout/HeroImage";
import styles from "../styles/Press.module.scss";

const newsArticles = [
    {
        date: 'SAMPLE',
        title: 'SAMPLE',
        description: 'SAMPLE',
        link: 'https://www.wral.com/raleigh-police-host-coffee-with-a-cop-to-break-down-barriers/20507993/'
    },
    {
        date: 'SAMPLE',
        title: 'SAMPLE',
        description: 'SAMPLE',
        link: 'https://www.cbs17.com/news/local-news/wake-county-news/no-more-horsing-around-raleigh-police-add-new-horse-to-department/'
    },
    {
        date: 'SAMPLE',
        title: 'SAMPLE',
        description: 'SAMPLE',
        link: 'https://abc11.com/raleigh-police-coffee-with-a-cop-day-downtown-chief-estella-patterson/12297325/'
    },
    /* {
        date: '',
        title: '',
        description: '',
        link: ''
    }, */
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