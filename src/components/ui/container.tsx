import { ReactNode } from "react";

type TTodoContainerProps = {
  children: ReactNode;
};
export default function Container({ children }: TTodoContainerProps) {
  return <div className="h-screen w-full max-w-7xl mx-auto">{children}</div>;
}
