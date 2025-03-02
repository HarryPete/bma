
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

const Footer = () => 
{
    return (
        <div className='px-[10vw] justify-center py-24 text-white md:text-base text-sm bg-blue-900' id="contact">
            <div className='flex flex-col justify-center items-center gap-4 py-8' data-aos="fade-up">
                <Image className='md:h-40 h-36 w-fit' src={logo} alt='icon' />
                <p className='md:text-5xl text-3xl font-semibold text-center pb-8'>Bindu Marine Academy</p>
                <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="200">
                    <Mail className='text-white' />
                    <p>basumech016@gmail.com</p>
                </div>
                <div className='flex gap-2 items-center' data-aos="fade-up" data-aos-delay="400">
                    <Phone className='text-white text-sm' />
                    <p>+91 8746034092</p>
                </div>
                <p className='text-center text-gray-400 leading-loose' data-aos="fade-up" data-aos-delay="600">
                    © 2024 Bindu Marine Academy. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
