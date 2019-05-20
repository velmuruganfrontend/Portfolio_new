import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'


const Main = styled.main`
width:1024px;
@media (max-width: 1024px) {
    width:95%
}
${tw`pt-20 m-auto px-6`} 
`
const WorkHeading = styled.div`
${tw`text-center`}  
h2{
    ${tw`text-2xl my-4 font-normal`}
}
`
const ProjectList = styled.div`
${tw`my-10 mb-0`}
`
const Projectseprate = styled.ul`
${tw`flex flex-wrap`}
@media (max-width: 768px) {
    display:block
}
li{
    flex: 0 0 50%;
    margin-bottom: 20px;
    position: relative;
    a{
        display:block;
        padding: 15px 20px;
    }
    &:nth-last-child(-n+2){margin-bottom:0px}
}
`
const Grid = styled.div`
${tw`flex`}
small{
    position: absolute;
    background-color: rgb(77, 77, 77);
    bottom: -22px;
    right: 0px;
    color: white;
    line-height: 1.4; 
    opacity: 0;
    will-change: bottom, opacity;
    z-index: 1;
    transition-property: bottom, opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    padding: 2px 6px;
    &:before{
        position: absolute;
        left: -22px;
        top: -22px;
        content: "";
        z-index: -1;
        border-width: 22px;
        border-style: solid;
        border-color: transparent transparent rgb(77, 77, 77);
        border-image: initial;
        border-bottom: 22px solid rgb(77, 77, 77);
    }
} 
&:hover small{
    position: absolute;
    background-color: rgb(77, 77, 77);
    bottom: 0px;
    right: 0px;
    color: white;
    line-height: 1.4; 
    opacity: 1;
    will-change: bottom, opacity;
    z-index: 1;
    transition-property: bottom, opacity;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
    padding: 2px 6px; 
} 
`
const Left = styled.div`
flex: 0 0 30%;
${tw``} 
`
const Right = styled.div`
flex: 0 0 70%;
${tw`pl-4`}
h2{color: rgb(51, 51, 51);font-weight:400}
span{color:red} 
`

const works = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                            description
                        } 
                        fields{
                            slug
                        }
                        html 
                    }
                }
            }
        }
    `)
    return(
        <Layout>
           <Main> 
                <WorkHeading>
                    <h2>My Work</h2> 
                    <p>A collection of different things I have worked on.</p>
                </WorkHeading>
                <ProjectList>
                  <Projectseprate>
                      {data.allMarkdownRemark.edges.map((edge) => {
                          return(
                              <li key = {edge.node.frontmatter.title}>
                                 <Link to={`/works/${edge.node.fields.slug}`}> 
                                   <Grid>
                                        <Left>
                                          <div dangerouslySetInnerHTML = {{ __html: edge.node.html }}></div> 
                                        </Left>
                                        <Right>
                                            <h2>{edge.node.frontmatter.title}</h2>
                                            <span>{edge.node.frontmatter.date}</span>
                                            <p>{edge.node.frontmatter.description}</p>
                                        </Right>
                                        <small>Read More</small>
                                    </Grid>
                                  </Link>
                              </li>
                          )
                      })}
                  </Projectseprate>
               </ProjectList>
           </Main>
        </Layout>
    )
}

export default works