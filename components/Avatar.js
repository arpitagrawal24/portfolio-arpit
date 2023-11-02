import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none w-1/2">
      <Image
        src={"/avatar.jpg"}
        width={800}
        height={800}
        alt="image missing"
        className="translate-z-0 w-full rounded-3xl border-4 border-slate-800"
      />
    </div>
  );
};

export default Avatar;
