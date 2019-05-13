import React from 'react'
import HeaderComponent from './header'
import FooterComponent from './footer'

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