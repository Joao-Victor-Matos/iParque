import { Container } from "@/components/Container";
import Post from "@/components/Post";
import Image from "next/image";

const Comunidades = () => {
  return (
    <Container>
      <div className="flex flex-col gap-10 mt-10">
        <Image
          src="/comunidades.svg"
          alt="friends in the park"
          width={700}
          height={500}
          className="self-center md:w-[600px]"
        />
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-7xl">Comunidades</h1>
          <blockquote className="text-3xl">
            Encontre a comunidade perfeita que voce se encaixa!
          </blockquote>
        </div>
      </div>
      <section className="flex gap-20 py-20">
        <Post title="Fut do vamp" />
        <Post title="Fut do vamp" />
      </section>
    </Container>
  );
};

export default Comunidades;
