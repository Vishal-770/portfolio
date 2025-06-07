"use client";

import RollingGallery from "@/blocks/Components/RollingGallery/RollingGallery";
import TiltedCard from "@/blocks/Components/TiltedCard/TiltedCard";

import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
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
      </div>
    </>
  );
}
