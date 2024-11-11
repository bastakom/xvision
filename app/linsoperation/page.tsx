import Hero from "@/app/components/ArkivPage/Hero";
import ContactForm from "@/app/components/Blocks/ContactForm/ContactForm";
import CTA from "@/app/components/Blocks/CTA/CTA";
import Step from "@/app/components/Blocks/Step/Step";
import {
  GetLinsOperation,
  GetGenerlSettings,
  GetOgonOperationer,
  GetLinsOperationer,
} from "@/app/lib/apireq";
import ImageBlock from "../components/Blocks/ImageBlock/ImageBlock";
import TilesBehandlingar from "../components/Blocks/TilesBehandlingar/TilesBehandlingar";
import FAQ from "../components/Blocks/FAQ/FAQ";

const page = async () => {
  const data = await GetLinsOperation();
  const settings = await GetGenerlSettings();
  const slugData = data.story.content;

  const dataBehandlingar = await GetLinsOperationer();

  const matchedThreatments = dataBehandlingar?.stories.filter(
    (item: { uuid: string }) =>
      data?.story?.content?.Threatment?.includes(item.uuid)
  );

  const slugTitle = !slugData.hero_title
    ? data.story.name
    : slugData.hero_title;

  return (
    <div className="mt-14">
      <Hero
        title={data.story.content.title_hero}
        content={data.story.content.content_text}
        btns={data.story.content.buttons}
        bg={data.story.content.bg}
      />
      {data.story.content.content_image &&
        data?.story?.content?.content_image?.map((el: any) => {
          return <ImageBlock props={el} />;
        })}
      <TilesBehandlingar
        operations={matchedThreatments}
        props={data.story.content}
      />
      <FAQ
        props={data.story.content.FAQ}
        title={data.story.content.faq_title}
      />
      <Step props={settings?.story?.content} />
      <CTA props={settings.story.content.CTA} />
      <ContactForm global={settings} />
    </div>
  );
};

export default page;
