import Hero from "@/app/components/ArkivPage/Hero";
import BeforeAfter from "@/app/components/BeforeAfter/BeforeAfter";
import CTA from "@/app/components/CTA/CTA";
import InfoBox from "@/app/components/InfoBox/InfoBox";
import Step from "@/app/components/Step/Step";
import { GetBehandlingarSlug, GetGenerlSettings } from "@/app/lib/apireq";

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const data = await GetBehandlingarSlug(pathname);
  const settings = await GetGenerlSettings();
  const slugData = data.story.content;
  return (
    <div className="mt-14">
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
      <CTA props={slugData.CTA} />
      <Step props={settings.story.content} />
      <BeforeAfter props={slugData} />
      <CTA props={slugData.CTA_BOTTOM} />
    </div>
  );
};

export default page;
