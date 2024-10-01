export const GetOgonOperationer = async () => {
    const response = await fetch(`https://api.storyblok.com/v2/cdn/stories?cv=1727781697&starts_with=ogonoperationer&token=${process.env.STORYBLOCK_API}&version=published`)
    return response.json();
}