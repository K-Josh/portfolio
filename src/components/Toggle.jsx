import { Button, useColorMode,} from '@chakra-ui/react'
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs'

const Header = () => {
    const {colorMode, toggleColorMode} =useColorMode()
  return (
    <div className='relative'>
     {colorMode === 'dark' ? 
     <Button m='1rem' position={'absolute'}
      bottom={{base:'36rem', md: '2rem'}} cursor={'pointer'}
      pos={'fixed'} onClick={()=> toggleColorMode()}
     >
     {colorMode === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill /> }
     </Button>
      :
      <Button m='1rem' position={'absolute'}
      bottom={{base:'36rem', md: '2rem'}} cursor={'pointer'} 
      pos={'fixed'} onClick={()=> toggleColorMode()} bg={'gray.200'}
       >
     {colorMode === 'dark' ? <BsFillSunFill /> : <BsFillMoonStarsFill className='text-accent'/> }
     </Button>
     }
    </div>
  )
}

export default Header