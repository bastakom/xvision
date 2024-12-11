export const GetOgonOperationer = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1727781697&starts_with=ogonoperationer&token=${process.env.STORYBLOCK_API}&version=published&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
};

export const GetLinsOperationer = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1727781697&starts_with=linsoperationer&token=${process.env.STORYBLOCK_API}&version=published&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
};

export const GetAllLinsOperations = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1727781697&starts_with=linsoperationer&token=${process.env.STORYBLOCK_API}&version=published&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
};

export const GetGenerlSettings = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/generalsettings?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
};

export const GetOgonLaser = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/ogonlaser?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
};
export const GetLinsOperation = async () => {
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/linsoperation?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return response.json();
};

export const GetBehandlingarSlug = async (slug: string) => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/ogonoperationer/${slug}?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return res.json();
};
export const GetLinsBehandlingarSlug = async (slug: string) => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/linsoperationer/${slug}?version=published&token=${process.env.STORYBLOCK_API}&language=${process.env.STORYBLOCK_LANG}`,
    { cache: "no-store" }
  );
  return res.json();
};
