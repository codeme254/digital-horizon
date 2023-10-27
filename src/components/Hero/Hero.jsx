import React from "react";
import HeroItem from "./HeroItem";

function Hero() {
  const items = [
    {
      mainTitle:
        "We create solutions for your business, come grow your business online with us",
      subTitle:
        "Tempor maecenas. Scelerisque nonummy sodales fringilla, eros hac natoque faucibus. Nam dignissim eleifend. Tempor malesuada erat curabitur integer purus pulvinar nisi sit ",
    },
  ];
  return (
    <div>
      {items.map((item, i) => (
        <HeroItem key={i} mainTitle={item.mainTitle} subTitle={item.subTitle} />
      ))}
    </div>
  );
}

export default Hero;
