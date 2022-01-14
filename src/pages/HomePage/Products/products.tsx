import Card from "../../../components/common/Card/card";
import TitleSection from "../../../components/common/TitleSection/titleSection";
import Text from "../../../components/common/Text/text";
import "./products.css";

interface Props {}
export default function Products(props: Props) {
  return (
    <section className="products">
      <div className="container">
        <div className="text__head">
          <TitleSection className="title__head" text="Lorem ipsum dolor sit amet"/>
          <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta ante dui, nec condimentum diam auctor nec. Integer auctor turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem vitae tempor. Donec Integer mollis arcu sit amet mollis blandit. Nulla imperdiet molestie nunc. Curabitur vehicula mi dictum in."/>
        </div>

        <div className="products__item">
          <Card
            className="card"
            src={require("../../../assets/images/product1.jpg")}
            titleCard="Lorem ipsum dolor sit amet"
            deception="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <Card
            className="card"
            src={require("../../../assets/images/product2.jpg")}
            titleCard="Lorem ipsum dolor sit amet"
            deception="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <Card
            className="card"
            src={require("../../../assets/images/product3.jpg")}
            titleCard="Lorem ipsum dolor sit amet"
            deception="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />

          <Card
            className="card"
            src={require("../../../assets/images/product4.jpg")}
            titleCard="Lorem ipsum dolor sit amet"
            deception="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </section>
  );
}
