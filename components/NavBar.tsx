import NavBarItem from "@/components/NavBarItem";

const NavBar = () => {
  return (
    <header className="flex flex-row items-center justify-between px-40 py-8 border-y-2 border-brown">
      <NavBarItem title="iParque" page="/" />
      <div className="flex flex-row items-center justify-center gap-10">
        <NavBarItem title="Home" page="/" />
        <NavBarItem title="Comunidades" page="/comunidades" />
        <NavBarItem title="Sobre" page="/sobre" />
      </div>
    </header>
  );
};

export default NavBar;
