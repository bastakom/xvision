import Builder from '../components/Builder/Builder'
import { GetOgonOperationer } from '../lib/apireq'
import { notFound } from 'next/navigation'

const getPageData = async (slug: string) => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?version=published&token=${process.env.STORYBLOCK_API}`
  )
  return res.json()
}


const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug
  const slugName = pathname === undefined ? `home` : pathname
  const res = await getPageData(slugName)

  const ogonOperation = await GetOgonOperationer()

  if (!res || !res.story || !res.story.content) {
    return notFound();
  }

  return (
    <main>
      <Builder props={res?.story?.content?.body} ogonOperationer={ogonOperation} />
    </main>
  )
}

export default page
