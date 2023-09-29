import Button from "@/components/Button";
import { Container } from "@/components/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-row gap-32">
        <div className="flex flex-col mt-40 gap-14">
          <h1 className="text-8xl  md:text-6xl ">
            Quer planejar o seu evento no parque?
          </h1>
          <blockquote className="text-4xl md:text-3xl font-light">
            Tornamos o processo de organização tão tranquilo quanto uma brisa de
            verão.
          </blockquote>
          <div className="flex items-center justify-center">
            <Button title="ver eventos" />
          </div>
        </div>
        <Image
          src="/heroimg.svg"
          alt="Woman yoga"
          width={500}
          height={0}
          className="mt-5 object-cover"
        />
      </div>
    </Container>
  );
};

export default Hero;
