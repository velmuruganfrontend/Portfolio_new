import React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Main = styled.div`
${tw`font-sans text-center  text-4xl`};
` 


const IndexPage = () => {
    return(
        <Layout>
            <Main>In this repository combination of Gatsby.js + Styled component + tailwind css</Main>   
        </Layout>
    )
}

export default IndexPage
