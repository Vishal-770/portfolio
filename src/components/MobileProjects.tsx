"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function MobileProjects() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <Carousel items={cards} />
    </div>
  );
}

const ProjectContent = ({ image, link }: { image: string, link: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-center">
      <img
        src={image}
        alt="Project preview"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-600 underline text-lg"
      >
        View on GitHub
      </a>
    </div>
  );
};

const githubBase = "https://github.com/Vishal-770";

const data = [
  {
    category: "Premium Car selling Website",
    title: "ABC",
    src: "Car.png",
    content: (
      <ProjectContent
        image="Car.png"
        link={`${githubBase}/WallStreetWheels`}
      />
    ),
  },
  {
    category: "URL Shortener",
    title: "Link Short",
    src: "URL.png",
    content: (
      <ProjectContent image="URL.png" link={`${githubBase}/URL-SHORTENER_NEW`} />
    ),
  },
  {
    category: "TicTacToe",
    title: "TicTacToe Game",
    src: "TicTAcToe.png",
    content: (
      <ProjectContent image="TicTAcToe.png" link={`${githubBase}/Tic-Tac-Toe--React`} />
    ),
  },
  {
    category: "Ai Chat App",
    title: "SmartChat",
    src: "AichatApp.png",
    content: (
      <ProjectContent
        image="AichatApp.png"
        link={`${githubBase}/AI-APP`}
      />
    ),
  },
  {
    category: "ToDo App",
    title: "TaskMaster",
    src: "todoApp.png",
    content: (
      <ProjectContent image="todoApp.png" link={`${githubBase}/tTODO-APP-React-V2`} />
    ),
  },
  {
    category: "Netflix Clone",
    title: "NetClone",
    src: "Netflix.png",
    content: (
      <ProjectContent
        image="Netflix.png"
        link={`${githubBase}/Netlify-NetflixClone`}
      />
    ),
  },
];
