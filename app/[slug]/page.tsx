import Builder from "../components/Builder/Builder";
import { Metadata } from "next";
import {
  GetGenerlSettings,
  GetLinsOperationer,
  GetOgonOperationer,
} from "../lib/apireq";
import { notFound } from "next/navigation";
import StoryblokStory from "@storyblok/react/story";
import { getStoryblokApi } from "@storyblok/react";
import { getData } from "@/lib/get-data";

export const getSlugData = async (slug: string) => {
  let sbParams = {
    version: "draft" as const,
    language: `${process.env.STORYBLOCK_LANG}`,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/${slug}`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    throw error;
  }
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const slugName = !pathname || pathname === "" ? "home" : pathname;
  const res = await getSlugData(slugName);
  return {
    title: res.story?.content?.SEO_Title || "XVISION",
    description: res.story?.content?.SEO_Meta || "Default description",
  };
};

const Page = async ({ params }: { params: { slug: string } }) => {
  const lang = process.env.STORYBLOCK_LANG;
  const ogonOperation = await GetOgonOperationer();
  const linsOperation = await GetLinsOperationer();
  const generalSetting = await GetGenerlSettings();

  const pathname = (await params).slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const story = await getData(slugName);

  if (!story || !story.data.data.story || !story.data.data.story.content) {
    return notFound();
  }

  return (
    <main>
      <StoryblokStory
        lang={lang}
        story={story.data.data.story}
        ogonOperationer={ogonOperation}
        linsOperation={linsOperation}
        generalSetting={generalSetting}
      />
    </main>
  );
};

export default Page;
