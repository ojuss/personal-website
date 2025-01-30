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

      <p className="flex items-center gap-4">
        Find me:{" "}
        <span className="flex gap-3">
          {[
            { icon: FaGithub, label: "GitHub" },
            { icon: FaXTwitter, label: "Twitter" },
            { icon: FaLinkedin, label: "LinkedIn" },
            { icon: IoDocument, label: "Resume" },
          ].map(({ icon: Icon, label }) => (
            <Link
              key={label}
              href="#"
              className="text-gray-500  hover:text-lime-300 transition-colors"
            >
              <Icon className="w-6 h-6" />
              <span className="sr-only">{label}</span>
            </Link>
          ))}
        </span>
      </p>
    </div>
  );
}
