
// import icons
import { useColorMode } from '@chakra-ui/react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase, BsChatSquare } from 'react-icons/bs'; 
// link
import { Link } from 'react-scroll';

const Nav = () => {
  const {colorMode} = useColorMode()
  return (
    <nav className="fixed bottom-2 lg-bottom-7 w-full overflow-hidden z-40" >
        <div className="container mx-auto">
            {/* nav inner */}
             {colorMode === 'dark' ? 
             <div className='w-full rounded-full opacity-70 max-w-[370px] px-5 flex items-center text-xl mx-auto
            h-[6rem] backdrop-blur-2xl border border-1 justify-between text-[#FA7436]'>
              <Link 
                  to="home"
                  offset={-200}
                  activeClass='glass'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[50px] justify-center items-center'
              >
                <BiHomeAlt className='text-[1.6rem]'/>
              </Link>

              <Link 
                  to="about"
                  activeClass='glass'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[50px] justify-center items-center'
              >
                <BiUser className='text-[1.6rem]'/>
              </Link>

              <Link 
                  to="projects"
                  activeClass='glass'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[50px] justify-center items-center'
              >
                <BsBriefcase className='text-[1.6rem]'/>
              </Link>

              <Link 
                  to="contact"
                  activeClass='glass'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[50px] justify-center items-center'
              >
                <BsChatSquare className='text-[1.6rem]'/>
              </Link>
            </div>
              : 
              <div className='w-full navbar rounded-full
            max-w-[370px] px-5 flex items-center text-xl mx-auto
            h-[6rem] backdrop-blur-2xl justify-between'>
              <Link 
                  to="home"
                  offset={-200}
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[50px] justify-center items-center'
              >
                <BiHomeAlt className='text-[1.6rem]'/>
              </Link>

              <Link 
                  to="about"
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[50px] justify-center items-center'
              >
                <BiUser className='text-[1.6rem]'/>
              </Link>

              <Link 
                  to="projects"
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[50px] justify-center items-center'
              >
                <BsBriefcase className='text-[1.6rem]'/>
              </Link>

              <Link 
                  to="contact"
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[50px] justify-center items-center'
              >
                <BsChatSquare className='text-[1.6rem]'/>
              </Link>
             </div>
              }
            
        </div>
    </nav>
  );
};

export default Nav;
