import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const styles={
  global:(props)=>({
    body:{
      color:mode('gray.800', 'whiteAlpha.600')(props),
      bg:mode('gray.100', '#101010')(props),
    }
  })
};

const config = {
  initialColorMode: "dark",
  useSystemColor: "true",
}

const colors={
  gray:{
    light:'#fff',
    dark:'#1e1e1e',
  },
  orange:{
    orange:'#FA7436'
  }
}
const theme = extendTheme({config, colors, styles})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
    </ChakraProvider>
   </BrowserRouter>
  </React.StrictMode>,
)
