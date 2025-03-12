export interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  demoUrl: string;
}

export const projects: Project[] = [
  {
    title: "Chatify",
    description: "Personal Chat Room or Workspace to share resources and hangout with friends built with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
    image: "https://i.imgur.com/wvxPV9S.png",
    githubUrl: "https://github.com/soumyajit4419/Chatify",
    demoUrl: "https://chatify-49.web.app/",
  },
  {
    title: "Bits-of-Code",
    description: "My personal blog page built with Next.js and Tailwind. Can which takes the content from markdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown.",
    image: "https://i.imgur.com/rXuui1d.png",
    githubUrl: "https://github.com/soumyajit4419/Bits-0f-C0de",
    demoUrl: "https://blogs.soumyajit.tech/",
  },
  {
    title: "Editorio",
    description: "Online code and markdown editor built with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README files with instant preview.",
    image: "https://i.imgur.com/8GkxDz1.png",
    githubUrl: "https://github.com/soumyajit4419/Editor.io",
    demoUrl: "https://editor.soumyajit.tech/",
  },
];
