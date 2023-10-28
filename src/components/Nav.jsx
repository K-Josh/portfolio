
// import icons
import { useColorMode } from '@chakra-ui/react';
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsBriefcase, BsChatSquare } from 'react-icons/bs'; 
// link
import { Link } from 'react-scroll';

const Nav = () => {
  const {colorMode} = useColorMode()
  return (
    <nav className="fixed bottom-2 lg-bottom-8 w-full overflow-hidden z-40" >
        <div className="container mx-auto">
            {/* nav inner */}
             {colorMode === 'dark' ? 
             <div className='w-full bg-gradient-to-r from-[#B71375] via-[#8B1874] to-[#F86F03] rounded-full
            max-w-[370px] px-5 flex items-center text-xl mx-auto
            h-[4rem] backdrop-blur-2xl justify-between text-white'>
              <Link 
                  to="home"
                  offset={-200}
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[60px] justify-center items-center'
              >
                <BiHomeAlt />
              </Link>

              <Link 
                  to="about"
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[60px] justify-center items-center'
              >
                <BiUser />
              </Link>

              <Link 
                  to="projects"
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[60px] justify-center items-center'
              >
                <BsBriefcase />
              </Link>

              <Link 
                  to="contact"
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[60px] justify-center items-center'
              >
                <BsChatSquare />
              </Link>
            </div>
              : 
              <div className='w-full bg-gradient-to-tr from-[#8B1874] via-[#B71375] to-[#F86F03] rounded-full
            max-w-[370px] px-5 flex items-center text-xl mx-auto
            h-[4rem] backdrop-blur-2xl justify-between text-white/75'>
              <Link 
                  to="home"
                  offset={-200}
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[60px] justify-center items-center'
              >
                <BiHomeAlt />
              </Link>

              <Link 
                  to="about"
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[60px] justify-center items-center'
              >
                <BiUser />
              </Link>

              <Link 
                  to="projects"
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[60px] justify-center items-center'
              >
                <BsBriefcase />
              </Link>

              <Link 
                  to="contact"
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  className='flex cursor-pointer w-[60px] justify-center items-center'
              >
                <BsChatSquare />
              </Link>
             </div>
              }
            
        </div>
    </nav>
  );
};

export default Nav;
