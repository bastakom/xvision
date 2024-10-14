import Hero from "@/app/components/ArkivPage/Hero";
import BeforeAfter from "@/app/components/BeforeAfter/BeforeAfter";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import CTA from "@/app/components/CTA/CTA";
import InfoBox from "@/app/components/InfoBox/InfoBox";
import Step from "@/app/components/Step/Step";
import Uspar from "@/app/components/Uspar/Uspar";
import { GetBehandlingarSlug, GetGenerlSettings } from "@/app/lib/apireq";

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const data = await GetBehandlingarSlug(pathname);
  const settings = await GetGenerlSettings();
  const slugData = data.story.content;
  return (
    <div>
      <Hero
        title={data.story.name}
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
      <ContactForm />
    </div>
  );
};

export default page;
