import React from "react";
import Main from "../components/body/main";
import Carousel from "../components/Carousel/Carousel";
import MustRead from "../components/body/MustRead";

function Home() {
  return (
    <div>
      <Carousel autoSlide={true} duration={10000} />
      <Main />
      <MustRead />
    </div>
  );
}

export default Home;
