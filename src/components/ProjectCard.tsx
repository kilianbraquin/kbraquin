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
      className="border-card-border bg-card-bg grid grid-cols-[auto_1fr] gap-4 rounded-lg border p-4 shadow-lg sm:gap-x-6 sm:gap-y-2 sm:py-3"
    >
      <div className="sm:border-r-card-border flex w-20 justify-center sm:row-span-2 sm:self-center">
        {image}
      </div>
      <h3 className="text-heading font-heading self-center text-xl leading-none font-black">
        {title}
      </h3>
      <p className="text-body col-span-2 sm:col-span-1">{description}</p>
    </Link>
  );
};
