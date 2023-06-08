import { FC, ReactNode } from "react";
import Link from "next/link";

export type ProjectCardProps = {
  image: ReactNode;
  title: string;
  href: string;
  description: ReactNode;
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
      className="h-full grid-cols-[auto_1fr] grid border-card-border border rounded-lg bg-card-bg p-4 gap-4 sm:gap-x-6 sm:gap-y-2 sm:py-3"
    >
      <div className="sm:row-span-2 sm:self-center sm:border-r-card-border w-20 flex justify-center">
        {image}
      </div>
      <h3 className="text-heading font-black font-heading text-xl leading-none self-center">
        {title}
      </h3>
      <p className="text-body col-span-2 sm:col-span-1">{description}</p>
    </Link>
  );
};
