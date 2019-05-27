import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import {graphql, Link} from 'gatsby'

export const query = graphql`
    query($slug : String!){
        markdownRemark(fields:{slug:{eq: $slug}}){
        frontmatter{
            title
            date
            description
            full
        }
        html
        }
    }
`


const Main = styled.main`
width:1024px;
${tw`pt-20 m-auto px-6`} 
`
const Grid = styled.div`
${tw`flex`} 
`
const Eight = styled.div`
${tw`w-3/5`}  
`
const Four = styled.div`
${tw`w-2/5`} 
`
const NextProject = styled.div`
${tw``}  
`


const Project = (props) => { 
    console.log(props)
    return(
        <Layout>
            <Main> 
                <NextProject>
                   
                </NextProject>
                <Grid>
                    <Eight>
                      <h1>{props.data.markdownRemark.frontmatter.title} h</h1>
                    </Eight>
                    <Four> 
                       <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                    </Four>
                </Grid>
            </Main> 
        </Layout>
    )
} 

export default Project 