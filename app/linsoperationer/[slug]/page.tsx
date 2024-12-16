import Hero from "@/app/components/ArkivPage/Hero";
import BeforeAfter from "@/app/components/Blocks/BeforeAfter/BeforeAfter";
import ContactForm from "@/app/components/Blocks/ContactForm/ContactForm";
import CTA from "@/app/components/Blocks/CTA/CTA";
import InfoBox from "@/app/components/Blocks/InfoBox/InfoBox";
import Step from "@/app/components/Blocks/Step/Step";
import Uspar from "@/app/components/Blocks/Uspar/Uspar";
import { GetLinsBehandlingarSlug, GetGenerlSettings } from "@/app/lib/apireq";
const lang = `${process.env.STORYBLOCK_LANG}`;

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const data = await GetLinsBehandlingarSlug(pathname);
  const settings = await GetGenerlSettings();
  const slugData = data?.story?.content;
  return (
    <div>
      <Hero
        title={
          data.story.content.site_title
            ? data.story.content.site_title
            : data.story.name
        }
        subtitle={slugData.hero_sub_title}
        content={slugData.hero_content}
        btns={slugData.buttons}
      />
      <InfoBox
        title={slugData.a_title}
        content={slugData.a_content}
        slug_name={data.story.name}
      />
      <Uspar props={slugData.Uspar} />
      <CTA props={slugData.CTA} />
      <Step props={settings.story.content} />
      <BeforeAfter props={slugData} />
      <CTA props={settings.story.content.CTA} />
      <ContactForm global={settings} lang={lang} />
    </div>
  );
};

export default page;
