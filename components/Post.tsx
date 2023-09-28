import Image from "next/image";
import Button from "./Button";
import { title } from "process";

interface PostProps {
  title: string;
}

const Post = ({ title }: PostProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src="/post.jpeg"
        alt="comunity"
        width={450}
        height={0}
        className="rounded-lg h-[350px] object-cover"
      />
      <h1 className="text-4xl font-medium">{title}</h1>
      <Button title="ver mais" />
      <div className="flex flex-row items-center justify-center gap-5">
        <Image
          src="/post.jpeg"
          alt="comunity"
          width={50}
          height={50}
          className="rounded-[50%]"
        />
        <Image
          src="/post.jpeg"
          alt="comunity"
          width={50}
          height={50}
          className="rounded-[50%]"
        />
        <Image
          src="/post.jpeg"
          alt="comunity"
          width={50}
          height={50}
          className="rounded-[50%]"
        />
        <Image
          src="/post.jpeg"
          alt="comunity"
          width={50}
          height={50}
          className="rounded-[50%]"
        />
        <p>e 22 outros</p>
      </div>
    </div>
  );
};

export default Post;
