import React from 'react'
import SplashImageStyle from './SplashImageStyle'
import Image from '../../atoms/Image/Image'

import Truck from '../../../assets/images/truck.svg'
import LogoText from '../../../assets/images/logo-text.svg'

const SplashImage = () => {
  return (
   <SplashImageStyle>
    <Image image={Truck} alt={"truck"}/>
    <Image image={LogoText} alt="truckcycle"/>
   </SplashImageStyle>
  )
}

export default SplashImage