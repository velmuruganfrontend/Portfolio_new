import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/layout'


const Main = styled.main`
width:1024px;
${tw`pt-20 m-auto px-6`} 
`
const WorkHeading = styled.div`
${tw`text-center`}  
h2{
    ${tw`text-2xl my-4 font-normal`}
}
`


const works = () => {
    return(
        <Layout>
           <Main>
              <WorkHeading>
                 <h2>My Work</h2> 
                 <p>A collection of different things I have worked on.</p>
             </WorkHeading>
           </Main>
        </Layout>
    )
}

export default works