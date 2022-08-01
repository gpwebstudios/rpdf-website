import Image from "next/image";
import chiefSignature from "../../public/chief-signature.svg";
import chiefPortrait from "../../public/chief-portrait.png"

const ContactForm = () => {
  return (<>
    <div className="container letter-container my-5">
      <div className="card shadow">
        <div className="card-body p-5">
          <h3 className="card-title pb-4">A Message from The Chief</h3>
          <div className="py-3">Greetings,</div>
          <div className="pb-3">As Chief of Police, it is my honor to lead the dedicated men and women of the Raleigh Police Department.  In August 2021, I arrived to the Capital City with the vision of making Raleigh the safest city in America.  To fulfill this vision, I firmly believe it will take the commitment of our employees, the collaboration of the community, and the support of stakeholders such as the Raleigh Police Department Foundation (RPDF).  </div>
          <div className="pb-3">The City of Raleigh is a progressive and thriving metropolis with a rich tradition of standing with those who serve.  The formation of the RPDF is evidence of this.  It serves as the catalyst that sets RPD apart from other major city police departments.  The members of the Department are devoted to the safety of our community by providing the highest level of service to all who live, work, play, and learn in Raleigh.  We serve with integrity, honesty, and professionalism while treating all with dignity and respect.  Our team consists of 800 sworn officers and 106 civilian members who stand ready as guardians. While steadfast in our commitment, we cannot successfully complete our duties without stakeholders. As we continue to work collaboratively, I am confident we will be successful in reducing crime and improving the quality of life for residents.</div>
          <div className="pb-3">I look forward to a strong and sustaining partnership with the Raleigh Police Department Foundation.  Together our community and police department alike will continue to thrive.  </div>
          <div className="py-3 mb-3">Warm Regards,</div>
          <div className="flex">
            <div className="py-4">
              <Image src={chiefSignature} alt="RPDF Logo" width={325} />
            </div>
          </div>
          <div className="image-container">
            <Image src={chiefPortrait} alt="RPDF Logo" width={400} />
          </div>
        </div>
      </div>
    </div></>);
}
export default ContactForm