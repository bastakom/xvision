import { getStoryblokApi } from "@storyblok/react";

export async function GetOgonOperationer() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "ogonoperationer",
    language: `${process.env.STORYBLOCK_LANG}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data;
}

export async function GetLinsOperationer() {
  const sbParams = {
    version: "draft" as const,
    starts_with: "linsoperationer",
    language: `${process.env.STORYBLOCK_LANG}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data;
}

/* export const GetAllLinsOperations = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1727781697&starts_with=linsoperationer&token=${process.env.STORYBLOCK_API}&version=published&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
}; */
export const GetAllLinsOperations = async () => {
  const sbParams = {
    version: "draft" as const,
    starts_with: "linsoperationer",
    language: `${process.env.STORYBLOCK_LANG}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/`, sbParams);

  return data.data;
};

/* export const GetGenerlSettings = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/generalsettings?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
}; */

export const GetGenerlSettings = async () => {
  const sbParams = {
    version: "draft" as const,
    language: `${process.env.STORYBLOCK_LANG}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/generalsettings/`, sbParams);

  return data.data;
};

/* export const GetOgonLaser = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/ogonlaser?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
}; */

export const GetOgonLaser = async () => {
  const sbParams = {
    version: "draft" as const,
    language: `${process.env.STORYBLOCK_LANG}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/ogonlaser/`, sbParams);
  return data.data;
};

/* export const GetLinsOperation = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/linsoperation?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
};
 */

export const GetLinsOperation = async () => {
  const sbParams = {
    version: "draft" as const,
    language: `${process.env.STORYBLOCK_LANG}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(`cdn/stories/linsoperation/`, sbParams);

  return data.data;
};

/* export const GetBehandlingarSlug = async (slug: string) => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/ogonoperationer/${slug}?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return res.json();
}; */

export const GetBehandlingarSlug = async (slug: string) => {
  const sbParams = {
    version: "draft" as const,
    language: `${process.env.STORYBLOCK_LANG}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(
    `cdn/stories/ogonoperationer/${slug}`,
    sbParams
  );
  return data.data;
};

/* export const GetLinsBehandlingarSlug = async (slug: string) => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/linsoperationer/${slug}?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return res.json();
}; */

export const GetLinsBehandlingarSlug = async (slug: string) => {
  const sbParams = {
    version: "draft" as const,
    language: `${process.env.STORYBLOCK_LANG}`,
  };

  const client = getStoryblokApi();
  const data = await client.get(
    `cdn/stories/linsoperationer/${slug}`,
    sbParams
  );

  return data.data;
};
