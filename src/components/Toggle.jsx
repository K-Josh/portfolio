import { Button, useColorMode,} from '@chakra-ui/react'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

const Header = () => {
    const {colorMode, toggleColorMode} =useColorMode()
  return (
    <div className='relative'>
     {colorMode === 'dark' ? 
     <Button w={{base:'1rem',md:'4rem'}} h={{base:'1.5rem',md:'3rem'}}  m='1rem' position={'absolute'}
      bottom={{base:'96vh', md: '2rem'}} className='cursor-pinter'
      pos={'fixed'} onClick={()=> toggleColorMode()}
     >
     {colorMode === 'dark' ? <BsFillSunFill className='text-accent text-[1.3rem]'/> : <BsFillMoonStarsFill className='text-[1.3rem]'/> }
     </Button>
      :
      <Button  w={{base:'1rem',md:'4rem'}} h={{base:'1.5rem',md:'3rem'}} m='1rem' position={'absolute'}
      bottom={{base:'96vh', md: '2rem'}} className='navbar cursor-pointer'
      pos={'fixed'} onClick={()=> toggleColorMode()} 
       >
     {colorMode === 'dark' ? <BsFillSunFill className='text-[1.3rem]'/> : <BsFillMoonStarsFill className='text-accent'/> }
     </Button>
     }
    </div>
  )
}

export default Header