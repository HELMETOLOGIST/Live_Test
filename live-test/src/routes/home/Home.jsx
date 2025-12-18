import React from "react";
import HeroSlider from "../../components/home/BannerSlider";
import BrandSlider from "../../components/home/BrandSlider";
import ExploreDeals from "../../components/home/ExploreDeals";
import Testimonials from "../../components/home/Testimonials";
import Gallery from "../../components/home/Gallery";
import Blog from "../../components/home/Blog";
import RecentlyViewed from "../../components/home/RecentlyViewed";


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

      {/* EXPLORE DEALS */}
      <div className="w-full">
        <ExploreDeals />
      </div>

      {/* TESTIMONIALS & AWARDS */}
      <div className="w-full">
        <Testimonials />
      </div>

      {/* GALLERY */}
      <div className="w-full">
        <Gallery />
      </div>

      {/* Recently Viewed */}
      <div className="w-full">
        <RecentlyViewed />
      </div>

      {/* BLOG */}
      <div className="w-full">
        <Blog />
      </div>


    </div>
  );
}