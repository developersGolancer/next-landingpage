import React from "react";
import AboutHeader from "../components/about-header";
import TrustFuture from "../components/trust-future";
import WhoWeAre from "../components/who-we-are";
import WhyGolancer from "../components/why-go-lancer";
import WorkWith from "../components/work-with";

function AboutUs() {
  return (
    <div>
      <AboutHeader />
      <WhoWeAre />
      <WhyGolancer />
      <TrustFuture />
      <WorkWith />
    </div>
  );
}

export default AboutUs;
