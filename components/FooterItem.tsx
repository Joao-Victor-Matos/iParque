import Image from "@/node_modules/next/image";
import Link from "@/node_modules/next/link";

interface FooterItemProps {
  goto?: string;
  icon: string;
  content: string;
}

const FooterItem = ({ goto, icon, content }: FooterItemProps) => {
  return (
    <div className="flex flex-row gap-2">
      <Image src={`${icon}.svg`} alt="icon" width={20} height={20} />
      <Link href={`/${goto}`}>
        <h1 className="text-white">{content}</h1>
      </Link>
    </div>
  );
};

export default FooterItem;
