import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2";
};

const Heading = ({ children, className, tag: Tag = "h2" }: HeadingProps) => {
  return (
    <Tag
      className={`font-display font-bold text-5xl md:text-4xl lg:text-6xl tracking-tight ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;
