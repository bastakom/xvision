import { GetGenerlSettings } from "../lib/apireq";
import FooterSection from "./FooterSection";

const Footer = async ({ lang }: any) => {
  const settings = await GetGenerlSettings();
  return <FooterSection props={settings} />;
};

export default Footer;
