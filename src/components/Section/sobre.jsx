import Image from 'next/image';
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Sobre() {
  return (
    <section className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 my-10 px-4'>
      <div className='max-w-lg'>
        <h2 className='text-[clamp(1.5rem,4vw,2.5rem)] font-bold mb-4'>Sobre Nós</h2>
        <p className='text-gray-600 mb-6'>
          Na nossa plataforma de educação, você encontra cursos intuitivos,
          flexíveis e eficazes, projetados para ajudar você a alcançar seus
          objetivos — seja para avançar na carreira, se preparar para provas ou
          aprender algo novo.
        </p>
        
        <div className='flex flex-row gap-4 mb-6'>
          <div className='flex flex-col items-center justify-center border border-blue-600 bg-blue-600 text-white p-3 rounded-lg transition-all hover:scale-105'>
            <p className='text-xl font-bold'>+100</p>
            <p className='text-sm'>Estudantes</p>
          </div>
          <div className='flex flex-col items-center justify-center border border-blue-600 p-3 rounded-lg transition-all hover:bg-blue-600 hover:text-white hover:scale-105'>
            <p className='text-xl font-bold'>+20</p>
            <p className='text-sm'>Mentores</p>
          </div>
          <div className='flex flex-col items-center justify-center border border-blue-600 p-3 rounded-lg transition-all hover:bg-blue-600 hover:text-white hover:scale-105'>
            <p className='text-xl font-bold'>+10</p>
            <p className='text-sm'>Comunidades</p>
          </div>
        </div>
        
        <div className='flex gap-4'>
          <a href="#" className='text-blue-600 hover:text-blue-800 transition-colors'>
            <FaFacebook size={30} />
          </a>
          <a href="#" className='text-green-500 hover:text-green-700 transition-colors'>
            <FaWhatsapp size={30} />
          </a>
          <a href="#" className='text-pink-600 hover:text-pink-800 transition-colors'>
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      
      <div className='max-w-lg'>
        <Image
          src="/assets/student.png"
          alt="Estudante usando a plataforma de educação"
          width={500}
          height={500}
          className=''
          priority
        />
      </div>
    </section>
  );
}