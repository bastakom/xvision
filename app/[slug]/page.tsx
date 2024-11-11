import Builder from "../components/Builder/Builder";
import { Metadata } from "next";
import {
  GetGenerlSettings,
  GetLinsOperationer,
  GetOgonOperationer,
} from "../lib/apireq";
import { notFound } from "next/navigation";

const getPageData = async (slug: string) => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?version=published&token=${process.env.STORYBLOCK_API}`
  );
  return res.json();
};

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
  const pathname = params.slug;
  const slugName = !pathname || pathname === '' ? 'home' : pathname;
  const res = await getPageData(slugName);

  return {
    title: res.story.content.SEO_Title || "XVISION",
    description: res.story.content.SEO_Meta || "Default description",
  };
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug;
  const slugName = !pathname || pathname === '' ? 'home' : pathname;
  const res = await getPageData(slugName);

  const ogonOperation = await GetOgonOperationer();
  const linsOperation = await GetLinsOperationer();
  const generalSetting = await GetGenerlSettings();

  if (!res || !res.story || !res.story.content) {
    return notFound();
  }

  return (
    <main>
      <Builder
        props={res?.story?.content?.body}
        ogonOperationer={ogonOperation}
        global={generalSetting}
        linsOperation={linsOperation}
      />
    </main>
  );
};

export default Page;