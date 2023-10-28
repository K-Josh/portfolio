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
        <section className=" min-h-[85vh] lg:min-h-screen
        flex items-center" id="home">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row
                lg:items-center lg:gap-x-4 gap-y-7">
                {/* text */}
                <div className="flex-1 text-center
                    font-secondary lg:text-left">
              <motion.p 
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.7}}
               className="font-secondary text-center px-2 lg:text-left text-accent font-semibold">
               My Name is
             </motion.p>
             <motion.h1
             variants={fadeIn('up', 0.5)}
               initial="hidden"
              whileInView={'show'}
              viewport={{
                   once: false, 
                amount:0.7
              }}
            className='text-[40px] -mx-2 capitalize lg:text-[60px] font-semibold lg:leading-[0.9]' >
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
               className='mb-6 max-w-w text-[20px] lg:text-[30px]
                font-secondary px-2 font-semibold uppercase leading-[1.5]'>
            <span className="mr-1"> I am </span>
                <TypeAnimation 
                     sequence={[
                                'A Front-end Developer',
                                3000,
                                'A Front-end Developer',
                                3000,
                            ]}
                            speed={40}
                            className='text-accent'
                            repeat={Infinity}
                            wrapper='span'
                        />
             </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: false, amount:0.7}}
           className='mb-5 lg:w-[30rem] mx-auto lg:mx-0'> A Frontend-end Developer implementing UI/UX designs to the latter
            </motion.p>
              <motion.button
               variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={"show"}
                viewport={{once: false, amount: 0.7 }}
                className='btn btn-lg mb-9 items-center mx-auto lg:mx-0'
                >
                 <Link to="contact"
                  activeClass='active'
                  smooth={true}
                  spy={true}>Contact Me</Link>
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
                className='my-7 lg:flex flex-1 hidden'
                 >
                <img className='hover:scale-95 w-[25rem] h-[25rem] 
                rounded-full'  src={Image} alt='programming'/>
            </motion.div>
                </div>
            </div>
        </section>
    
  );
};

export default Banner;
