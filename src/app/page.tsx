"use client";

import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";

import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <div className="font-base flex items-center justify-center mt-15 flex-col gap-10 text-center lg:flex-row lg:mx-15">
          <TiltedCard
            imageSrc="/profileimage.jpg"
            altText="Vishal - Web Dev"
            captionText="Vishal - Web Dev "
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={15}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text bg-white text-black border rounded-2xl p-2">
                Vishal - Web Dev
              </p>
            }
          />
          {/* description */}
          <div className="text-xl px-10 lg:text-3xl">
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              I’m a Computer Science undergraduate with a strong passion for web
              development. I specialize in building responsive, user-centric
              applications using modern technologies like React, Next.js,
              Tailwind CSS, Node.js, and MongoDB.
            </GradientText>
          </div>
        </div>
        <div className="mt-10 text-2xl">
          <TrueFocus
            sentence="Tech Skills"
            manualMode={true}
            blurAmount={15}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
        <div>
          <RollingGallery autoplay={true} pauseOnHover={true} />
        </div>
        <div className="flex items-center justify-center font-base gap-5 text-4xl">
          <h1 className="text-5xl">My</h1>
          <RotatingText
            texts={["Projects", "Builds", "Creations", "Works"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={3000}
          />
        </div>
        <div className="h-100"></div>
      </div>
    </>
  );
}
