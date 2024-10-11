import { GetGenerlSettings } from "../lib/apireq";
import FooterSection from "./FooterSection";

const Footer = async () => {
  const settings = await GetGenerlSettings();
  return <FooterSection props={settings} />;
};

export default Footer;
