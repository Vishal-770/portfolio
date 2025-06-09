"use client";

import PixelTransition from "@/blocks/Animations/PixelTransition/PixelTransition";
import CircularGallery from "@/blocks/Components/CircularGallery/CircularGallery";
import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import TrueFocus from "@/blocks/TextAnimations/TrueFocus/TrueFocus";
import { ContactSection } from "@/components/ContactSection";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import MobileProjects from "@/components/MobileProjects";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { words } from "@/constants/constant1";
export default function Home() {
  return (
    <>
      <div className="flex flex-col" id="home">
        {/* Hero Section Starts Here */}
        <div className="font-base flex items-center justify-center mt-15 flex-col gap-10 text-center lg:flex-row lg:mx-15">
          <BackgroundGradient className="rounded-2xl max-w-sm  bg-white dark:bg-zinc-900">
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
          </BackgroundGradient>
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
        {/* Hero Section Ends Here */}
        <div className="mt-10 text-2xl">
          <TrueFocus
            sentence="Tech Skills"
            manualMode={true}
            blurAmount={15}
            borderColor="red"
            animationDuration={1}
            pauseBetweenAnimations={1}
          />
        </div>
        <div id="about">
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
        <div className=" hidden lg:block">
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
          </div>
        </div>
        <div className="h-full max-w-screen overflow-hidden lg:hidden">
          <MobileProjects />
        </div>
        <div className="h-100 flex items-center justify-center text-2xl">
          <TypewriterEffectSmooth words={words} />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-7">
          <BackgroundGradient className="rounded-2xl max-w-sm  bg-white dark:bg-zinc-900">
            <PixelTransition
              firstContent={
                <img
                  src="DAO.png"
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  className="text-center font-base"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "3rem",
                      color: "#ffffff",
                    }}
                  >
                    DAO Community VIT-C
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </BackgroundGradient>
          <BackgroundGradient className="rounded-2xl max-w-sm  bg-white dark:bg-zinc-900">
            <PixelTransition
              firstContent={
                <img
                  src="Ac.png"
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  className="text-center font-base"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "3rem",
                      color: "#ffffff",
                    }}
                  >
                    Android Club VIT-C
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </BackgroundGradient>
          <BackgroundGradient className="rounded-2xl max-w-sm  bg-white dark:bg-zinc-900">
            <PixelTransition
              firstContent={
                <img
                  src="Tedx.png"
                  alt="default pixel transition content, a cat!"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <div
                  className="text-center font-base"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    placeItems: "center",
                    backgroundColor: "#111",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "3rem",
                      color: "#ffffff",
                    }}
                  >
                    Ted-X VIT-C
                  </p>
                </div>
              }
              gridSize={12}
              pixelColor="#ffffff"
              animationStepDuration={0.4}
              className="custom-pixel-card"
            />
          </BackgroundGradient>
        </div>

        <div id="contact" className=" ">
          <ContactSection />
        </div>
      </div>
    </>
  );
}
