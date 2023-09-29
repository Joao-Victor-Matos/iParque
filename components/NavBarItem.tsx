import Link from "next/link";

interface NavBarItemProps {
  title: string;
  page: string;
  round?: boolean;
}

const NavBarItem = ({ title, page, round }: NavBarItemProps) => {
  return round ? (
    <Link href={page}>
      <button className="p-2 px-4 rounded-[50%] bg-brown">
        <h1 className="text-2xl text-white">{title}</h1>
      </button>
    </Link>
  ) : (
    <Link href={page}>
      <h1 className="text-2xl md:text-xl font-bold text-brown">{title}</h1>
    </Link>
  );
};

export default NavBarItem;
