import { Metadata, NextPage } from "next";
import { ProjectCard, ProjectCardProps } from "@/components/ProjectCard";
import Link from "next/link";
import CGIcon from "@/icons/cg-icon.svg";
import MTIcon from "@/icons/mt-icon.svg";
import ESMIcon from "@/icons/esm-icon.svg";
import SwiftIcon from "@/icons/swift-icon.svg";

const dataProjects: ProjectCardProps[] = [
  {
    image: <SwiftIcon />,
    title: "Swift Todo",
    description: (
      <>
        <span className="bg-primary/10 text-primary mr-1 inline-block rounded-md px-1 py-0.5 font-semibold">
          Prototype
        </span>
        {
          "A web application based on React and Framer Motion that lets you manage a simple to-do list."
        }
      </>
    ),
    href: "https://swift.kbraquin.com",
  },
  {
    image: <CGIcon />,
    title: "Chicken Godfather",
    description:
      "An incremental video game where chicken has been banned forbidden, and you decide to join a cartel to get some.",
    href: "https://www.kongregate.com/games/IndieBaie/chicken-godfather",
  },
  {
    image: <MTIcon />,
    title: "Monster Tycoon",
    description:
      "A turn-based battle game where you have to build the best monster team to win the championship.",
    href: "https://www.kongregate.com/games/IndieBaie/monster-tycoon",
  },
  {
    image: <ESMIcon />,
    title: "ESManager",
    description:
      "A tactical video game where you are an e-sports coach who trains his players, devises strategies, and prepares for matches to lead his team to victory.",
    href: "https://www.kongregate.com/games/IndieBaie/esmanager",
  },
];

const HomePage: NextPage = () => {
  return (
    <>
      <h1 className="font-heading text-heading mb-4 text-4xl leading-none font-black">
        Hello, I’m Kilian
      </h1>
      <p className="text-body [&>a]:text-primary whitespace-pre-line [&>a]:font-semibold [&>a]:underline">
        I{"'"}m a full-stack developer that mainly creates websites based on
        TypeScript, Next.js, React.
        <br />
        During my free time, I like to develop some ideas of websites or video
        games that I may have and I generally publish them under the name{" "}
        <Link href="https://www.kongregate.com/accounts/IndieBaie">
          IndieBaie
        </Link>
        . In the section below, I list my main released projects.
        <br />
        Also you can find me on{" "}
        <Link href="https://www.linkedin.com/in/kilian-braquin">
          LinkedIn
        </Link>{" "}
        and <Link href="https://github.com/kilianbraquin">GitHub</Link>.
      </p>
      <h2 className="font-heading text-heading mt-6 mb-4 text-3xl leading-none font-black">
        Featured Projects
      </h2>
      <ul className="mb-4 flex flex-col gap-3 md:mb-6">
        {dataProjects.map((cardProps) => (
          <li key={cardProps.title}>
            <ProjectCard {...cardProps} />
          </li>
        ))}
      </ul>
      <footer className="font-heading text-body [&>a]:text-primary mt-auto text-center text-lg font-bold [&>a:hover]:underline">
        Kilian Braquin ·{" "}
        <Link href="https://www.linkedin.com/in/kilian-braquin">LinkedIn</Link>{" "}
        · <Link href="https://github.com/kilianbraquin">Github</Link> ·{" "}
        <Link href="https://www.kongregate.com/accounts/IndieBaie">
          Kongregate
        </Link>
      </footer>
    </>
  );
};

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default HomePage;
