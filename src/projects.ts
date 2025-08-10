import CGIcon from './assets/cg-icon.svg';
import MTIcon from './assets/mt-icon.svg';
import ESMIcon from './assets/esm-icon.svg';
import SwiftIcon from './assets/swift-icon.svg';

export const projects = [
  {
    iconComponent: SwiftIcon,
    title: 'Swift Todo',
    prefix: 'Prototype',
    description:
      'A web application based on React and Framer Motion that lets you manage a simple to-do list.',
    href: 'https://swift.kbraquin.com',
  },
  {
    iconComponent: CGIcon,
    title: 'Chicken Godfather',
    description:
      'An incremental video game where chicken has been banned forbidden, and you decide to join a cartel to get some.',
    href: 'https://www.kongregate.com/games/IndieBaie/chicken-godfather',
  },
  {
    iconComponent: MTIcon,
    title: 'Monster Tycoon',
    description:
      'A turn-based battle game where you have to build the best monster team to win the championship.',
    href: 'https://www.kongregate.com/games/IndieBaie/monster-tycoon',
  },
  {
    iconComponent: ESMIcon,
    title: 'ESManager',
    description:
      'A tactical video game where you are an e-sports coach who trains his players, devises strategies, and prepares for matches to lead his team to victory.',
    href: 'https://www.kongregate.com/games/IndieBaie/esmanager',
  },
];

export type ProjectIconComponent = (typeof projects)[number]['iconComponent'];
