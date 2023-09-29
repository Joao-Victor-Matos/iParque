import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <footer className="flex w-full bg-brown">
      <div className="flex justify-between">
        <FooterItem title="119823-32" icon="phone" />
      </div>
      <div className="flex items-center justify-center w-full bg-browndark">
        <h1>&copy iParque todos os direitos reservados.</h1>
      </div>
    </footer>
  );
};

export default Footer;
