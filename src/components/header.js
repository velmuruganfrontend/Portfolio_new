import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import headerStyle from './header.module.css'

const FullContainer = styled.div`
background-color:rgb(250, 250, 250);
border-bottom: 1px solid rgb(242, 242, 242);
height: 60px;
line-height: 60px;
${tw`fixed w-full z-10`}
`
const Header = styled.div`
width:1024px;
@media (max-width: 1024px) {
    width:95%; 
    padding: 0px;
}
${tw`bg-gray-700 flex items-center justify-between border-b-2 border-gray m-auto py-0 px-6`} 
`
const Logo = styled.div`
::after{content: "◦◦◦";margin-left:6px}
${tw`bg-black-100 flex items-center justify-between border-b-2 border-gray uppercase text-black`}   
`
const Nav = styled.nav`
${tw`bg-gray-700 flex items-center justify-between border-b-2 border-gray`} 
` 
const NavMenu = styled.div`
list-style-type: none;
${tw `inline-block uppercase`}
a{
    margin-left:20px;
    font-size:14px
}
`

const HeaderComponent = () => {
    return(
        <FullContainer>
            <Header>
               <Link to="/"><Logo>Freshlab</Logo></Link>  
                <Nav>
                    <NavMenu>
                        <Link to="/" className = {headerStyle.navItem} activeClassName = {headerStyle.activeNavItem} >Home</Link>
                        <Link to="/works" className = {headerStyle.navItem} activeClassName = {headerStyle.activeNavItem} >Work</Link> 
                        <Link to="/blog" className = {headerStyle.navItem} activeClassName = {headerStyle.activeNavItem} >Blog</Link>
                    </NavMenu>
                </Nav>
          </Header>
        </FullContainer>
    )
}

export default HeaderComponent