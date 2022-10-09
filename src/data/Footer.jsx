import { ReactComponent as Instagram } from "../assets/icon/instagram.svg";
import { ReactComponent as Linkedin } from "../assets/icon/linkedin.svg";
import { ReactComponent as Facebook } from "../assets/icon/facebook.svg";

const data = [
  {
    name: "Instagram",
    logo: <Instagram style={{ height: 40, width: 40 }} />,
    link: "https://www.github.com/xiao215",
  },
  {
    name: "Facebook",
    logo: <Facebook style={{ height: 40, width: 40 }} />,
    link: "https://discordapp.com/users/720743692251562204",
  },
  {
    name: "LinkedIn",
    logo: <Linkedin style={{ height: 40, width: 40 }} className="fill-white" />,
    link: "https://www.linkedin.com/in/xiao215/",
  },
];
export default data;
