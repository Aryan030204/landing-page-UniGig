import {
  AtSignIcon,
  EarthIcon,
  HeadsetIcon,
  Instagram,
  LinkedinIcon,
  Mail,
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/unigig324/",
    icon: <LinkedinIcon />,
  },
  {
    name: "Facebook",
    link: "/",
    icon: <Instagram />,
  },
  {
    name: "Gmail",
    link: "mailto:unigig324@gmail.com",
    icon: <Mail />,
  },
];
const Footer = () => {
  return (
    <footer className="relative z-50 bg-[#191F33]">
      <div className="flex flex-col items-center px-4 py-12">
        {/* social links */}
        <div className="mt-8">
          <span className="mb-6 block text-center text-lg font-medium text-[#767E94]">
            Follow Us
          </span>
          <ul className="flex items-center gap-6">
            {socialLinks.map(({ name, icon, link }) => (
              <li key={name}>
                <a
                  href={link}
                  title={name}
                  className="text-white hover:text-[#767e94]"
                  target="_blank"
                >
                  {icon}
                </a>
                <span className="sr-only">{name} account</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
