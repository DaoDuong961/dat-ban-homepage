import Container from "../../../components/common/Container";
import TitleSection from "../../../components/common/TitleSection/titleSection";
import Text from "../../../components/common/Text/text";
import "../../../components/common/TextHead/textHead.css";
import "./promotion.css";

interface Props {}
export default function Promotion(props: Props) {
  return (
    <section className="promotion">
      <Container>
        <div className="text__head">
          <TitleSection
            className="title__head"
            text="Lorem ipsum dolor sit amet"
          />
          <Text
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            porta ante dui, nec condimentum diam auctor nec. Integer auctor
            turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem
            vitae tempor. Donec Integer mollis arcu sit amet mollis blandit.
            Nulla imperdiet molestie nunc. Curabitur vehicula mi dictum in."
          />
        </div>

        {/* promomotion image  */}
        <div className="promo__img">
          <img
            src={require("../../../assets/images/promotion1.jpg")}
            alt="promotion 1"
          />
          <img
            src={require("../../../assets/images/promotion2.jpg")}
            alt="promotion 1"
          />
        </div>
      </Container>
    </section>
  );
}
