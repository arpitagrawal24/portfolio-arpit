import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiFacebookLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-2 text/lg">
      <Link
        href={""}
        className="hover:text-accent transition-all duration-300 p-2 "
      >
        <RiYoutubeLine className="text-2xl" />
      </Link>
      <Link
        href={""}
        className="hover:text-accent transition-all duration-300 p-2 "
      >
        <RiFacebookLine className="text-2xl" />
      </Link>
      <Link
        href={""}
        className="hover:text-accent transition-all duration-300 p-2 "
      >
        <RiInstagramLine className="text-2xl" />
      </Link>
    </div>
  );
};

export default Socials;
