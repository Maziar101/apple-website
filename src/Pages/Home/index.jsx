import { Stack, useMediaQuery, useTheme } from "@mui/material";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner1Small from "../../assets/banner1small.jpg";
import Banner2Small from "../../assets/banner2small.jpg";

import React from "react";
import InfinitySlides from "../../Components/InfinitySlides";
import Slider from "../../Components/Slider";
import Cards from "../../Components/Cards";
import Ads from "../../Components/Ads";
export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ads = [
    {
      id: 1,
      title: "iPhone 16 Pro",
      subtitle: "Hello, Apple Intelligence.",
      bannerSmall: Banner1Small,
      bannerLarge: Banner1,
      height: { xs: "500px", md: "692px" },
      textColor: "white",
      bottomTextColor: "#86868b",
      bottomTextSize: "17px",
      bottomText: "Apple Intelligence coming this fall",
      sup: "2",
    },
    {
      id: 2,
      title: "iPhone 16",
      subtitle: "Hello, Apple Intelligence.",
      bannerSmall: Banner2Small,
      bannerLarge: Banner2,
      height: { xs: "500px", md: "692px" },
      textColor: "white",
      bottomTextColor: "#1d1d1f",
      bottomTextSize: "19px",
      bottomText: "Apple Intelligence coming this fall",
      sup: "3",
    },
  ];

  return (
    <>
      <Stack component={"main"}>
        <Ads ads={ads} />
        <Cards />
        <Slider isMobile={isMobile} />
        <InfinitySlides isMobile={isMobile} />
      </Stack>
    </>
  );
}
