import { ReactComponent as Instagram } from "../assets/icon/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/icon/linkedin.svg";
import { ReactComponent as Facebook } from "../assets/icon/facebook.svg";

const data = [
  {
    name: "Instagram",
    logo: <Instagram style={{ height: 40, width: 40 }} />,
    link: "https://www.instagram.com/utesca/",
  },
  {
    name: "Facebook",
    logo: <Facebook style={{ height: 40, width: 40 }} />,
    link: "https://www.facebook.com/uoftesca/",
  },
  {
    name: "LinkedIn",
    logo: <Linkedin style={{ height: 40, width: 40 }} className="fill-white" />,
    link: "https://www.linkedin.com/company/utescaconsulting/",
  },
];
export default data;
