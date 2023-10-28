import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import project1 from '/Images/full.png'
import project2 from '/Images/travel.png'
import project3 from '/Images/dark-T.jpeg'
import { useColorMode } from '@chakra-ui/react';

const Projects = () => {
  const {colorMode} = useColorMode()
  return (
    <section className="min-h-[90vh] lg:max-h-screen" id='projects' >
        <div className='container mx-auto my-[8rem] lg:my-[3rem]  '>
           <div className='flex flex-col lg:flex-row gap-x-10 items-center justify-center'>
            
          {colorMode === 'dark' ?
          <>
          {/* dark mode */}
          <div className='flex justify-center mt-[5rem]'>
              <motion.h2
               variants={fadeIn('down', 0.5)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: false, amount: 0.7}} 
              className='h2 text-center font-primary text-accent font-bold'>
                Projects
              </motion.h2>
           </div>
          <div>
           <a href=''>
        <div className='group relative overflow-hidden border-2
        border-white/50 rounded-xl lg:w-[18rem] '>
        {/* overlay */}
        <div className="group-hover:bg-black/60 w-full h-full absolute
        z-50 transition-all duration-300"></div>
        {/* image */}
        <img 
        className='group-hover:scale-110 transition-all duration-500' 
        src={project1} alt=""/>
        
        {/*proj title */}
        <div className='absolute -bottom-full left-12 z-50
        transition-all duration-500 group-hover:bottom-24'>
        <span className='text-accent font-semibold'>Frontend Dev</span>
        </div>
        {/* title */}
         <div className='absolute -bottom-full left-12 z-50
        transition-all duration-700 group-hover:bottom-14'>
           <span className='text-2xl text-white font-bold'>Advert page</span>
          </div>
         </div>
           </a>
          <a href='https://github.com/K-Josh/Travel_Agency.git' className='hover:text-accent'>See Code</a>

           <a href=''>
        <div className='group relative overflow-hidden border-2
        border-white/50 rounded-xl lg:w-[18rem] lg:h-[16rem]'>
        {/* overlay */}
        <div className="group-hover:bg-black/60 w-full h-full absolute
        z-50 transition-all duration-300"></div>
        {/* image */}
        <img 
        className='group-hover:scale-110 transition-all duration-500' 
        src={project1} alt=""/>
        {/*proj title */}
        <div className='absolute -bottom-full left-12 z-50
        transition-all duration-500 group-hover:bottom-24'>
        <span className='text-accent font-semibold '>UI/UX Design</span>
        </div>
        {/* title */}
         <div className='absolute -bottom-full left-12 z-50
        transition-all duration-700 group-hover:bottom-14'>
           <span className='text-2xl text-white font-bold'>Project Title</span>
         </div>
        </div>
           </a>
           <a href='https://github.com/K-Josh/Travel_Agency.git' className='hover:text-accent'>See Code</a>
          </div>
               
          <div className='flex-1 flex flex-col gap-y-1'>
           <a href='https://explorewithme.netlify.app'>
          <div className='group relative overflow-hidden border-2
        border-white/50 rounded-xl lg:w-[16rem] lg:h-[16rem] cursor-pointer '>
        {/* overlay */}
        <div className="group-hover:bg-black/60 w-full h-full absolute
        z-50 transition-all duration-300"></div>
        {/* image */}
        <img 
        className='group-hover:scale-110 content-fit transition-all duration-500' 
        src={project2} alt="travel-agency"/>
        <img 
        className='group-hover:scale-110 content-fit transition-all duration-500' 
        src={project3} alt="travel-agency"/>
        {/*proj title */}
        <div className='absolute -bottom-full left-14 z-50
        transition-all duration-500 group-hover:bottom-24'>
        <span className='text-orange-600 font-semibold'>Frontend Dev</span>
        </div>
        {/* title */}
         <div className='absolute -bottom-full left-12 z-50
        transition-all duration-700 group-hover:bottom-14'>
           <span className='text-2xl text-white font-bold'>Travel Agency</span>
         </div>
        </div>
           </a>
           <a href='https://github.com/K-Josh/Travel_Agency.git' className='hover:text-accent'>See Code</a>

           <a href=''>
        <div className='group relative overflow-hidden border-2
        border-white/50 rounded-xl lg:w-[17rem] lg:h-[16rem]'>
        {/* overlay */}
        <div className="group-hover:bg-black/60 w-full h-full absolute
        z-50 transition-all duration-300"></div>
        {/* image */}
        <img 
        className='group-hover:scale-110 transition-all duration-500' 
        src={project1} alt=""/>
        {/*proj title */}
        <div className='absolute -bottom-full left-12 z-50
        transition-all duration-500 group-hover:bottom-24'>
        <span className='text-accent font-semibold'>Frontend Dev</span>
        </div>
        {/* title */}
         <div className='absolute -bottom-full left-12 z-50
        transition-all duration-700 group-hover:bottom-14'>
           <span className='text-2xl text-white font-bold'>Advert Page</span>
         </div>
        </div>
           </a>
           <a href='https://github.com/K-Josh/Travel_Agency.git' className='hover:text-accent'>See Code</a>
          </div>
          </> 
           : 
           <>
           {/* light mode */}
          <div className='flex justify-center mt-[5rem]'>
              <motion.h2
               variants={fadeIn('down', 0.5)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: false, amount: 0.7}} 
              className='h2 text-center font-primary text-accent font-bold'>
                Projects
              </motion.h2>
           </div>
           <motion.div
              variants={fadeIn('left', 0.5)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: false, amount: 0.7}}
               className=''
              >
          <a href=''>
        <div className='group relative overflow-hidden border-2
        border-white/50 rounded-xl lg:w-[18rem] '>
        {/* overlay */}
        <div className="group-hover:bg-black/60 w-full h-full absolute
        z-50 transition-all duration-300"></div>
        {/* image */}
        <img 
        className='group-hover:scale-110 transition-all duration-500' 
        src={project1} alt=""/>
        {/*proj title */}
        <div className='absolute -bottom-full left-12 z-50
        transition-all duration-500 group-hover:bottom-24'>
        <span className='text-accent font-semibold'>Frontend Dev</span>
        </div>
        {/* title */}
         <div className='absolute -bottom-full left-12 z-50
        transition-all duration-700 group-hover:bottom-14'>
           <span className='text-2xl text-white font-bold'>Advert page</span>
          </div>
         </div>
          </a>
          <a href='https://github.com/K-Josh/Travel_Agency.git' className='hover:text-accent'>See Code</a>

           <a href=''>
        <div className='group relative overflow-hidden border-2
        border-white/50 rounded-xl lg:w-[18rem] lg:h-[16rem]'>
        {/* overlay */}
        <div className="group-hover:bg-black/60 w-full h-full absolute
        z-50 transition-all duration-300"></div>
        {/* image */}
        <img 
        className='group-hover:scale-110 transition-all duration-500' 
        src={project1} alt=""/>
        {/*proj title */}
        <div className='absolute -bottom-full left-12 z-50
        transition-all duration-500 group-hover:bottom-24'>
        <span className='text-accent font-semibold '>UI/UX Design</span>
        </div>
        {/* title */}
         <div className='absolute -bottom-full left-12 z-50
        transition-all duration-700 group-hover:bottom-14'>
           <span className='text-2xl text-white font-bold'>Project Title</span>
         </div>
        </div>
           </a>
           <a href='https://github.com/K-Josh/Travel_Agency.git' className='hover:text-accent'>See Code</a>
           </motion.div>
               
          <motion.div  variants={fadeIn("right", 0.5)}
             initial="hidden"
            whileInView={"show"}
           viewport={{once: false, amount: 0.3}}
           className='flex-1 flex flex-col gap-y-1'>

          <a href='https://explorewithme.netlify.app'>
          <div className='group relative overflow-hidden border-2
        border-white/50 rounded-xl lg:w-[16rem] lg:h-[16rem] cursor-pointer '>
        {/* overlay */}
        <div className="group-hover:bg-black/60 w-full h-full absolute
        z-50 transition-all duration-300"></div>
        {/* image */}
        <img 
        className='group-hover:scale-110 content-fit transition-all duration-500' 
        src={project2} alt="travel-agency"/>
        {/*proj title */}
        <div className='absolute -bottom-full left-14 z-50
        transition-all duration-500 group-hover:bottom-24'>
        <span className='text-orange-600 font-semibold'>Frontend Dev</span>
        </div>
        {/* title */}
         <div className='absolute -bottom-full left-12 z-50
        transition-all duration-700 group-hover:bottom-14'>
           <span className='text-2xl text-white font-bold'>Travel Agency</span>
         </div>
        </div>
          </a>
          <a href='https://github.com/K-Josh/Travel_Agency.git' className='hover:text-accent'>See Code</a>

        <a href=''>
        <div className='group relative overflow-hidden border-2
        border-white/50 rounded-xl lg:w-[17rem] lg:h-[16rem]'>
        {/* overlay */}
        <div className="group-hover:bg-black/60 w-full h-full absolute
        z-50 transition-all duration-300"></div>
        {/* image */}
        <img 
        className='group-hover:scale-110 transition-all duration-500' 
        src={project1} alt=""/>
        {/*proj title */}
        <div className='absolute -bottom-full left-12 z-50
        transition-all duration-500 group-hover:bottom-24'>
        <span className='text-accent font-semibold'>UI/UX Design</span>
        </div>
        {/* title */}
         <div className='absolute -bottom-full left-12 z-50
        transition-all duration-700 group-hover:bottom-14'>
           <span className='text-2xl text-white font-bold'>Project Title</span>
         </div>
        </div>
        </a>
        <a href='https://github.com/K-Josh/Travel_Agency.git' className='hover:text-accent'>See Code</a>
           </motion.div>
          </> 
           }  
        
           
           </div>
        </div>
    </section>
  )
}

export default Projects;
