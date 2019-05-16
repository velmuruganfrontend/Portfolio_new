import React from 'react'
import HeaderComponent from './header'
import FooterComponent from './footer'
import './layout.css'

const Layout = (props) => {
    return(
        <div>
            <HeaderComponent />
              {props.children} 
            <FooterComponent />
        </div>
    )
}

export default Layout