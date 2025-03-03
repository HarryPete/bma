import { Book, Contact, Group, HomeIcon, User, UserIcon } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from '@/components/ui/button'
import logo from '@/assets/logo.png'
import Image from 'next/image'
import { toast } from 'sonner'

const NavigationBar = () =>
{

    return(
        <div>
            <div className="absolute z-10 top-0 left-0 p-4  flex items-center justify-between w-full">
                <Image className="h-16 w-fit" src={logo} alt='Bindu Marine Academy'/>

                <div className='flex items-center gap-4 text-white'>
                    
                {/* <Link className='hover:scale-105' href='#home'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger><HomeIcon className='bg-blue-600 p-3 mt-1 rounded-full' size={36}/></TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link> */}

        <Link className='hover:scale-105' href='#course'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger><Book className='bg-blue-600 p-3 mt-1 cursor-pointer rounded-full' size={36}/></TooltipTrigger>
              <TooltipContent>
                <p>Course</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        <Link className='hover:scale-105' href='#instructor'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger><UserIcon className='bg-blue-600 p-3 mt-1 cursor-pointer rounded-full' size={36}/></TooltipTrigger>
              <TooltipContent>
                <p>Instructor</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        
        <Button className='cursor-pointer mt-[-2px] bg-blue-600 hover:bg-blue-700' onClick={()=> toast.error('Unauthorised')}>Login</Button>
                </div>
            </div>
       
        <div className='z-10 fixed bottom-2 -right-2 rounded-3xl flex flex-col justify-around items-center gap-6 p-3 text-sm px-8 text-white'>
        

        <Link className='hover:scale-105' href='https://wa.link/mch8p7' target='_blank'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger><FaWhatsapp className='bg-green-600 p-3 rounded-full' size={48}/></TooltipTrigger>
              <TooltipContent>
                <p>Whatsapp</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
        </div>
      </div>
    )
}

export default NavigationBar