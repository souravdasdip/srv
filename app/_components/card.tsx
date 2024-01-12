"use client";

import { useFeatureStore } from "@/store/store";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type FeatureCardProps = {
  id: string;
  gradient: string;
  children: React.ReactNode;
  img: string;
};

type CardProps = {
  id: string;
};

export const FeatureCard = ({
  id,
  gradient,
  children,
  img,
}: FeatureCardProps) => {
  const inVIewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullScreenFeature = useFeatureStore(
    (state) => state.setfullScreenFeature
  );
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl p-4 transition-opacity",
        inVIewFeature === id
          ? "active-card opacity-100"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={classNames(
          "gradient rounded-2xl origin-top-right absolute inset-0 bg-gradient-to-br",
          gradient
        )}
      >
        <button
          onClick={() => setFullScreenFeature(id)}
          className="z-[99999] show-me-btn absolute bottom-4 right-4 bg-black mt-2 px-4 py-2 shadow-lg rounded-full text-white"
        >
          Show
        </button>
      </div>
      {!fullScreenFeature && (
        <motion.div
          layoutId={`visual-${id}`}
          className="w-[100%] h-[100%] flex items-center justify-center"
        >
          <Image
            className={classNames(
              inVIewFeature === id ? "scale-100" : "scale-0",
              "object-cover aspect-square w-[40%] h-[40%] rounded-xl transition-transform mix-blend-multiply shadow-lg"
            )}
            width={1000}
            height={1000}
            src={img}
            alt={id}
          />
        </motion.div>
      )}
    </div>
  );
};

// export const Todo = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
//       <span />
//     </FeatureCard>
//   );
// };

// export const Colors = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
//       <span />
//     </FeatureCard>
//   );
// };

// export const Music = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adffd8]">
//       <span />
//     </FeatureCard>
//   );
// };

// export const Availability = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
//       <span />
//     </FeatureCard>
//   );
// };

// export const SchedulingLinks = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
//       <span />
//     </FeatureCard>
//   );
// };

// export const Team = ({ id }: CardProps) => {
//   return (
//     <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
//       <span />
//     </FeatureCard>
//   );
// };
