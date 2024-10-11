import { GetGenerlSettings } from "../lib/apireq";
import Navigate from "./Navigate";

const Header = async () => {
  const response = await GetGenerlSettings();
  return <Navigate props={response} />;
};

export default Header;
