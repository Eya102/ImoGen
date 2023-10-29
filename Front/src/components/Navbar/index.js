import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems , ButtonContainer, GenerateImage } from './NavbarStyledComponent'
import LogoImg from '../../images/photocube.PNG'

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
           <img src={LogoImg} /> <Span>ImoGen</Span>
          </a>
        </NavLogo>
        
        <NavItems>
        <NavLink href="#Home">Home</NavLink>
          <NavLink href='#Details'>About</NavLink>
          <NavLink href='#Services'>Services</NavLink>
        </NavItems>
        <ButtonContainer>
          <GenerateImage href='#Generator'>Create Images</GenerateImage>
        </ButtonContainer>
       
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar