import React from "react";
import "./ChooseUs.css";

function ChooseUs() {
  return (
    <div className="choose-us-section-parent">
      <section class="chooseUsSection">
        <div class="chooseUsSectionTitles">
          <p class="chooseUsSectionTitle">Why Choose Us JARD ?</p>
          {/* <h2 class="chooseUsSectionDescription">
            We stand out through a combination of extensive experience and
            exceptional credentials. Our commitment to ongoing engagement and
            collaboration ensures that we consistently deliver exceptional value
            to you
          </h2> */}
        </div>

        {/* <!-- Choose Us cards --> */}
        <div class="chooseUsCardsParent">
          {/* <!-- Card one --> */}
          <section class="chooseUsCards">
            <img
              src="./Assets//Icons/icons8-molecules-48.png"
              alt="Expert"
              width="50px"
              height="50px"
              loading="lazy"
              class="chooseUsCardIcon"
            />
            <h3 class="chooseUsCardTitle">Expertise and Experience</h3>
            <p class="chooseUsCardContent">
              Our JARD Foundation team is comprised of seasoned professionals
              with vast understanding in a variety of sectors such as company
              development, technology, finance, and policy advocacy. We provide
              a wide range of skills and market insights to our programs and
              projects, ensuring that our clients receive the best possible
              guidance and help.
            </p>
          </section>

          <section class="chooseUsCards">
            <img
              src="./Assets//Icons/icons8-telegram-32.png"
              alt="Expert"
              width="50px"
              height="50px"
              loading="lazy"
              class="chooseUsCardIcon"
            />
            <h3 class="chooseUsCardTitle">Good Network and Partnerships</h3>
            <p class="chooseUsCardContent">
              We have good links with investors, financial institutions,
              investors, government agencies, industry specialists, and other
              key parties. We may access financial sources, utilize our
              capabilities, and develop advantageous relationships for our
              clients through these partnerships. Working with us gives you
              access to a vast network of opportunities and assistance.
            </p>
          </section>
          {/* <!-- Card three --> */}
          <section class="chooseUsCards">
            <img
              src="./Assets//Icons/tools.png"
              alt="Expert"
              width="50px"
              height="50px"
              loading="lazy"
              class="chooseUsCardIcon"
            />
            <h3 class="chooseUsCardTitle">Client Centered Approsch</h3>
            <p class="chooseUsCardContent">
              At JARD Foundation, we prioritize our clients' needs and
              ambitions. We follow a client-centered attitude, tailoring our
              programs and services to their specific needs. We develop deep
              relationships with our consumers by listening to their feedback
              and continuously improving our services.
            </p>
          </section>

          <section class="chooseUsCards">
            <img
              src="./Assets//Icons/tools.png"
              alt="Expert"
              width="50px"
              height="50px"
              loading="lazy"
              class="chooseUsCardIcon"
            />
            <h3 class="chooseUsCardTitle">Transparent and Accountable</h3>
            <p class="chooseUsCardContent">
              These are fundamental concepts in how we conduct business. By
              keeping lines of communication open and sending out frequent
              updates, we ensure that our operations are compatible with our
              stated objective and values. We are committed to using resources
              wisely and effectively, and we make every effort to adhere to the
              highest moral and ethical standards.
            </p>
          </section>

          <section class="chooseUsCards">
            <img
              src="./Assets//Icons/tools.png"
              alt="Expert"
              width="50px"
              height="50px"
              loading="lazy"
              class="chooseUsCardIcon"
            />
            <h3 class="chooseUsCardTitle">Impact and Sustainability</h3>
            <p class="chooseUsCardContent">
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
