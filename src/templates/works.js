import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import {graphql} from 'gatsby'

export const query = graphql`
    query($slug : String!){
        markdownRemark(fields:{slug:{eq: $slug}}){
        frontmatter{
            title
            date
        }
        html
        }
    }
`


const Main = styled.main`
width:1024px;
${tw`pt-20 m-auto px-6`} 
`

const Project = (props) => { 
    return(
        <Layout>
             <Main> 
             <h1>{props.data.markdownRemark.frontmatter.title}</h1>
             <small>{ props.data.markdownRemark.frontmatter.date }</small> 
             <div dangerouslySetInnerHTML = {{ __html: props.data.markdownRemark.html }}></div>
              </Main> 
        </Layout>
    )
} 

export default Project 