import AboutBlock from '../components/AboutBlock/AboutBlock'
import Builder from '../components/Builder/Builder'
import ContactForm from '../components/ContactForm/ContactForm'
import Hero from '../components/Hero/Hero'
import PartnerLogos from '../components/PartnerLogos/PartnerLogos'
import TilesBehandlingar from '../components/TilesBehandlingar/TilesBehandlingar'

const getPageData = async (slug: string) => {
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?version=published&token=${process.env.STORYBLOCK_API}`
  )
  return res.json()
}

const getOgonOperation = async () => {
  const data = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?cv=1727276054&starts_with=ogonoperationer*&token=${process.env.STORYBLOCK_API}&version=published`
  )
  return data.json()
}

const page = async ({ params }: { params: { slug: string } }) => {
  const pathname = params.slug
  const res = await getPageData(pathname)

  const ogonOperation = await getOgonOperation()
  console.log(ogonOperation, 'props')

  return (
    <main>
      <Builder props={res?.story?.content?.body} />
    </main>
  )
}

export default page
