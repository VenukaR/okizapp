"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Smooth scale difference between desktop and mobile
  const scaleDimensions = () => (isMobile ? [0.85, 0.95] : [1.08, 1]);

  // Start rotation and animation slightly earlier, pivot from lower position
  const rotate = useTransform(scrollYProgress, [0.1, 0.7], [25, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0.1, 0.7], [40, -80]);

  return (
    <div
      className="h-[48rem] md:h-[55rem] flex items-center justify-center relative"
      ref={containerRef}
    >
      <div
        className="py-10 w-full relative"
        style={{ perspective: "1200px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-10"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformOrigin: "center 90%", // ✅ Pivot near the bottom for natural rotation
        transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)", // ✅ Smooth easing curve
        boxShadow:
          "0 5px 20px rgba(63, 192, 240, 0.25), 0 25px 50px rgba(63, 192, 240, 0.2), 0 100px 100px rgba(63, 192, 240, 0.15)",
      }}
      className="max-w-4xl -mt-12 mx-auto h-[25rem] md:h-[30rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#1E1E1E] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900">
        {children}
      </div>
    </motion.div>
  );
};
