import React from "react";
import HeroSlider from "../../components/home/BannerSlider";
import BrandSlider from "../../components/home/BrandSlider";
import ExploreDeals from "../../components/home/ExploreDeals"

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* HERO SLIDER */}
      <div className="">
        <HeroSlider />
      </div>

      {/* BRAND SLIDER */}
      <div className="mt-10 px-2">
        <BrandSlider />
      </div>
    {/* Explore Deals */}
      <div className="w-full">
        <ExploreDeals />
      </div>

    </div>
  );
}
