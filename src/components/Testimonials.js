import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'

const Testimonials = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
            filter: {ext: {regex: "/(jpg)|(png)|(jpeg)/"}, name: {in: ["testimonial-1", "testimonial-2"]}}
            ) {
            edges {
                node {
                childImageSharp {
                    gatsbyImageData
                }
                }
            }
            }
        }      
    `)
    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are Saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #3fffa8; font-size: 2rem; margin-bottom: 1rem;`}/>
                        <h3>Sean Michael</h3>
                        <p>"The greatest experiences of my life. We could have never found these gems if we had tried to plan it ourselves."</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`color: #f9b19b; font-size: 2rem; margin-bottom: 1rem;`}/>
                        <h3>Sara Kin</h3>
                        <p>"We had a wonderful time! We are still talking about how it truly was a trip of a lifetime"</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {data.allFile.edges.map((image, key) => {
                        return <TestimonialImg key={key} image={image.node.childImageSharp.gatsbyImageData} alt={`testimonial ${key}`} />
                    })}
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    background: #fcfcfc;
    color: #000;
    padding: 5rem calc((100vw - 1300px) / 2);
    height: 100%;
`
const TopLine = styled.div`
    color: #077bf1;
    font-size: 1rem;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
`

const Description = styled.div`
    text-align: start;
    padding-left: 2rem;
    margin-bottom: 4rem;
    font-size: clamp(1.5rem, 5vw, 2rem);
    font-weight: bold;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const ColumnOne = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3 {
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-style: italic;
    }

    p {
        color: #3b3b3b;
    }
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 2rem;
    grid-gap: 10px;

    @media screen and (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

const TestimonialImg = styled(GatsbyImage)`
    height: 100%;
    max-width: 100%;
    position: relative;
    border-radius: 10px;
    filter: brightness(70%);
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover{
        filter: brightness(100%);
    }
`

