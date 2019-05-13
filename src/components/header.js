import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'


const Header = styled.div`
${tw`font-sans bg-blue hover:bg-blue-dark text-white p-2 rounded`};
` 
const Heading = styled.div`
${tw`text-center text-2xl`};
`


const HeaderComponent = () => {
    return(
        <Header>
           <Heading> Header</Heading>
        </Header>
    )
}

export default HeaderComponent