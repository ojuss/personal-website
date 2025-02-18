import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="space-y-2 text-white">
      <p>
        Reach out:{" "}
        <Link
          href="mailto:guptaojas75@gmail.com"
          className="text-gray-300 relative group underline"
        >
          guptaojas75@gmail.com
        </Link>{" "}
      </p>
      <br />

      <div className="flex items-center gap-4">
        <div className="space-y-1">
          Find me:{" "}
          <span className="flex sm:flex-row flex-col gap-3 pt-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className="flex items-center text-white hover:text-lime-300 transition-colors gap-2"
              >
                [
                <Icon className="w-6 h-6"/>
                <span className="text-gray-400">{label}</span> ]
              </Link>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/ojuss",
  },
  {
    icon: FaXTwitter,
    label: "X.com",
    href: "https://twitter.com/ojussw",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/ojuss",
  },
  {
    icon: IoDocument,
    label: "Resume",
    href: "/ojuscv.pdf",   
  },
];
