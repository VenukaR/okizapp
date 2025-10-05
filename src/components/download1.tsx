"use client";

import { Smartphone, Tablet } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Download1Props {
  heading?: string;
  description?: string;
  platforms?: {
    ios?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
    android?: {
      title: string;
      subtitle: string;
      description: string;
      url: string;
    };
  };
}

const Download1 = ({
  heading = "Download Our App",
  description = "Get our powerful application on every platform and boost your workflow with synchronized features and real-time collaboration.",
  platforms = {
    ios: {
      title: "Mobile Phone",
      subtitle: "iOS",
      description:
        "Take your productivity on the go with our intuitive mobile app designed for seamless touch interactions.",
      url: "#",
    },
    android: {
      title: "Mobile Phone / Tablet",
      subtitle: "Android",
      description:
        "Enjoy flexible functionality across phones and tablets with our optimized Android experience.",
      url: "#",
    },
  },
}: Download1Props) => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-12 w-full">
      <div className="container mx-auto flex flex-col items-center">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            {heading}
          </h2>
          <p className="text-gray-600 mx-auto mb-8 max-w-2xl text-lg">
            {description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 place-items-center">
          {/* iOS Card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-md transition hover:shadow-xl w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Background Shape */}
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rotate-45 bg-blue-100 opacity-50 blur-xl" />
              <div className="relative z-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Smartphone className="h-7 w-7" />
              </div>
              <p className="mb-1 text-sm text-blue-600 font-medium">
                {platforms.ios?.title}
              </p>
              <h3 className="mb-3 text-2xl font-bold">
                {platforms.ios?.subtitle}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {platforms.ios?.description}
              </p>
              <a
                href={platforms.ios?.url}
                className="inline-block hover:scale-105 transition"
              >
                <Image
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.png"
                  alt="Download on the App Store"
                  className="h-11"
                />
              </a>
            </div>
          </motion.div>

          {/* Android Card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-blue-500 p-[2px] shadow-md transition hover:shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative h-full w-full rounded-3xl bg-white p-8">
              {/* Angular Shape Accent */}
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rotate-45 bg-blue-100 opacity-50 blur-xl" />
              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
                  <Tablet className="h-7 w-7" />
                </div>
                <p className="mb-1 text-sm text-blue-600 font-medium">
                  {platforms.android?.title}
                </p>
                <h3 className="mb-3 text-2xl font-bold">
                  {platforms.android?.subtitle}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {platforms.android?.description}
                </p>
                <a
                  href={platforms.android?.url}
                  className="inline-block hover:scale-105 transition"
                >
                  <Image
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.png"
                    alt="Download on Google Play"
                    className="h-11"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Download1 };
