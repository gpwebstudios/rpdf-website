import Image from "next/image";
import flyer from "../../public/rpdf-flyer.png"

const Flyer = () => {
    return (<>
        <div className={`${styles.flyer} pb-5 pt-5 justify-content-center`}>
            <Image src={flyer} alt="RPDF Logo" width={1000} />
        </div>
    </>);
}

const styles = {
    flyer: {
        width: "100%",
        height: "auto",
    }
}
export default Flyer