import React from "react";
import HeroItem from "./HeroItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
// https://splidejs.com/integration/react-splide/

import bgImg1 from "../../assets/images/bg-img-1.jpg";
import bgImg2 from '../../assets/images/laptop.jpg'
import bgImg3 from '../../assets/images/laptop-2.jpg'
import bgImg4 from '../../assets/images/seo.jpg'
import bgImg5 from '../../assets/images/coding.jpg'

function Hero() {
  const items = [
    {
      mainTitle: "Empowering Your Business Through Innovative Solutions",
      subTitle:
        "Transforming challenges into opportunities. Explore our cutting-edge tech solutions for scalable growth and optimized performance.",
      bgImg: bgImg1,
    },
    {
      mainTitle: "Crafting Tailored Tech Solutions for Your Success",
      subTitle:
        "Our expertise lies in understanding your unique needs. Let us design and develop solutions that elevate your business goals",
        bgImg: bgImg2,
    },
    {
      mainTitle: "Driving Business Evolution with Advanced Digital Strategies",
      subTitle:
        "From concept to implementation, we drive innovation. Discover how our tech prowess enhances your business landscape.",
        bgImg: bgImg3,
    },
    {
      mainTitle: "Pioneering Solutions for Your Business Challenges",
      subTitle:
        "Facing hurdles? We engineer solutions. Experience our expertise in resolving complex tech challenges.",
        bgImg: bgImg4,
    },
    {
      mainTitle: "Building Bridges Between Business and Technology",
      subTitle:
        "Bridging the gap between innovation and your business. Empowering growth through tech synergy.",
        bgImg: bgImg5,
    },
  ];
  return (
    <Splide
      tag="section"
      options={{
        rewind: true,
        autoplay: true,
        // interval: 4000,
      }}
      id="home"
    >
      {items.map((item, i) => (
        <SplideSlide key={i}>
          <HeroItem
            mainTitle={item.mainTitle}
            subTitle={item.subTitle}
            bgImg={item.bgImg}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Hero;
