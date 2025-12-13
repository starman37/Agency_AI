import React from "react";
import Title from "./Title";
import assets from "../src/assets/assets";
import { motion } from "motion/react";

const OurWork = () => {
  const workData = [
    {
      title: "Mobile app marketing",
      description:
        "A comprehensive approach to boost your app's visibility and downloads.",
      image: assets.work_mobile_app,
    },
    {
      title: "Dashboard management",
      description: "Innovative design meets seamless functionality.",
      image: assets.work_dashboard_management,
    },
    {
      title: "Fitness app promotion",
      description: "Engaging campaigns to elevate your fitness app's presence.",
      image: assets.work_fitness_app,
    },
  ];
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.2 }}
      viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 gap-7 text-gray-700 dark:text-white"
    >
      <Title
        title={"Our latest work"}
        desc={
          "From concept to creation, explore our portfolio of innovative projects."
        }
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            key={index}
            className="hover:scale-102 duration-500 transition-all cursor-pointer"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full rounded-xl"
            />
            <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6">{work.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
