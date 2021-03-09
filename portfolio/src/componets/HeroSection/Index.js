import React,{useState} from 'react'
import { HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg,ArrowForward,ArrowRight } from './HeroElements'
import video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'


const HeroSection = () => {
    const [hover,setHover] = useState(false)


    const onHover = ()  => {
        setHover(!hover)
    }


    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Ravyar</HeroH1>
                <HeroP>React Developer</HeroP>
                <HeroBtnWrapper>
                    <Button primary="true" dark='true' to="newsletter" onMouseEnter={onHover} onMouseLeave={onHover}>
                        Contact {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
