import AboutBlock from "../AboutBlock/AboutBlock";
import ContactForm from "../ContactForm/ContactForm";
import Hero from "../Hero/Hero";
import ImageBlock from "../ImageBlock/ImageBlock";
import PartnerLogos from "../PartnerLogos/PartnerLogos";
import TilesBehandlingar from "../TilesBehandlingar/TilesBehandlingar";
import Uspar from "../Uspar/Uspar";

interface Props {
  props: any;
  ogonOperationer?: any;
}

const Builder = ({ props, ogonOperationer }: Props) => {
  return props ? (
    <div>
      {props.map((el: any) => {
        switch (el.component) {
          case "Hero":
            return (
              <Hero
                title={el.title}
                text={el.text}
                uspar={el.uspar}
                img={el.img}
                buttons={el.buttons}
                no_image_hero={el.no_image_hero}
              />
            );
          case "tilesBehandlingar":
            return (
              <TilesBehandlingar
                props={el}
                operations={ogonOperationer.stories}
              />
            );
          case "partnerLogos":
            return <PartnerLogos images={el.partnerlogos} />;
          case "aboutBlock":
            return <AboutBlock />;
          case "contactForm":
            return <ContactForm />;
          case "imageblock":
            return <ImageBlock props={el} />;
          default:
            return <div>No content</div>;
        }
      })}
    </div>
  ) : null;
};

export default Builder;
