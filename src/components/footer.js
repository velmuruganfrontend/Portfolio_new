import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'


const Footer = styled.section`
background: rgb(250, 250, 250);
border-top: 1px solid rgb(242, 242, 242);
padding: 50px;
  ${tw`text-center mt-20`}
  svg{color: rgb(255, 92, 87);}
`  


const FooterComponent = () => {
    return(
           <Footer> 
                <p>© 2019 This Velmurugan</p>
                <small>Handmade with <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"  height="1em" width="1em"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></small>
            </Footer> 
    )
}

export default FooterComponent