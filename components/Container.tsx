import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export function Container({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[1520px] px-[15px] mx-auto">
      {children}
    </div>
  );
}
