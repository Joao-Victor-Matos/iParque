import Link from "next/link";

interface NavBarItemProps {
  title: string;
  page: string;
}

const NavBarItem = ({ title, page }: NavBarItemProps) => {
  return (
    <Link href={page}>
      <h1 className="text-2xl font-semibold">{title}</h1>
    </Link>
  );
};

export default NavBarItem;
