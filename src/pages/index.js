import React from "react"
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Layout from '../components/layout'
import UserImg from '../images/velmurugan.jpg'

const Main = styled.main`
width:1024px;
@media (max-width: 1024px) {
    width:100%;
    padding-left: 0px;
    padding-right: 0px;
}
${tw`pt-20 m-auto px-6`} 
`
const HomePage = styled.section`
width:640px;
 ${tw`text-center m-auto`}
`
const UserImage = styled.div`
img{{
    ${tw`rounded-full shadow-md p-1 bg-white`}
}}    
`
const UserName = styled.h2`
  ${tw`text-2xl my-4 font-normal`}
`
const Skill = styled.ul`
${tw`flex items-center justify-center my-4 mt-0 `}
li{{margin: 0 6px;padding: 4px 10px;background-color: rgba(87,199,255,0.1);border-right: 2px solid rgba(87,199,255,0.3);border-left: 2px solid rgba(87,199,255,0.3);font-size: 15px;color: rgba(0, 0, 0, 0.7);
  ${tw`bg-indigo-200`}
}}
`
const Intro = styled.p`
::after{content: "◦";position: absolute;left: 50%;transform: translate(-50%);bottom: -26.4px;color: rgb(204, 204, 204);}
${tw`relative`}
margin: 0px auto 26.4px;
`
const SocialLinks = styled.ul`
${tw`flex items-center justify-center`}
li{margin: 0 10px;}
svg{font-size:24px;color: #333333}
`

const IndexPage = () => {
    return(
        <Layout>
            <Main>
               <HomePage>
                   <UserImage><img src={UserImg} alt="velmurugan" /></UserImage> 
                   <UserName>Velmurugan.M</UserName> 
                    <Skill>
                        <li>software engineer</li>
                        <li>front-end developer</li> 
                    </Skill>
                   <Intro>I design applications, interactive systems and websites. I love using technology in creative contexts.</Intro>
                   <Intro>I am a freelancer based in chennai, India.</Intro>
                   <Intro>Contact me at velmurugan.mg@outlook.com</Intro> 
                   <SocialLinks> 
                       <li><a href="https://github.com/velmuruganfrontend/" target="_blank"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="1em" width="1em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a></li>
                       <li><a href="https://www.linkedin.com/in/velmurugan346/" target="_blank"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em"><path d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg></a></li>
                       <li><a href="https://twitter.com/velmuru78349521/" target="_blank" ><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg></a></li>
                   </SocialLinks>
               </HomePage>
            </Main>
        </Layout>
    )
}

export default IndexPage
