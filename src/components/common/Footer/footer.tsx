import Container from "../Container";
import TagA from "../TagA/taga";
import "./footer.css";

interface Props {}
export default function Footer(props: Props) {
  return (
    <section className="footer">
      <div className="root__footer">
        <Container>
          <div className="footer__top">
            <div className="about__us">
              <h3>About Us</h3>
              <TagA href="#" text="Lorem ipsum dolor sit amet" />
              <TagA href="#" text="Lorem ipsum dolor sit amet" />
              <TagA href="#" text="Lorem ipsum dolor sit amet" />
              <TagA href="#" text="Lorem ipsum dolor sit amet consectetur" />
              <TagA href="#" text="Lorem ipsum dolor sit amet" />
            </div>
            <div className="payment">
              <h3>Payment</h3>
              <div>
                <img
                  src={require("../../../assets/images/visa.jpg")}
                  alt="visa"
                />
                <img
                  src={require("../../../assets/images/visa.jpg")}
                  alt="visa"
                />
                <img
                  src={require("../../../assets/images/visa.jpg")}
                  alt="visa"
                />
                <img
                  src={require("../../../assets/images/visa.jpg")}
                  alt="visa"
                />
                <img
                  src={require("../../../assets/images/visa.jpg")}
                  alt="visa"
                />
                <img
                  src={require("../../../assets/images/visa.jpg")}
                  alt="visa"
                />
              </div>
            </div>

            <div className="contact__us">
              <h3>Contact Us</h3>
              <TagA href="#" text="Lorem ipsum dolor sit amet" />
              <TagA href="#" text="Lorem ipsum dolor sit amet" />
              <TagA href="#" text="Lorem ipsum dolor sit amet consectetur." />
            </div>

            <div className="support">
              <h3>Support</h3>
              <TagA href="#" text="Lorem ipsum dolor sit amet" />
              <TagA href="#" text="Lorem ipsum dolor sit amet" />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="footer__bottom">
          <div className="foooter__bottom__left">
            <h3>Lorem ipsum dolor sit amet</h3>
            <TagA
              href="#"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <TagA
              href="#"
              text="Phasellus porta ante dui, nec condimentum diam auctor nec."
            />
          </div>

          <div className="footer__bottom__right">
            <img src={require("../../../assets/images/logo.jpg")} alt="" />
            <TagA
              href="#"
              text="Phasellus porta ante dui, nec condimentum diam auctor nec."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
