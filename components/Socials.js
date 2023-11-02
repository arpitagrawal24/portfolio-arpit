import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinBoxFill,
  RiGithubLine,
} from "react-icons/ri";
import { SiLinktree } from "react-icons/si";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2 text/lg">
      <Link
        href={"https://www.linkedin.com/in/arpit-agrawal24"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 p-2 "
      >
        <RiLinkedinBoxFill className="text-2xl" />
      </Link>
      <Link
        href={"https://github.com/arpitagrawal24"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 p-2 "
      >
        <RiGithubLine className="text-2xl" />
      </Link>
      <Link
        href={"https://instagram.com/arpit.agrawal024"}
        target="_blank"
        className="hover:text-accent transition-all duration-300 p-2 "
      >
        <RiInstagramLine className="text-2xl" />
      </Link>
      <Link
        href={"https://linktr.ee/arpit_agrawal24"}
        className="hover:text-accent transition-all duration-300 p-2 "
      >
        <SiLinktree className="text-2xl" />
      </Link>
    </div>
  );
};

export default Socials;
