import React from 'react';
// motion
import { motion } from 'framer-motion';
// images
import {Avatar, Box, Button, Popover, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Portal, Text, VStack, useColorMode} from '@chakra-ui/react';
// variants
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const About = () => {
   const {colorMode} = useColorMode();
   const initRef = React.useRef();
  return (
    <section className="section" id='about'>
        <div className="container mx-auto">
        
           <VStack position={'relative'}>
            {colorMode === 'dark' ? 
            <motion.div 
               variants={fadeIn("right", 0.5)}
               initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
               >
              <Box >
              {/* text */}
              <Box color={'whiteAlpha.900'} rounded={'md'} mt={{base:'2rem'}} p={2}> 
               <Box>
             <h2 className='h2 text-accent text-center mb-2 font-bold'>About me</h2>
            
             <Text fontFamily={'sans-serif'} mt={{md:2}} fontSize={{base:'15px', md:'20px'}} p={{base:0.8}} w={{base:'20rem',md:'46rem'}}  className='mb-4 font-secondary '>
             My name is Joshua a passionate Front-end developer with amazing Potentials and 
             <Popover closeOnBlur={false} placement='bottom' initialFocusRef={initRef}>
            {({ isOpen, onClose }) => (
         <>
          <PopoverTrigger>
            <Button rounded={'full'} mx={2} w={{md:'3.6rem'}} h={{md:'2rem'}} className='animate-bounce'>
            <span className='inline-block capitalize text-gradient '>
              <Text className='cursor-pointer'> skills .</Text>
              </span> {isOpen ? '' : ''}
              </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent bg={'black'}>
              <PopoverHeader>My Stack</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                  <Text fontSize={{base:'13px', md:'16px'}}>
                  HTML5, CSS, TailwindCSS, Bootstrap,  
                  ChakraUI, Javascript, Reactjs
                  </Text>
                </Box>
                <Button
                  mt={4}
                  bg='orange.500'
                  onClick={onClose}
                  ref={initRef}
                >
                  Close
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
            </Popover>
             I&apos;m from a city called Yaounde which is the capital of Cameroon. I&apos;m a college student studying for my degree in Chemistry. I&apos;m a hardworking and dedicated person who puts forth my best effort in everything I do. I&apos;m always looking for ways to improve my skills and knowledge and always open to learning new things. I love team work because we accomplish more together. I&apos;m also very passionate about music and basketball. I&apos;m a strong believer in helping out in my community and I&apos;m always looking for ways to give back. I love positivity and i love making people smile or laugh. I&apos;m excited to be able to use my skills and knowledge to make a difference in the world.
            </Text>

            <div
             className='font-primary flex gap-x-6  items-center'>
            <Link to="contact"
                  activeClass='active'
                  smooth={true}
                  spy={true}> <button className='btn btn-sm'>Contact me</button></Link>
            <a href="#" className='text-gradient text-[16px] btn-Link'>My Resume</a>
            </div>
            </Box>
              </Box>
                  {/* Image */}
                  <motion.div 
                 variants={fadeIn("left", 0.6)}
                 initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.3}}
                className='absolute transition-all ease-out duration-700 top-[18rem] left-[64rem]'
               >
              <Box className='transition-all ease-in-out duration-500'>
              <Avatar
              cursor={'pointer'}
              w={{base:'', md:'8rem'}}
              h={{base:'', md:'8rem'}}
             src='/Images/Jo.jpg' 
             alt="" />
                </Box>
               </motion.div>
             </Box>

            </motion.div>
             :
             <motion.div 
               variants={fadeIn("right", 0.5)}
               initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
               >
              <Box >
              {/* text */}
              <Box color={'black'} rounded={'md'} mt={{base:'2rem'}} p={2}> 
               <Box>
             <h2 className='h2 font-secondary text-accent lg:text-center mb-2 font-bold'>About me</h2>  
             <Text mt={{md:2}} fontSize={{base:'15px', md:'20px'}} w={{base:'20rem', md:'46rem'}}  className='mb-4 font-secondary '>
             My name is Joshua a passionate Front-end developer with amazing Potentials and 
             <Popover closeOnBlur={false} placement='bottom' initialFocusRef={initRef}>
            {({ isOpen, onClose }) => (
         <>
          <PopoverTrigger>
            <Button rounded={'full'} mx={2} w={{md:'3.6rem'}} h={{md:'2rem'}} className='animate-bounce'>
            <span className='inline-block capitalize text-gradient '>
              <Text className='cursor-pointer'> skills .</Text>
              </span> {isOpen ? '' : ''}
              </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverHeader>My Stack</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Box>
                  <Text fontSize={{base:'13px', md:'16px'}}>
                  HTML5, CSS, TailwindCSS, Bootstrap,  
                  ChakraUI, Javascript, Reactjs
                  </Text>
                </Box>
                <Button
                  mt={4}
                  bg='orange.500'
                  onClick={onClose}
                  ref={initRef}
                >
                  Close
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
            </Popover> I&apos;m from a city called Yaounde which is the capital of Cameroon. I&apos;m a college student studying for my degree in Chemistry. I&apos;m a hardworking and dedicated person who puts forth my best effort in everything I do. I&apos;m always looking for ways to improve my skills and knowledge and always open to learning new things. I love team work because we accomplish more together. I&apos;m also very passionate about music and basketball. I&apos;m a strong believer in helping out in my community and I&apos;m always looking for ways to give back. I love positivity and i love making people smile or laugh. I&apos;m excited to be able to use my skills and knowledge to make a difference in the world.
            </Text>

            <div
             className='font-primary flex gap-x-6  items-center'>
            <button className='btn btn-sm'>Contact me</button>
            <a href="#" className='text-gradient text-[16px] btn-Link'>My Resume</a>
            </div>
            </Box>
              </Box>
                  {/* Image */}
               <motion.div 
               variants={fadeIn("left", 0.6)}
               initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
              className='absolute transition-all ease-out duration-700 top-[18rem] left-[64rem]'
               >
              <Box className='transition-all ease-in-out duration-500'>
              <Avatar
              cursor={'pointer'}
              w={{base:'', md:'8rem'}}
              h={{base:'', md:'8rem'}}
             src='/Images/Jo.jpg' 
             alt="" />
                </Box>
               </motion.div>
             </Box>
            </motion.div>
             } 
            </VStack>
          
         </div>     
    </section>
  );
};

export default About;
