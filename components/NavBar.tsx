import NavBarItem from "@/components/NavBarItem";

const NavBar = () => {
  return (
    <header className="flex flex-row items-center justify-between px-40 md:px-20 md:py-5 py-8">
      <NavBarItem title="iParque" page="/" />
      <div className="flex flex-row items-center justify-center gap-10">
        <NavBarItem title="Eventos" page="/eventos" />
        <NavBarItem title="Comunidades" page="/comunidades" />
        <NavBarItem title="Sobre" page="/sobre" />
        <NavBarItem title="+" page="/criar" round="true" />
      </div>
    </header>
  );
};

export default NavBar;
