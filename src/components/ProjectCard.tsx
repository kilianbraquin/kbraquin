import { FC, ReactNode } from "react";
import Link from "next/link";

export type ProjectCardProps = {
  image: ReactNode;
  title: string;
  href: string;
  description: string;
};

export const ProjectCard: FC<ProjectCardProps> = ({
  image,
  title,
  description,
  href,
}) => {
  return (
    <Link
      href={href}
      className="h-full grid-cols-[auto_1fr] grid border-card-border border rounded-lg bg-card-bg p-4 gap-4 md:gap-x-6 md:gap-y-2 md:py-3"
    >
      <div className="md:row-span-2 md:self-center md:border-r-card-border">
        {image}
      </div>
      <h3 className="text-heading font-black font-heading text-xl leading-none self-center">
        {title}
      </h3>
      <p className="text-body col-span-2 md:col-span-1">{description}</p>
    </Link>
  );
};
