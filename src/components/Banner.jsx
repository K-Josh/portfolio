// image
import Image from '/Images/kid_programming.jpg';
import { FaGithub, FaWhatsapp, FaLinkedin, FaTwitter } from 'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { useColorMode } from '@chakra-ui/react';
import { Link } from 'react-scroll';


const Banner = () => {
  const {colorMode} = useColorMode()
  return (
        <section className=" h-[100vh] w-[100vw] lg:min-h-screen flex items-center" id="home">
            <div className="container max-w-[100vw]">
                <div className="flex flex-col lg:flex-row
                lg:items-center lg:gap-x-4 gap-y-7">
                {/* text */}
                <div className="flex-1 lg:ml-[5rem] text-center
                    font-secondary lg:text-left">
               {colorMode === 'dark' ? 
              <>
              <motion.p 
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
               className="font-secondary text-center px-2 lg:text-left text-accent font-semibold text-[1.5rem] lg:text-[2rem]">
               Hey <span className='text-white'>There <span className='animate-spin lg:text-2xl hover:animate-bounce text-[15px] cursor-pointer'>👋🏽</span></span> I am
              </motion.p>
              <motion.h1
             variants={fadeIn('up', 0.5)}
               initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount:0.7}}
            className='text-[3rem] lg:text-[8rem] -mx-2 capitalize font-semibold lg:leading-[0.9] text-white'>
             Gaping <span>josue</span> 
              </motion.h1>
              <motion.div 
                variants={fadeIn('up', 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                   viewport={{
                     once: false,
                     amount: 0.7
                        }}
               className='mb-6 max-w-w text-[12px] lg:text-[5rem]
                font-secondary px-2 font-semibold uppercase leading-[1.5]'>
                <TypeAnimation 
                  sequence={[
                    'A Front-end Developer',3000,
                    'AND',1000,
                    'A UI/UX Developer',3000,
                           ]}
                    speed={40} 
                    className='text-accent text-[2rem] lg:text-[4rem]'
                    repeat={Infinity} wrapper='span'
                        />
              </motion.div>
                <motion.p 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount:0.7}}
           className='mb-5 lg:w-[34vw] mx-auto lg:mx-0 text-white text-[2rem]'> A Frontend-end Developer implementing UI/UX designs to the latter
                </motion.p>
              </>
                :
                <>
                <motion.p 
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
               className="font-secondary text-center px-2 lg:text-left text-accent font-semibold text-[1.5rem] lg:text-[2rem]">
               Hey <span className='text-black'>There <span className='animate-spin lg:text-2xl hover:animate-bounce text-[15px] cursor-pointer'>👋🏽</span></span> I am
              </motion.p>
              <motion.h1
             variants={fadeIn('up', 0.5)}
               initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount:0.7}}
            className='text-[3rem] -mx-2 capitalize lg:text-[8rem] font-semibold lg:leading-[0.9]'>
             Gaping <span>josue</span> 
              </motion.h1>
                <motion.div 
                variants={fadeIn('up', 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                   viewport={{
                     once: false,
                     amount: 0.7
                        }}
               className='mb-6 max-w-w text-[12px] lg:text-[5rem]
                font-secondary px-2 font-semibold uppercase leading-[1.5]'>
                <TypeAnimation 
                  sequence={[
                    'A Front-end Developer',3000,
                    'AND',1000,
                    'A UI/UX Developer',3000,
                           ]}
                    speed={40} 
                    className='text-accent text-[2rem]'
                    repeat={Infinity} wrapper='span'
                        />
                </motion.div>
                <motion.p 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount:0.7}}
           className='mb-5 lg:w-[34vw] mx-auto lg:mx-0 text-[2rem]'> A Frontend-end Developer implementing UI/UX designs to the latter
                </motion.p>
                </>
               }
              <motion.button
               variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={"show"}
                viewport={{once: false, amount: 0.7 }}
                className='btn lg:btn-lg btn-sm mb-[2rem] items-center lg:mx-0'
                >
                 <Link to="contact"
                  activeClass='active'
                  smooth={true}
                  spy={true} className='text-[14px] whitespace-nowrap'>Contact Me</Link>
              </motion.button>
              {/* socials */}
               {colorMode === 'dark' ? 
               <motion.div
               variants={fadeIn("up", 0.7)}
               initial="hidden"
               whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='flex text-[20px] gap-x-6 justify-center text-accent max-w-max mx-auto lg:mx-0'>
                <a href='https://github.com/K-Josh'>
                <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/joshua-kemougne-a04850219'>
                <FaLinkedin />
                </a>
                <a href='https://wa.link/8e80bk'>
                <FaWhatsapp />
                </a>
                <a href='https://twitter.com/GapingJosue'>
                <FaTwitter />
                </a>
              </motion.div> 
              : 
              <motion.div
               variants={fadeIn("up", 0.7)}
               initial="hidden"
               whileInView={"show"}
                viewport={{ once: false,amount: 0.7 }}
                className='flex text-[20px] gap-x-6 justify-center max-w-max mx-auto text-[#B71375] lg:mx-0'>
                <a href='https://github.com/K-Josh'>
                <FaGithub />
                </a>
                <a href='https://www.linkedin.com/in/joshua-kemougne-a04850219'>
                <FaLinkedin />
                </a>
                <a href=''>
                <FaWhatsapp />
                </a>
                <a href='https://twitter.com/GapingJosue'>
                <FaTwitter />
                </a>
              </motion.div> 
              }
                </div>
                {/* image */}
            <motion.div
                variants={fadeIn('down', 0.5)}
                initial="hidden"
                whileInView={"show"}
                className='my-7 ml-[4rem] lg:flex flex-1 hidden'
                 >
                <img className='hover:scale-95 w-[30vw] h-[40rem] 
                rounded-xl animate-pulse transition-all ease-in-out duration-300'  src={Image} alt='programming'/>
            </motion.div>
                </div>
            </div>
        </section>
    
  );
};

export default Banner;
