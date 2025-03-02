"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import founderDP from "@/assets/founderDP.png";
import React from "react";

const Founder = () => {
  const instructor = {
    name: "Prof. Basavaraj Magadum",
    qualifications: "B.E, M.Tech",
    experience: 11,
    batchesHandled: [
      { course: "HND", count: 8, hours : '480' },
      { course: "EOOW Class IV (UK COC)", count: 38, hours : '2200' },
      { course: "Class 2", count: 2, hours : '240' },
    ],
  };

  return (
    <div className="px-[5vw] rounded-lg space-y-2 py-12" id="instructor">
      <motion.h2
        className="md:text-3xl text-2xl font-semibold pb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Founder & Instructor
      </motion.h2>

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Image
          className="h-72 w-72 object-cover object-top rounded-xl my-4"
          src={founderDP}
          alt="Profile"
        />
        <p className="text-lg font-semibold mt-2">{instructor.name}</p>
        <p className="text-sm">B.E | M.Tech</p>
      </motion.div>

      <motion.div
        className="text-md pt-4 leading-relaxed space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p>A highly experienced educator with a strong background in engineering and technical training, he brings over a decade of teaching experience, guiding students across various certification levels. His expertise lies in breaking down complex concepts into simple, digestible lessons, ensuring learners grasp fundamental and advanced topics with confidence.</p>
        <p>Beyond the classroom, he has played a pivotal role in curriculum development, mentorship programs, and industry collaborations, bridging the gap between theoretical knowledge and practical application. His engaging teaching style, combined with real-world examples, makes learning both insightful and impactful.</p>
        </motion.div>

      <motion.h2
        className="py-2 text-lg font-semibold"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
        {instructor.batchesHandled.map((batch, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-4 rounded-xl space-y-2 text-center shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="font-semibold bg-blue-600 text-white p-2 rounded">{batch.course}</p>
            <div className="space-y-4 pt-2">
            <p  className="text-sm">{batch.count} batches</p>
            <p  className="text-sm">{batch.hours}+ hours</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Founder;
