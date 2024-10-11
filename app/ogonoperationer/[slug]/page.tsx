import Hero from "@/app/components/ArkivPage/Hero";
import CTA from "@/app/components/CTA/CTA";
import { GetBehandlingarSlug } from "@/app/lib/apireq";

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const data = await GetBehandlingarSlug(pathname);
  const slugData = data.story.content;
  console.log(slugData.CTA);
  return (
    <>
      <Hero
        title={data.story.name}
        subtitle={slugData.hero_sub_title}
        content={slugData.hero_content}
        btns={slugData.buttons}
      />

      <CTA props={slugData} />
    </>
  );
};

export default page;
