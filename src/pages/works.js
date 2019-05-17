import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/layout'
import {Link, graphql, useStaticQuery} from 'gatsby'


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
const ProjectList = styled.div`
${tw`my-10 mb-0`}
`
const Projectseprate = styled.ul`
${tw`flex flex-wrap`}
li{
    flex: 0 0 50%;
    margin-bottom: 50px;
}
`
const Grid = styled.div`
${tw`flex`}  
`
const Left = styled.div`
width:144px;
${`tw bg-black`}
img{
    width:144px 
    height:144px
} 
`
const Right = styled.div`
flex: 0 0 80%
${tw``} 
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