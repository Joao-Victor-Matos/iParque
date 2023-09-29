import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col bg-brown mt-10">
      <div className="flex justify-between px-16 py-5">
        <div className=" flex flex-col gap-1">
          <h1 className="text-white text-xl font-medium">Contato</h1>
          <FooterItem content="(11) 98423-7631" icon="phone" />
          <FooterItem content="topdevs@gmail.com" icon="mail" />
          <FooterItem
            content="Av. Eng. Fábio Roberto Barnabé, 3405 - Jardim Regina, Indaiatuba"
            icon="house"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-xl font-medium">Links úteis</h1>
          <FooterItem content="Ajuda" icon="help" />
          <FooterItem content="Termos de uso" icon="form" goto="terms" />
          <FooterItem content="Seja parceiro" icon="partner" />
        </div>
      </div>
      <div className="flex items-center justify-center w-full bg-browndark">
        <h1 className="text-white">
          &copy; iParque todos os direitos reservados.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
