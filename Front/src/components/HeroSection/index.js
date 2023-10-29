import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,OtherDetails } from './HeroStyle'

import Typewriter from 'typewriter-effect';
import { Herosect } from '../../data/constants';

const containerStyle = {
    background: 'linear-gradient(45deg, rgba(0,212,255,1) 0%, rgba(10,3,45,1) 100%)',
    backgroundImage: 'url(https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh',
  };

  const containerWrapperStyle = {
    backdropFilter: 'blur(10px) saturate(180%)',
    WebkitBackdropFilter: 'blur(16px) saturate(180%)',
    backgroundColor: 'rgba(17, 25, 40, 0.25)',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    padding: '38px',
    filter: 'drop-shadow(0 30px 10px rgba(0,0,0,0.125)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const bannerImageStyle = {
    backgroundImage: 'url(https://i.pinimg.com/564x/a8/96/e7/a896e73429c7028d4dd5d0a5c53782ee.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '300px',
    width: '100%',
    borderRadius: '12px',
    border: '1px solid rgba(255, 255, 255, 0.255)',
  };

  

  const pStyle = {
    color: '#fff',
    fontFamily: "sans-serif",
    textAlign: 'center',
    fontSize: '0.8rem',
    lineHeight: '150%',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  };

const HeroSection = () => {
    return (
        <div id="Home">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Discover <br /> {Herosect.name}</Title>
                        <TextLoop>
                            ImoGen
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Herosect.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Herosect.description}</SubTitle>
                        <OtherDetails target='display' href='#Details'>Others</OtherDetails>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                    <div style={containerStyle}>
      <div style={containerWrapperStyle}>
        <div style={bannerImageStyle}></div>
     
        <p style={pStyle}>
        Transform your sentences,
          <br />
          to beautiful images.
        </p>
      
      </div>
    </div>




                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection