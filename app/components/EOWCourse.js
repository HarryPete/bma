import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { motion } from "framer-motion";

export const courseDetail = 
[
    {
        id:1,
        marks: "NA",
        title: "Basic Mathematics",
        src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        subSubjects: false,
        statement: "Basic Mathematics is an essential part of the curriculum and is taught to build a strong foundation. However, it does not have direct questions in the exam."
    },
    {
        id:2,
        marks: "120 marks",
        title: "Science A",
        src: "https://images.unsplash.com/photo-1582297649766-c07106890cea?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        subSubjects: true,
        subjects: 
        [
            {
                title: 'Applied Mechanics',
                questions: 11,
                marks: 'Each question carries 10 marks',
                total: 110
            }, 
            {
                title: 'Naval Architecture',
                questions: 1,
                marks: 'Each question carries 10 marks',
                total: 10
            }, 
        ]
    },
    {
        id:3,
        marks: "120 marks",
        title: "Science B ",
        src: "https://images.unsplash.com/photo-1483639130939-150975af84e5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        subSubjects: true,
        subjects: 
        [
            {
                title: 'Applied Heat',
                questions: 7,
                marks: 'Each question carries 10 marks',
                total: 70
            }, 
            {
                title: 'Hydrostatics',
                questions: 2,
                marks: 'Each question carries 10 marks',
                total: 20
            }, 
            {
                title: 'Electrotechnology',
                questions: 3,
                marks: 'Each question carries 10 marks',
                total: 30
            }, 
        ]
    },
    {
        id:4,
        marks: "100 marks",
        title: "Control Engineering",
        src: "https://images.unsplash.com/photo-1581092795442-d153057d8e0d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        subSubjects: true,
        subjects: 
        [
            {
                title: 'Control Engineering',
                questions: 5,
                marks: 'Each question carries 20 marks',
                total: 100
            }
        ]
    }
]

const EOWCourse = () =>
{
    const [ selectedSubject, setSelectedSubject ] = useState(-1);

    return(
        <div className='p-[5vw]' id="course">
            <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
                <h1 className="md:text-3xl text-2xl font-semibold pb-8">UK EOOW COC (III/1) or BOOW CLASS IV (UK COC)</h1>
                <div className="p-8 rounded-xl bg-blue-600 text-white space-y-2">
                    <p className="font-semibold">Description</p>
                    <p>This course prepares candidates for the UK Engine Officer of the Watch (EOOW) Certificate of Competency (COC). The examination consists of three main subjects: Science A, Science B, and Control Engineering. Each section comprises multiple questions, with varying marks per question.</p>
                    <p className="font-semibold pt-8">Who should enroll?</p>
                    <p>Aspiring marine engineers aiming for UK EOOW COC (III/1) or BOOW CLASS IV certification.</p>
                </div>
            </motion.div>
            <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }} className="font-semibold text-center text-xl pt-8">Course structure</motion.div>
            <motion.div
        className="rounded-xl pt-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
            {courseDetail.map((data)=>
            (
                <div className="space-y-2" key={data.id}>
                    <Image className="w-full h-fit rounded-xl object-cover" src={data.src} alt={data.title} width={100} height={100}/>
                    <div className="flex items-center justify-between">
                        
                        <p className="font-semibold">{data.title}</p>
                    
                    <Dialog open={selectedSubject === data.id} onOpenChange={()=> setSelectedSubject(-1)}>
                    <Button className='bg-blue-600 hover:bg-blue-700' onClick={()=> setSelectedSubject(data.id)}>Details</Button>
                    <DialogContent className="md:w-[600px] w-[375px]">
                    <DialogHeader>
                        <DialogTitle>{data.title}</DialogTitle>
                    </DialogHeader>
                    <div>
                        <Image className="w-full h-48 rounded-xl object-cover" src={data.src} alt={data.title} width={100} height={100}/>
                        <p className="text-muted-foreground text-sm py-2">{data.statement}</p>
                        {data.subSubjects && 
                        <div className="space-y-3 mt-2 text-sm">
                            {data.subjects.map((subject)=>
                            (
                                <div key={subject.title} className="bg-blue-50 p-4 rounded-xl space-y-1">
                                    <div className="flex justify-between items-center">
                                        <h1 className="font-semibold">{subject.title}</h1>
                                        <p className="bg-blue-600 p-1 px-2 rounded-lg text-xs text-white">{subject.questions} Questions</p>
                                    </div>
                                    <p className="text-muted-foreground">{subject.marks}</p>
                                    <div className="flex items-center justify-between">
                                        <p>Subtotal</p>
                                        <p>{subject.total}</p>
                                    </div>
                                </div>
                            ))}
                        </div>}
                        <div className="bg-blue-600 p-4 rounded-xl text-sm mt-3 flex text-white items-center justify-between">
                            <p>Total</p>
                            <p>{data.marks}</p>
                        </div>
                    </div>
                    
                    
                </DialogContent>
                </Dialog>
                </div>
                </div>
            ))}
            </motion.div>
        </div>
    )
}

export default EOWCourse