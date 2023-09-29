import Image from "@/node_modules/next/image";

interface FooterItemProps {
  title: string;
  icon: string;
}

const FooterItem = ({ title, icon }: FooterItemProps) => {
  return (
    <div className="flex flex-row gap-2">
      <Image src={`${icon}.svg`} alt="icon" width={30} height={30} />
      <h1 className="text-white ">{title}</h1>
    </div>
  );
};

export default FooterItem;
