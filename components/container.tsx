import { PropsWithChildren } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-2xl mx-auto h-screen">{children}</div>;
};

export default Container;
