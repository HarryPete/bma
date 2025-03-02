import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is UK EOW COC (III/1)?",
    answer: "The UK Engine Officer of the Watch (EOW) Certificate of Competency (COC) III/1 is a qualification required for marine engineers to serve as watchkeeping engineers on ships.",
  },
  {
    question: "What is BOW CLASS IV (UK COC)?",
    answer: "The UK Bridge Officer of the Watch (BOW) Class IV Certificate of Competency (COC) is for deck officers who want to take responsibility for navigational watch duties on ships.",
  },
  {
    question: "Who is eligible for the UK EOW COC (III/1)?",
    answer: "Candidates must complete an approved training program, gain sea service experience, and pass the required examinations.",
  },
  {
    question: "What are the requirements for BOW CLASS IV (UK COC)?",
    answer: "Eligibility includes completing an approved maritime training course, obtaining sea time, and passing the Maritime & Coastguard Agency (MCA) exams.",
  },
  {
    question: "How do I apply for the UK COC?",
    answer: "You must submit an application to the MCA with proof of sea service, training records, and pass the required oral and written exams.",
  },
  {
    question: "Is the UK COC recognized internationally?",
    answer: "Yes, the UK Certificate of Competency is recognized under the STCW Convention, allowing holders to work on ships worldwide.",
  },
  {
    question: "What exams are required for EOW COC (III/1) and BOW CLASS IV?",
    answer: "Exams include written assessments, practical evaluations, and an oral exam conducted by the MCA.",
  },
  {
    question: "How long does it take to obtain the UK COC?",
    answer: "The time varies based on sea service experience and training completion, but it typically takes between 12-36 months.",
  },
  {
    question: "Can I upgrade my UK COC?",
    answer: "Yes, with additional sea service and qualifications, you can upgrade to a higher-level COC, such as Chief Engineer or Master Mariner.",
  },
  {
    question: "Where can I get more information on UK COCs?",
    answer: "Visit the Maritime & Coastguard Agency (MCA) website or consult an approved training institution for detailed guidance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div 
      className="p-[5vw] bg-blue-50"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="md:text-3xl text-2xl font-semibold mb-6">FAQs</h2>
      
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-6 text-left font-medium"
            >
              {faq.question}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
            
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={openIndex === index ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="pb-8 font-semibold">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
