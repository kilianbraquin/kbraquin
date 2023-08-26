import { Metadata, NextPage } from "next";
import { ProjectCard, ProjectCardProps } from "@/components/ProjectCard";
import Link from "next/link";
import CGIcon from "@/icons/cg-icon.svg";
import MTIcon from "@/icons/mt-icon.svg";
import ESMIcon from "@/icons/esm-icon.svg";
import IBSIcon from "@/icons/ib-saver-icon.svg";
import SwiftIcon from "@/icons/swift-icon.svg";

const dataProjects: ProjectCardProps[] = [
  {
    image: <IBSIcon />,
    title: "IB Saver",
    description:
      "A web application that allows to search tweets and easily download their media (images, videos).",
    href: "https://ibsaver.kbraquin.com",
  },
  {
    image: <SwiftIcon />,
    title: "Swift Todo",
    description: (
      <>
        <span className="inline-block py-0.5 px-1 bg-primary/10 text-primary font-bold rounded-md mr-1">
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
      "An incremental video game where chicken is became forbidden, and you decide to join a cartel to get some.",
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
      "A tactical video game where you are an e-sport coach that has to train his players and prepare the matches to make your team winning.",
    href: "https://www.kongregate.com/games/IndieBaie/esmanager",
  },
];

const HomePage: NextPage = () => {
  return (
    <>
      <h1 className="font-heading text-heading font-black mb-4 text-4xl leading-none">
        Hello, I’m Kilian
      </h1>
      <p className="text-body [&>a]:text-primary [&>a]:underline [&>a]:font-bold whitespace-pre-line">
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
      <h2 className="font-heading text-heading font-black mt-6 mb-4 text-3xl leading-none">
        Featured Projects
      </h2>
      <ul className="mb-4 md:mb-6 gap-3 grid grid-cols-1 md:grid-cols-1">
        {dataProjects.map((cardProps) => (
          <li key={cardProps.title}>
            <ProjectCard {...cardProps} />
          </li>
        ))}
      </ul>
      <footer className="font-heading text-lg text-body text-center [&>a]:text-primary [&>a:hover]:underline [&>a]:font-bold mt-auto">
        © 2023 Kilian Braquin ·{" "}
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
