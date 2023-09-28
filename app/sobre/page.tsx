import { Container } from "@/components/Container";
import Image from "next/image";

const Sobre = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10 mt-10">
        <Image
          src="/sobre.svg"
          alt="people working"
          width={900}
          height={600}
          className="self-center"
        />
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-7xl">Sobre o iParque</h1>
          <blockquote className="text-3xl">
            Quem participa dessa tão competente equipe que torna seu evento
            possível
          </blockquote>
        </div>
      </div>
      <section className="flex flex-col">
        <div>
          <h1>TopDev team</h1>
        </div>
      </section>
    </Container>
  );
};

export default Sobre;
