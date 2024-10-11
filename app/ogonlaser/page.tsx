import Hero from "../components/ArkivPage/Hero";
import BeforeAfter from "../components/BeforeAfter/BeforeAfter";
import ContactForm from "../components/ContactForm/ContactForm";
import CTA from "../components/CTA/CTA";
import FAQ from "../components/FAQ/FAQ";
import ImageBlock from "../components/ImageBlock/ImageBlock";
import Step from "../components/Step/Step";
import TilesBehandlingar from "../components/TilesBehandlingar/TilesBehandlingar";
import { GetOgonLaser, GetOgonOperationer } from "../lib/apireq";

const Page = async () => {
  const data = await GetOgonLaser();
  const dataBehandlingar = await GetOgonOperationer();

  const matchedThreatments = dataBehandlingar?.stories.filter(
    (item: { uuid: string }) =>
      data?.story?.content?.Threatment?.includes(item.uuid)
  );

  console.log(data)



  return (
    <div className="mt-14">
      <Hero data={data.story.content} />
      {data.story.content.content_image.map((el: any) => {
        return <ImageBlock props={el} />;
      })}
      <TilesBehandlingar operations={matchedThreatments} props={data.story.content}/>
      <FAQ props={data.story.content.FAQ} title={data.story.content.faq_title}/>
      <Step props={data.story.content} />
      <BeforeAfter props={data.story.content} />
      <CTA props={data.story.content} />
      <ContactForm />
    </div>
  );
};

export default Page;
