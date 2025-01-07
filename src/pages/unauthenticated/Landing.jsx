import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../component/layouts/MainLayout";
import FeaturesCard from "../../component/cards/FeaturesCard";
import CountriesCard from "../../component/cards/CountriesCard";

// countries imports
import nigeria from "../../assets/images/nigeria.png";
import swizerland from "../../assets/images/swizerland.png";
import london from "../../assets/images/london.png";
import italy from "../../assets/images/italy.png";
import china from "../../assets/images/china.png";
import uae from "../../assets/images/uae.png";

export default function Landing() {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center bg-[#F5F5F7]">
        <div className="hero-bg min-h-[100vh] w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center max-w-[600px] md:min-w-[900px] text-black relative">
            <h1 className="text-4xl text-center md:text-5xl max-w-[600px] lg:text-7xl font-semibold">
              Relocate smarter, live better.
            </h1>
            <p className="text-center my-8 text-md md:text-md max-w-[600px] px-10 line-clamp-2">
              Your AI-powered platform for seamless relocation, legal guidance,
              and global living.
            </p>
            <button
              className="bg-[#fca311] text-black py-2 px-8 rounded-xl text-lg font-medium"
              onClick={handleStartNow}
            >
              Get Started
            </button>
            <div className="absolute bg-white rounded-3xl flex items-center justify-start p-2 pr-3 shadow-md  space-x-2 top-10 left-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png"
                className="w-7 h-7 rounded-full"
                alt="logo"
              />
              <span>Canada</span>
            </div>
            <div className="absolute bg-white rounded-3xl flex items-center justify-start p-2 pr-3 shadow-md  space-x-2 top-[-15px] right-0">
              <img
                src="https://cdn.britannica.com/97/897-050-0BFECDA5/Flag-Germany.jpg"
                className="w-7 h-7 rounded-full"
                alt="logo"
              />
              <span>Germany</span>
            </div>
            <div className="absolute bg-white rounded-3xl flex items-center justify-start p-2 pr-3 shadow-md  space-x-2 bottom-0 left-14">
              <img
                src="https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg"
                className="w-7 h-7 rounded-full"
                alt="logo"
              />
              <span>France</span>
            </div>
            <div className="absolute bg-white rounded-3xl flex items-center justify-start p-2 pr-3 shadow-md  space-x-2 bottom-0 right-14">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg"
                className="w-7 h-7 rounded-full"
                alt="logo"
              />
              <span>Australia</span>
            </div>
          </div>
        </div>
        <h2 className="text-4xl my-4 font-medium">Features</h2>
        <div className="flex items-center gap-3 justify-evenly flex-wrap  py-20 w-[90%]">
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
        </div>
        <h2 className="text-4xl font-medium mt-20">Popular countries</h2>
        <p className="mt-4 text-center">
          Explore popular destinations and start planning your relocation
        </p>
        <div className="flex items-center justify-evenly flex-wrap gap-y-10  py-20 w-[90%]">
          <CountriesCard
            image={swizerland}
            location="Zürich, Switzerland"
            countryImage="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/1200px-Flag_of_Switzerland_%28Pantone%29.svg.png"
          />
          <CountriesCard
            image={london}
            location="London, UK"
            countryImage="https://t4.ftcdn.net/jpg/08/32/02/87/360_F_832028757_4YU1BrvVBRUNJX7WvLf5g4Qm5xrjOBo6.jpg"
          />
          <CountriesCard
            image={china}
            location="Beijing, China"
            countryImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-FLVbYtX7A6P_Zjkt5pp0DafB3gXraLsNQ&s"
          />
          <CountriesCard
            image={italy}
            location="Milan, Italy"
            countryImage="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/220px-Flag_of_Italy.svg.png"
          />
          <CountriesCard
            image={uae}
            location="UAE"
            countryImage="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1200px-Flag_of_the_United_Arab_Emirates.svg.png"
          />
          <CountriesCard
            image={nigeria}
            location="Lagos, Nigeria"
            countryImage="https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg"
          />
        </div>
      </div>
    </MainLayout>
  );
}
