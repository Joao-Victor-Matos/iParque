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
          className="self-center md:w-[700px]"
        />
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-7xl">Sobre o iParque</h1>
          <blockquote className="text-3xl">
            Quem participa dessa tão competente equipe que torna seu evento
            possível
          </blockquote>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center gap-5 mt-16">
        <Image src="/post.jpeg" alt="TopDevs logo" width={400} height={400} />
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-medium">TopDev team</h1>
          <blockquote className="text-2xl font-normal">
            Somos todos alunos da FIEC Fundação Indaiatubana de Educação e
            Cultura, participamos do curso técnico de informática para a
            internet.
          </blockquote>
        </div>
      </section>
    </Container>
  );
};

export default Sobre;
