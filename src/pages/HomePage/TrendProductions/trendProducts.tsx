import Card from "../../../components/common/Card/card";
import TitleSection from "../../../components/common/TitleSection/titleSection";
import Text from "../../../components/common/Text/text";
import "./trendProducts.css";

interface Props {}
export default function trendProducts(props: Props) {
  return (
    <section className="trendProducts">
      <div className="container">
        <div className="text__head">
          <TitleSection className="title_head" text="Lorem ipsum dolor sit amet"/>
          <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. Integer auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Integer mollis arcu sit amet mollis blandit. Nulla imperdiet molestie nunc. Curabitur sed vehicula mi dictum in."/>
        </div>

        {/* trendProducts item   */}
        <div className="trendprocts__item">
          <Card
            className="card"
            src={require("../../../assets/images/trendproduct1.jpg")}
            titleCard="Lorem ipsumt dolor sit amet"
            deception="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <Card
            className="card"
            src={require("../../../assets/images/trendproduct3.jpg")}
            titleCard="Lorem ipsumt dolor sit amet"
            deception="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <Card
            className="card"
            src={require("../../../assets/images/trendproduct2.jpg")}
            titleCard="Lorem ipsumt dolor sit amet"
            deception="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          
        </div>
      </div>
    </section>
  );
}
