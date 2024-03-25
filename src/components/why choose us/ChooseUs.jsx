import React from "react";
import "./ChooseUs.css";

function ChooseUs() {
  return (
    <div className="choose-us-section-parent">
      <section className="chooseUsSection">
        <div className="chooseUsSectionTitles">
          <p className="chooseUsSectionTitle">Why Choose JARD ?</p>
        </div>
        {/* Choose Us cards */} 
        <div className="chooseUsCardsParent">
         {/* Card one */}
          <section className="chooseUsCards">
            <img
              src="./assets/expert-icon.png"
              alt="Expert"
              width="70px"
              height="70px"
              loading="lazy"
              className="chooseUsCardIcon"
            />
            <h3 className="chooseUsCardTitle">Expertise and Experience</h3>
            <p className="chooseUsCardContent">
              Our JARD Foundation team is comprised of seasoned professionals
              with vast understanding in a variety of sectors such as company
              development, technology, finance, and policy advocacy. We provide
              a wide range of skills and market insights to our programs and
              projects, ensuring that our clients receive the best possible
              guidance and help.
            </p>
          </section>
          <section className="chooseUsCards">
            <img
              src="./assets/partners-icon.png"
              alt="Expert"
              width="70px"
              height="70px"
              loading="lazy"
              className="chooseUsCardIcon"
            />
            <h3 className="chooseUsCardTitle">Good Network and Partnerships</h3>
            <p className="chooseUsCardContent">
              We have good links with investors, financial institutions,
              investors, government agencies, industry specialists, and other
              key parties. We may access financial sources, utilize our
              capabilities, and develop advantageous relationships for our
              clients through these partnerships. Working with us gives you
              access to a vast network of opportunities and assistance.
            </p>
          </section>
           {/* Card three */}
          <section className="chooseUsCards">
            <img
              src="./assets/client-icon.png"
              alt="Expert"
              width="70px"
              height="70px"
              loading="lazy"
              className="chooseUsCardIcon"
            />
            <h3 className="chooseUsCardTitle">Client Centered Approsch</h3>
            <p className="chooseUsCardContent">
              At JARD Foundation, we prioritize our clients' needs and
              ambitions. We follow a client-centered attitude, tailoring our
              programs and services to their specific needs. We develop deep
              relationships with our consumers by listening to their feedback
              and continuously improving our services.
            </p>
          </section>
          <section className="chooseUsCards">
            <img
              src="./assets/accountability.png"
              alt="Expert"
              width="70px"
              height="70px"
              loading="lazy"
              className="chooseUsCardIcon"
            />
            <h3 className="chooseUsCardTitle">Transparent and Accountable</h3>
            <p className="chooseUsCardContent">
              These are fundamental concepts in how we conduct business. By
              keeping lines of communication open and sending out frequent
              updates, we ensure that our operations are compatible with our
              stated objective and values. We are committed to using resources
              wisely and effectively, and we make every effort to adhere to the
              highest moral and ethical standards.
            </p>
          </section>
          <section className="chooseUsCards">
            <img
              src="./assets/sustainability-icon.png"
              alt="Expert"
              width="70px"
              height="70px"
              loading="lazy"
              className="chooseUsCardIcon"
            />
            <h3 className="chooseUsCardTitle">Impact and Sustainability</h3>
            <p className="chooseUsCardContent">
              We prioritize long-term impact and sustainable growth over
              short-term profit. The achievements of our clients, the
              communities they serve, and the larger economy serve as our
              yardsticks for success. Working with the JARD Foundation enables
              individuals and organizations to make a genuine difference and
              leave a lasting impression.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}

export default ChooseUs;
