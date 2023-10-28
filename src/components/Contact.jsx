import { useRef } from 'react';
// email
import emailjs from '@emailjs/browser';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { useColorMode} from '@chakra-ui/react';

const Contact = () => {
  const {colorMode} = useColorMode()
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40s6lu6', 'template_cvimo5s', form.current, 'pwhHm6CK5t8X-N463')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return(
     <section className='py-16 lg:section' id='contact'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row'>
            {colorMode === 'dark' ?
              <>
                {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)} 
              initial='hidden'
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
              className='lg:flex-1 flex lg:justify-start items-center justify-center'>
              <div>
                <h4 className='text-2xl uppercase text-accent font-medium mb-2
                tracking-wide'>
                  Get in touch
                </h4>
                <h2 className='text-[30px] lg:text-[70px]  leading-none mb-12 text-white'>
                together we can
                </h2>

              </div>
            </motion.div>
            {/* form */}
            <motion.form 
             onSubmit={sendEmail}
              ref={form}
             variants={fadeIn("left", 0.3)} 
              initial='hidden'
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}            
             className="flex-1 border rounded-2xl flex flex-col gap-y-6
            lg:pb-19 lg:p-6 p-4 lg:pt-8 items-start">
              <input 
                type='text'
                placeholder='Your Name'
                name='user_name'
                className='bg-transparent border-b py-3 border-white/80 
                outline-none w-full placeholder:text-white focus:border-accent 
                transition-all'
              />
              <input 
                type='text'
                name='user_email'
                placeholder='Your Email'
                className='bg-transparent border-b py-3 border-white/80 
                outline-none w-full placeholder:text-white focus:border-accent 
                transition-all'
              />
               <input 
                type='text'
                name='subject'
                placeholder='Subject'
                className='bg-transparent border-b py-3 border-white/80 
                outline-none w-full placeholder:text-white focus:border-accent 
                transition-all'
              />
              <textarea 
                type='text'
                name='message'
                className='bg-transparent border-b py-4 lg:py-10 border-white/80 
                outline-none w-full placeholder:text-white focus:border-accent
                resize-none lg:mb-12 mb-5 transition-all'
                placeholder='Your message'             
              ></textarea>
              <button className='btn btn-lg'>Let&apos;s Work</button>
            </motion.form>
              </>
              :
              <>
                {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)} 
              initial='hidden'
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}
              className='lg:flex-1 flex lg:justify-start items-center justify-center'>
                <div>
                <h4 className='text-2xl uppercase text-accent font-medium mb-2
                tracking-wide'>
                  Get in touch
                </h4>
                <h2 className='text-[30px] lg:text-[70px]  leading-none mb-12 text-black'>
                together we can
                </h2>
                </div>
            </motion.div>
            {/* form */}
            <motion.form 
             onSubmit={sendEmail}
              ref={form}
             variants={fadeIn("left", 0.3)} 
              initial='hidden'
              whileInView={"show"}
              viewport={{once: false, amount: 0.3}}            
             className="flex-1 border-2 rounded-2xl flex flex-col gap-y-6
            lg:pb-19 lg:p-6 p-4 lg:pt-8 items-start">
              <input 
                type='text'
                placeholder='Your Name'
                name='user_name'
                className='bg-transparent border-b py-3 border-gray-600 
                outline-none w-full placeholder:text-black/80 focus:border-accent 
                transition-all'
              />
              <input 
                type='text'
                name='user_email'
                placeholder='Your Email'
                className='bg-transparent border-b py-3 border-gray-600 
                outline-none w-full placeholder:text-black/80 focus:border-accent 
                transition-all'
              />
               <input 
                type='text'
                name='subject'
                placeholder='Subject'
                className='bg-transparent border-b py-3 border-gray-600 outline-none w-full placeholder:text-black/80 focus:border-accent 
                transition-all'
              />
              <textarea 
                type='text'
                name='message'
                className='bg-transparent border-b py-4 lg:py-10 border-gray-600 outline-none w-full placeholder:text-black/80 focus:border-accent
                resize-none lg:mb-12 mb-5 transition-all'
                placeholder='Your message'             
              ></textarea>
              <button className='btn btn-lg'>Let&apos;s Work</button>
            </motion.form>
              </>
            }
          </div>
        </div>
     </section>);
};

export default Contact;
