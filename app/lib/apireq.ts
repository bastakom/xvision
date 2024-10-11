export const GetOgonOperationer = async () => {
    const response = await fetch(`https://api.storyblok.com/v2/cdn/stories?cv=1727781697&starts_with=ogonoperationer&token=${process.env.STORYBLOCK_API}&version=published`)
    return response.json();
}


export const GetGenerlSettings = async () => {

    const response = await fetch(`https://api.storyblok.com/v2/cdn/stories/generalsettings?version=published&token=${process.env.STORYBLOCK_API}`)
    return response.json();
}


export const GetOgonLaser = async () => {
    const response = await fetch(`https://api.storyblok.com/v2/cdn/stories/ogonlaser?version=published&token=${process.env.STORYBLOCK_API}`)
    return response.json();
}


export const GetBehandlingarSlug = async (slug: string) => {
    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/ogonoperationer/${slug}?version=published&token=${process.env.STORYBLOCK_API}`
    )
    return res.json()
  }
  