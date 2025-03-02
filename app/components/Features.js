"use client"
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaUserFriends, FaClipboardCheck, FaLightbulb, FaBookOpen, FaAward } from "react-icons/fa";

const Features = () => {
  const features = [
    { text: "Both Offline and Online class modes are available.", icon: <FaChalkboardTeacher /> },
    { text: "Limited students per batch enables focus on each individual.", icon: <FaUserFriends /> },
    { text: "Mock test mechanism to improve your weaknesses.", icon: <FaClipboardCheck /> },
    { text: "Clearance of basic concepts.", icon: <FaLightbulb /> },
    { text: "Qualitative teaching approach.", icon: <FaBookOpen /> },
    { text: "100% passing rate.", icon: <FaAward /> }
  ];

  return (
    <motion.div 
      className="p-10 rounded-2xl bg-blue-50 px-[5vw] py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="md:text-3xl text-xl font-semibold col-span-full pb-4"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Salient Features
      </motion.h2>
      {features.map((feature, index) => (
        <motion.div 
          key={index} 
          className="space-y-4 p-8 bg-white rounded-xl shadow-md"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 text-4xl">{feature.icon}</span>
          <p className="space-y-2 pt-4">{feature.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Features;
