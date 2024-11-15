import AboutBlock from "../Blocks/AboutBlock/AboutBlock";
import ContactForm from "../Blocks/ContactForm/ContactForm";
import ContentBox from "../Blocks/ContentBox/ContentBox";
import CTABlock from "../Blocks/CTA/CTABlock";
import FAQ from "../Blocks/FAQ/FAQ";
import Hero from "../Blocks/Hero/Hero";
import ImageBlock from "../Blocks/ImageBlock/ImageBlock";
import InfoBox from "../Blocks/InfoBox/InfoBox";
import PartnerLogos from "../Blocks/PartnerLogos/PartnerLogos";
import PrisBlock from "../Blocks/PrisBlock/PrisBlock";
import Step from "../Blocks/Step/Step";
import Team from "../Blocks/Team/Team";
import TilesBehandlingar from "../Blocks/TilesBehandlingar/TilesBehandlingar";
import Forundersokning from "../Forundersokning/Forundersokning";

interface Props {
  props?: any;
  ogonOperationer?: any;
  global?: any;
  linsOperation?: any;
}

const Builder = ({ props, ogonOperationer, global, linsOperation }: Props) => {
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
                subtitle={el.subtitle}
                text_center={el.text_center}
                no_dots={el.no_dots}
                opacity={el.opacity}
                popup={global.story.content.showpopup}
              />
            );
          case "infobox":
            return (
              <InfoBox
                title={el.title}
                slug_name={el.subtitle}
                content={el.content}
                link={el.btns}
              />
            );
          case "forundersokning":
            return <Forundersokning props={el} />;
          case "tilesBehandlingar":
            return (
              <TilesBehandlingar
                props={el}
                operations={ogonOperationer.stories}
                linsoperation={linsOperation.stories}
              />
            );
          case "team": {
            return <Team props={el} />;
          }
          case "faqblock": {
            return (
              <FAQ
                props={el.faq}
              />
            );
          }

          case "stepblock": {
            return <Step props={global.story.content} />;
          }
          case "partnerLogos":
            return <PartnerLogos images={el?.partnerlogos} />;
          case "aboutBlock":
            return <AboutBlock props={el} />;
          case "contactForm":
            return <ContactForm global={global} />;
          case "imageblock":
            return <ImageBlock props={el} />;
          case "contentbox":
            return <ContentBox props={el} />;
          case "CTA":
            return (
              <CTABlock
                sub_under_title={el.sub_under_title}
                subtitle={el.subtitle}
                title={el.title}
                content={el.content}
                btn={el.btn}
                bg_image={el.bg_image}
                bg_image_2={el.bg_image_2}
                two_images={el.two_images}
              />
            );
          case "PrisBlock":
            return <PrisBlock props={el} />;
          default:
            return <div>No content</div>;
        }
      })}
    </div>
  ) : null;
};

export default Builder;
