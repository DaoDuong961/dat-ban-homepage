import Button from "../../../components/common/Button";
import TitleSection from "../../../components/common/TitleSection/titleSection";
import Text from "../../../components/common/Text/text";
import "./banner.css";

interface Props {}
export default function Banner(props: Props) {
  return (
    <section className="banner">
      <div className="banner__item">
        <div className="banner__text">
            <TitleSection className="title__head" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
          <Text text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"/>
        </div>
        <Button color="white" name="View more" backgroundColor="black"/>
      </div>
      <div className="bg__color"></div>
    </section>
  );
}
