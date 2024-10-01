import AboutBlock from '../AboutBlock/AboutBlock'
import ContactForm from '../ContactForm/ContactForm'
import Hero from '../Hero/Hero'
import PartnerLogos from '../PartnerLogos/PartnerLogos'
import TilesBehandlingar from '../TilesBehandlingar/TilesBehandlingar'

interface Props {
  props: any
}

const Builder = ({ props }: Props) => {
  return props ? (
    <div>
      {props.map((el: any) => {
        switch (el.component) {
          case 'Hero':
            return <Hero title={el.title} text={el.text} uspar={el.uspar} />
          case 'tilesBehandlingar':
            return <TilesBehandlingar />
          case 'partnerLogos':
            return <PartnerLogos />
          case 'aboutBlock':
            return <AboutBlock />
          case 'contactForm':
            return <ContactForm />
          default:
            return (
              <>
                <AboutBlock />
              </>
            )
        }
      })}
    </div>
  ) : null
}

export default Builder
