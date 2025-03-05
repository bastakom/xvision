import { getStoryblokApi } from "@storyblok/react";
import { redirect } from "next/navigation";

export async function GetOgonOperationer() {
  let sbParams = {
    version: "published" as const,
    starts_with: "ogonoperationer",
    token: process.env.STORYBLOK_TOKEN,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}

export async function GetLinsOperationer() {
  let sbParams = {
    version: "published" as const,
    starts_with: "linsoperationer",
    token: process.env.STORYBLOK_TOKEN,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
}

export const GetAllLinsOperations = async () => {
  let sbParams = {
    version: "published" as const,
    starts_with: "linsoperationer",
    token: process.env.STORYBLOK_TOKEN,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
};

export const GetGenerlSettings = async () => {
  let sbParams = {
    version: "published" as const,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();

  const data = await client.get(`cdn/stories/generalsettings/`, sbParams);

  return data.data;
};

export const GetOgonLaser = async () => {
  let sbParams = {
    version: "published" as const,
    token: process.env.STORYBLOK_TOKEN,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(`cdn/stories/ogonlaser/`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
};

export const GetLinsOperation = async () => {
  let sbParams = {
    version: "published" as const,
    token: process.env.STORYBLOK_TOKEN,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();

  try {
    const data = await client.get(`cdn/stories/linsoperation`, sbParams);

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
};

export const GetBehandlingarSlug = async (slug: string) => {
  let sbParams = {
    version: "draft" as const,
    token: process.env.STORYBLOK_TOKEN,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(
      `cdn/stories/ogonoperationer/${slug}`,
      sbParams
    );

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
};

export const GetLinsBehandlingarSlug = async (slug: string) => {
  let sbParams = {
    version: "draft" as const,
    token: process.env.STORYBLOK_TOKEN,
    language: process.env.STORYBLOCK_LANG,
  };

  const client = getStoryblokApi();
  try {
    const data = await client.get(
      `cdn/stories/linsoperationer/${slug}`,
      sbParams
    );

    if (!data) {
      throw new Error("Not Found");
    }

    return data.data;
  } catch (error: any) {
    if (error.response && error.response.status === 500) {
      redirect("/500");
    } else {
      throw error;
    }
  }
};
