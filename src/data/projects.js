import antidiary from '../images/antidiary-1.png';
import biteMe from '../images/bite-me-1.png';
import destroyer from '../images/destroyer-1.png';
import diplo from '../images/diplo-1.png';
import fanmail from '../images/fanmail-1.png';
import kswiss from '../images/kswiss-1.png';

export default [
  {
    agency: 'R/GA',
    description: 'I developed a motion-activated mobile audio player app in Angular using the device motion JavaScript API. The app promoted Samsung’s fitness products and would play an exclusive music mix by Diplo only when a certain threshold of device movement was detected to encourage dancing/running/walking/etc. Done while at R/GA.',
    images: [
      {
        src: diplo,
      },
    ],
    link: null,
    title: 'Move With Galaxy',
  },
  {
    agency: 'R/GA',
    description: 'I worked on a team developing an immersive 3D mobile app in Angular for Rihanna in partnership with Samsung to promote her 2016 album release. I was responsible for overall app architecture and routing as well as writing and styling many of the app’s Angular components. Done while at R/GA.',
    images: [
      {
        src: antidiary,
      },
    ],
    link: null,
    title: 'Rihanna Antidiary',
  },
  {
    description: 'I did all front end development for a previous version of K-Swiss’s website.',
    images: [
      {
        src: kswiss,
      },
    ],
    title: 'K-Swiss',
  },
  {
    agency: 'NoFavorite',
    description: 'I did all front end development for the Fanmail e-commerce site. Fully responsive. Done through NoFavorite.',
    images: [
      {
        src: fanmail,
      },
    ],
    title: 'Fanmail',
  },
  {
    description: 'I wrote all grid touch interaction for Destroyer, an iPhone app by The Strange Agency that lets you rearrange and manipulate sound loops.',
    images: [
      {
        src: destroyer,
      },
    ],
    title: 'Destroyer',
  },
  {
    description: 'I did all development for Bite Me, an iPad game available for free in the iTunes app store. Written in Objective-C.',
    images: [
      {
        src: biteMe,
      },
    ],
    title: 'Bite Me',
  },
];