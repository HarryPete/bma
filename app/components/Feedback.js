"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import quote from "@/assets/quote.png";

const feedbacks = [
  {
    name: "Amit Kumar",
    feedback:
      "The instructor explains even the most complex topics with ease, ensuring every student understands. Highly recommend!",
  },
  {
    name: "Sophia Rodriguez",
    feedback:
      "Patient and detail-oriented, making sure no question goes unanswered. Truly committed to student success!",
  },
  {
    name: "James Anderson",
    feedback:
      "His engaging teaching style and real-world examples make learning an enjoyable experience. Always open to discussions!",
  },
  {
    name: "Priya Sharma",
    feedback:
      "A great mentor who provides clear explanations and practical insights. Helped me gain confidence in the subject.",
  },
  {
    name: "Liam Johnson",
    feedback:
      "Very knowledgeable and ensures each student gets personal attention. His passion for teaching is evident in every session.",
  },
  {
    name: "Emily Carter",
    feedback:
      "Fantastic teaching approach! Breaks down difficult concepts into digestible parts, making learning stress-free.",
  },
  {
    name: "Rahul Mehta",
    feedback:
      "Encouraging and supportive! Goes the extra mile to ensure every student is on the same page before moving forward.",
  },
  {
    name: "Olivia Brown",
    feedback:
      "Lessons are structured, interactive, and easy to follow. Creates a great learning environment for all skill levels.",
  },
  {
    name: "Noah Williams",
    feedback:
      "Professional, passionate, and always available to help. His ability to simplify concepts is truly commendable.",
  },
  {
    name: "Isabella Thomas",
    feedback:
      "Brings enthusiasm to every session, making learning interactive and engaging. Highly skilled in breaking down tough topics.",
  },
  {
    name: "Ethan Martinez",
    feedback:
      "One of the best teachers I’ve had! His structured approach and in-depth explanations have greatly improved my understanding.",
  },
  {
    name: "Aarav Patel",
    feedback:
      "Uses practical examples and engaging discussions to reinforce concepts. Learning from him has been a great experience!",
  },
];

const Feedback = () => {
  return (
    <div className="px-[5vw] py-12 bg-blue-50">
      <h1 className="md:text-3xl text-2xl py-6 font-semibold">
        Hear from our achievers
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {feedbacks.map((data, index) => (
          <motion.div
            key={data.name}
            className="flex flex-col justify-between space-y-4 p-8 rounded-xl bg-white shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Image className="h-16 w-fit" src={quote} alt="quote" />
            <p className="leading-relaxed">{data.feedback}</p>
            <h3 className="font-semibold">{data.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
