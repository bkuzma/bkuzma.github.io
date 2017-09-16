import antidiary from '../images/antidiary-1.png';
import biteMe from '../images/bite-me-1.png';
import destroyer from '../images/destroyer-1.png';
import diplo from '../images/diplo-1.png';
import kswiss from '../images/kswiss-1.png';

export default [
  {
    agency: 'R/GA',
    description: 'I developed a motion-activated mobile audio player app in Angular using the device motion JavaScript API. The app promoted Samsung’s fitness products and would play an exclusive music mix by Diplo only when a certain threshold of device movement was detected to encourage dancing, running, walking, and so on.',
    images: [
      {
        src: diplo,
      },
    ],
    link: null,
    title: 'Move With Galaxy',
    year: 2016,
  },
  {
    agency: 'R/GA',
    description: 'I worked on a team developing an immersive 3D mobile app in Angular for Rihanna in partnership with Samsung to promote her 2016 album release. I was responsible for overall app architecture and routing as well as writing and styling many of the app’s Angular components.',
    images: [
      {
        src: antidiary,
      },
    ],
    link: null,
    title: 'Rihanna Antidiary',
    year: 2015,
  },
  {
    description: 'Destroyer is an iPhone app from The Strange Agency that lets you rearrange and manipulate sound loops. I built the interactive grid UI in Objective-C, which interfaced with the app\'s audio engine and allowed the user to rearrange and toggle tiles, thereby changing the structure of a sound loop in real-time',
    images: [
      {
        src: destroyer,
      },
    ],
    title: 'Destroyer',
    year: 2012,
  },
  {
    description: 'I built out the entire front-end for a past version of K-Swiss’s website. The project had a Kohana backend, which consumed product content from a Magento API and rendered the pages. I built an interactive shoe search tool as well as a shoe viewer with magnified and 360 views.',
    images: [
      {
        src: kswiss,
      },
    ],
    title: 'K-Swiss',
    year: 2011,
  },
  {
    description: 'When I was learning Objective-C, I wrote an iPad game called Bite Me, available for free in the iTunes app store. The game required the user to keep their fingers on creatures that would pop up in random areas on the screen and sometimes move about, turning it into a sort of twister for your fingers.',
    images: [
      {
        src: biteMe,
      },
    ],
    title: 'Bite Me',
    year: 2011,
  },
];
