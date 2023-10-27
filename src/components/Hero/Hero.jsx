import React from "react";
import HeroItem from "./HeroItem";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import bgImg1 from "../../assets/images/bg-img-1.jpg";

function Hero() {
  const items = [
    {
      mainTitle:
        "We create solutions for your business, come grow your business online with us",
      subTitle:
        "Tempor maecenas. Scelerisque nonummy sodales fringilla, eros hac natoque faucibus. Nam dignissim eleifend. Tempor malesuada erat curabitur integer purus pulvinar nisi sit ",
      bgImg: bgImg1,
    },
    {
      mainTitle:
        "We are committed to building you products that are guaranteed to solve your business problems",
      subTitle:
        "Tempor maecenas. Scelerisque nonummy sodales fringilla, eros hac natoque faucibus. Nam dignissim eleifend. Tempor malesuada erat curabitur integer purus pulvinar nisi sit ",
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
    >
      {items.map((item, i) => (
        <SplideSlide>
          <HeroItem
            key={i}
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
