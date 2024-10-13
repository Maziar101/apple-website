import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Slide from "../../Components/Slide";
import Grid from "@mui/material/Grid2";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner1Small from "../../assets/banner1small.jpg";
import Banner2Small from "../../assets/banner2small.jpg";
import AppleWatchBannerSmall from "../../assets/apple-watch-banner-small.jpg";
import AppleWatchCard from "../../assets/apple-watch-card.jpg";
import AirpodsCard from "../../assets/airpods-card.jpg";
import WhiteLogo from "../../assets/white-logo.png";
import Airpods2ProCard from "../../assets/airpods2-pro-card.jpg";
import CarrierCard from "../../assets/carrier-card.jpg";
import AirpodsMaxCard from "../../assets/airpods-max-card.jpg";
import Logo from "../../assets/download.svg";
import ApplePhoneCard from "../../assets/apple-phone-card.jpg";
import AppleWatchBanner from "../../assets/apple-watch-banner.jpg";
import Slider1 from "../../assets/Slider1.jpg";
import Slider1Small from "../../assets/Slider1Small.jpg";
import Slider2Small from "../../assets/Slider2Small.jpg";
import Slider3Small from "../../assets/Slider3Small.jpg";
import Slider4Small from "../../assets/Slider4Small.jpg";
import Slider2 from "../../assets/Slider2.jpg";
import Slider3 from "../../assets/Slider3.jpg";
import Slider4 from "../../assets/Slider4.jpg";
import Infinity1 from "../../assets/Infinity1.jpg";
import Infinity2 from "../../assets/Infinity2.jpg";
import Infinity3 from "../../assets/Infinity3.jpg";
import Infinity4 from "../../assets/Infinity4.jpg";
import Infinity5 from "../../assets/Infinity5.jpg";
import Infinity6 from "../../assets/Infinity6.jpg";
import AppleMusic from "../../assets/apple-music.png";
import BlackAppleMusic from "../../assets/black-apple-music.png";
import AppleFitness from "../../assets/apple-fitness.png";
import AppleArcade from "../../assets/apple-arcade.png";
import { animate, motion, useMotionValue } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import useMeasure from "react-use-measure";
export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showTextOnSlider, setShowTextOnSlider] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animationSpeed, setAnimationSpeed] = useState(10); // سرعت اولیه
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // تشخیص موبایل

  const customPag = useRef();
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);
  const fastDuration = 25;
  const slowDuration = 75;

  const [duration, setDuration] = useState(fastDuration);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 4 - 8;

    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: duration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width, duration]);

  return (
    <>
      <Stack component={"main"}>
        {/* First Advertisement For Apple 16 Pro*/}
        <Stack
          sx={{
            backgroundImage: {
              xs: `url(${Banner1Small})`,
              sm: `url(${Banner1Small})`,
              md: `url(${Banner1Small})`,
              lg: `url(${Banner1})`,
            },
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

            height: { xs: "500px", md: "692px" },
            textAlign: "center",
            justifyContent: "space-between",
            padding: "40px 0",
          }}
        >
          <Stack>
            <Typography
              variant="h2"
              sx={{
                color: "white",
                letterSpacing: { xs: "-.05em", md: "-.005em" },
                fontWeight: "600",
                fontSize: { xs: "32px", sm: "44px", md: "54px" },
              }}
            >
              iPhone 16 Pro
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "white",
                letterSpacing: ".007em",
                fontSize: { xs: "18px", sm: "24px", md: "28px" },
              }}
            >
              Hello, Apple Intelligence.
            </Typography>
          </Stack>
          <Stack sx={{ gap: "20px" }}>
            <Stack
              sx={{
                flexDirection: "row",
                margin: "0 auto",
                gap: "20px",
              }}
            >
              <Button
                sx={{
                  borderRadius: "20px",
                  background: "#0071E3",
                  textTransform: "none",
                }}
                size="large"
                variant="contained"
              >
                Learn more
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  "&:hover": { background: "#0071E3", color: "#fff" },
                }}
                size="large"
                variant="outlined"
              >
                Buy
              </Button>
            </Stack>
            <Stack sx={{ justifyContent: "end" }}>
              <Typography sx={{ color: "#86868b", fontSize: "17px" }}>
                Apple Intelligence coming this fall{" "}
                <sup style={{ fontSize: "12px" }}>2</sup>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* Second Advertisement For Apple 16 */}
        <Stack
          sx={{
            backgroundImage: {
              xs: `url(${Banner2Small})`,
              sm: `url(${Banner2Small})`,
              md: `url(${Banner2Small})`,
              lg: `url(${Banner2})`,
            },
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "500px", md: "692px" },
            textAlign: "center",
            justifyContent: "space-between",
            padding: "40px 0",
            marginTop: "10px",
          }}
        >
          <Stack
            sx={{
              justifyContent: "start",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                color: "white",
                letterSpacing: "-.005em",
                fontWeight: "600",
                fontSize: { xs: "32px", sm: "44px", md: "54px" },
              }}
            >
              iPhone 16
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "white",
                fontSize: "28px",
                letterSpacing: ".007em",
                fontSize: { xs: "18px", sm: "24px", md: "28px" },
              }}
            >
              Hello, Apple Intelligence.
            </Typography>
          </Stack>
          <Stack sx={{ gap: "20px" }}>
            <Stack
              sx={{
                flexDirection: "row",
                margin: "0 auto",
                gap: "20px",
              }}
            >
              <Button
                sx={{
                  borderRadius: "20px",
                  background: "#0071E3",
                  textTransform: "none",
                }}
                size="large"
                variant="contained"
              >
                Learn more
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  "&:hover": { background: "#0071E3", color: "#fff" },
                }}
                size="large"
                variant="outlined"
              >
                Buy
              </Button>
            </Stack>
            <Stack sx={{ justifyContent: "end" }}>
              <Typography sx={{ color: "#1d1d1f", fontSize: "19px" }}>
                Apple Intelligence coming this fall{" "}
                <sup style={{ fontSize: "12px" }}>3</sup>
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* Third Advertisement For Apple Watch Series 10 */}
        <Stack
          sx={{
            backgroundImage: {
              xs: `url(${AppleWatchBannerSmall})`,
              sm: `url(${AppleWatchBannerSmall})`,
              md: `url(${AppleWatchBannerSmall})`,
              lg: `url(${AppleWatchBanner})`,
            },
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: { xs: "520px", md: "692px" },
            textAlign: "center",
            padding: { xs: "30px 0", md: "30px 0", lg: "40px 0" },
            gap: "15px",
            marginTop: "10px",
          }}
        >
          <Stack
            sx={{
              gap: { xs: "10px", sm: "15px", md: "15px" },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                letterSpacing: "-.005em",
                fontWeight: "600",
                display: "flex",
                fontSize: { xs: "24px", sm: "28px", md: "38px" },
                height: "30px",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img src={Logo} alt="" style={{ width: "30px" }} />
              WATCH
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "16px", md: "19px" },
                letterSpacing: {
                  xs: "1px",
                  sm: "2px",
                  md: "3px",
                },
                fontWeight: { xs: "bold", sm: "bold", md: "500" },
              }}
            >
              SERIES 10
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                letterSpacing: ".007em",
                marginTop: "-10px",
              }}
            >
              Thinstant classic.
            </Typography>
          </Stack>
          <Stack sx={{ gap: "15px" }}>
            <Stack
              sx={{
                flexDirection: "row",
                margin: "0 auto",
                gap: "20px",
              }}
            >
              <Button
                sx={{
                  borderRadius: "20px",
                  background: "#0071E3",
                  textTransform: "none",
                }}
                size="large"
                variant="contained"
              >
                Learn more
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",
                  textTransform: "none",
                  "&:hover": { background: "#0071E3", color: "#fff" },
                }}
                size="large"
                variant="outlined"
              >
                Buy
              </Button>
            </Stack>
          </Stack>
        </Stack>
        {/* Grid Cards */}
        <Grid
          container
          spacing={1.5}
          sx={{
            padding: { xs: "0", sm: "0", md: "10px" },
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              backgroundImage: `url(${AppleWatchCard})`,
              height: "580px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Stack sx={{ gap: "20px" }}>
              <Stack
                sx={{
                  gap: { xs: "10px", sm: "15px", md: "10px" },
                  padding: "40px 0 0 0",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    letterSpacing: "-.005em",
                    fontWeight: "600",
                    display: "flex",
                    fontSize: { xs: "24px", sm: "28px", md: "38px" },
                    height: "30px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <img
                    src={WhiteLogo}
                    alt=""
                    style={{ width: "25px", marginTop: "-8px" }}
                  />
                  WATCH
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", sm: "16px", md: "15px" },
                    letterSpacing: {
                      xs: "1px",
                      sm: "2px",
                      md: "1px",
                    },
                    color: "#fe6a14",
                    fontWeight: { xs: "bold", sm: "bold", md: "bold" },
                  }}
                >
                  ULTRA 2
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: { xs: "20px", sm: "24px", md: "24px" },
                  }}
                >
                  New finish. Never quit.
                </Typography>
              </Stack>
              <Stack sx={{ gap: "15px" }}>
                <Stack
                  sx={{
                    flexDirection: "row",
                    margin: "0 auto",
                    gap: "20px",
                  }}
                >
                  <Button
                    sx={{
                      borderRadius: "20px",
                      background: "#0071E3",
                      textTransform: "none",
                    }}
                    size="medium"
                    variant="contained"
                  >
                    Learn more
                  </Button>
                  <Button
                    sx={{
                      borderRadius: "20px",
                      textTransform: "none",
                      "&:hover": { background: "#0071E3", color: "#fff" },
                    }}
                    size="medium"
                    variant="outlined"
                  >
                    Buy
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              backgroundImage: `url(${AirpodsCard})`,
              display: "flex",
              justifyContent: "end",
              flexDirection: "column",
              padding: "0 0 40px 0",
              height: "580px",
              backgroundSize: "cover",
              gap: "20px",
              backgroundPosition: "center",
            }}
          >
            <Stack
              sx={{
                gap: { xs: "10px", sm: "15px", md: "15px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  letterSpacing: "-.005em",
                  fontWeight: "600",
                  display: "flex",
                  fontSize: { xs: "24px", sm: "28px", md: "38px" },
                  height: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                AirPods 4
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "19px" },
                  letterSpacing: {
                    xs: "1px",
                    sm: "2px",
                    md: "3px",
                  },
                  lineHeight: "20px",
                  fontWeight: { xs: "bold", sm: "bold", md: "500" },
                  width: { xs: "230px", sm: "400px", md: "450px" },
                  margin: "auto",
                }}
              >
                Iconic. Now supersonic. Available with Active Noise
                Cancellation.
                <sup>4</sup>
              </Typography>
            </Stack>
            <Stack sx={{ gap: "15px" }}>
              <Stack
                sx={{
                  flexDirection: "row",
                  margin: "0 auto",
                  gap: "20px",
                }}
              >
                <Button
                  sx={{
                    borderRadius: "20px",
                    background: "#0071E3",
                    textTransform: "none",
                  }}
                  size="medium"
                  variant="contained"
                >
                  Learn more
                </Button>
                <Button
                  sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                    "&:hover": { background: "#0071E3", color: "#fff" },
                  }}
                  size="medium"
                  variant="outlined"
                >
                  Buy
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              backgroundImage: `url(${Airpods2ProCard})`,
              display: "flex",
              justifyContent: "end",
              flexDirection: "column",
              padding: "0 0 40px 0",
              height: "580px",
              backgroundSize: "cover",
              gap: "20px",
              backgroundPosition: "center",
            }}
          >
            <Stack
              sx={{
                gap: { xs: "10px", sm: "15px", md: "15px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  letterSpacing: "-.005em",
                  fontWeight: "600",
                  display: "flex",
                  fontSize: { xs: "24px", sm: "28px", md: "38px" },
                  height: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                AirPods Pro 2
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "19px" },
                  lineHeight: "20px",
                  fontWeight: { xs: "bold", sm: "bold", md: "500" },
                  width: { xs: "230px", sm: "400px", md: "450px" },
                  margin: "auto",
                }}
              >
                Hearing Aid and Hearing Test features coming with a free
                software update this fall.
                <sup>5</sup>
              </Typography>
            </Stack>
            <Stack sx={{ gap: "15px" }}>
              <Stack
                sx={{
                  flexDirection: "row",
                  margin: "0 auto",
                  gap: "20px",
                }}
              >
                <Button
                  sx={{
                    borderRadius: "20px",
                    background: "#0071E3",
                    textTransform: "none",
                  }}
                  size="medium"
                  variant="contained"
                >
                  Learn more
                </Button>
                <Button
                  sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                    "&:hover": { background: "#0071E3", color: "#fff" },
                  }}
                  size="medium"
                  variant="outlined"
                >
                  Buy
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              backgroundImage: `url(${AirpodsMaxCard})`,
              display: "flex",
              justifyContent: "end",
              flexDirection: "column",
              padding: "0 0 40px 0",
              height: "580px",
              color: "#000",
              backgroundSize: "cover",
              gap: "20px",
              backgroundPosition: "center",
            }}
          >
            <Stack
              sx={{
                gap: { xs: "10px", sm: "15px", md: "15px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  letterSpacing: "-.005em",
                  fontWeight: "600",
                  display: "flex",
                  fontSize: { xs: "24px", sm: "28px", md: "38px" },
                  height: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                AirPods Max
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "19px" },

                  lineHeight: "20px",
                  fontWeight: { xs: "bold", sm: "bold", md: "500" },
                  width: { xs: "230px", sm: "400px", md: "450px" },
                  margin: "0 auto",
                }}
              >
                Symphonic boom.
              </Typography>
            </Stack>
            <Stack sx={{ gap: "15px" }}>
              <Stack
                sx={{
                  flexDirection: "row",
                  margin: "0 auto",
                  gap: "20px",
                }}
              >
                <Button
                  sx={{
                    borderRadius: "20px",
                    background: "#0071E3",
                    textTransform: "none",
                  }}
                  size="medium"
                  variant="contained"
                >
                  Learn more
                </Button>
                <Button
                  sx={{
                    borderRadius: "20px",
                    textTransform: "none",
                    "&:hover": { background: "#0071E3", color: "#fff" },
                  }}
                  size="medium"
                  variant="outlined"
                >
                  Buy
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              backgroundImage: `url(${CarrierCard})`,
              display: "flex",
              justifyContent: "end",
              flexDirection: "column",
              padding: "0 0 40px 0",
              height: "580px",
              color: "#000",
              backgroundSize: "cover",
              gap: "20px",
              backgroundPosition: "center",
            }}
          >
            <Stack
              sx={{
                gap: { xs: "10px", sm: "15px", md: "15px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  letterSpacing: "-.005em",
                  fontWeight: "600",
                  display: "flex",
                  fontSize: { xs: "24px", sm: "28px", md: "38px" },
                  height: "30px",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                Carrier deals at Apple
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "16px", md: "19px" },

                  lineHeight: "20px",
                  fontWeight: { xs: "bold", sm: "bold", md: "500" },
                  width: { xs: "230px", sm: "400px", md: "450px" },
                  margin: "auto",
                }}
              >
                Get up to $1000 in credit on a new iPhone. Trade-in may be
                required.
              </Typography>
            </Stack>
            <Stack sx={{ gap: "15px" }}>
              <Stack
                sx={{
                  margin: "0 auto",
                }}
              >
                <Button
                  sx={{
                    borderRadius: "20px",
                    background: "#0071E3",
                    textTransform: "none",
                  }}
                  size="medium"
                  variant="contained"
                >
                  Find your deal
                </Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 12, md: 6 }}
            sx={{
              backgroundImage: `url(${ApplePhoneCard})`,
              height: "580px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#000",
            }}
          >
            <Stack sx={{ gap: "20px" }}>
              <Stack
                sx={{
                  gap: { xs: "10px", sm: "15px", md: "10px" },
                  padding: "40px 0 0 0",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    letterSpacing: "-.005em",
                    fontWeight: "600",
                    display: "flex",
                    fontSize: { xs: "24px", sm: "28px", md: "38px" },
                    height: "30px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={Logo} alt="" style={{ width: "25px" }} />
                  Trade In
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: { xs: "20px", sm: "24px", md: "24px" },
                    width: { xs: "230px", sm: "400px", md: "450px" },
                    margin: "0 auto",
                  }}
                >
                  Get $180-$650 in credit when you trade in iPhone 12 or higher.
                </Typography>
              </Stack>
              <Stack sx={{ gap: "15px" }}>
                <Stack
                  sx={{
                    margin: "0 auto",
                  }}
                >
                  <Button
                    sx={{
                      borderRadius: "20px",
                      background: "#0071E3",
                      textTransform: "none",
                    }}
                    size="medium"
                    variant="contained"
                  >
                    Get your estimate
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
        {/* First Slider */}
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: customPag.current, // استفاده از مرجع customPag
            clickable: true, // قابلیت کلیک
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          modules={[Autoplay, Pagination]}
          className="myCustomSwiper"
          onSwiper={(swiper) => {
            if (customPag.current) {
              swiper.params.pagination.el = customPag.current;
              swiper.pagination.render();
              swiper.pagination.update();
            }
          }}
        >
          {[
            {
              id: 0,
              image: Slider1,
              smallImage: Slider1Small,
              buttonText: "See the schedule",
              description: "Watch Messi, every club, and every match--lives.",
            },
            {
              id: 1,
              image: Slider2,
              smallImage: Slider2Small,
              buttonText: "See the schedule",
              description: "Watch Messi, every club, and every match--lives.",
            },
            {
              id: 2,
              image: Slider3,
              smallImage: Slider3Small,
              buttonText: "Stream now",
              description: "<strong>Drama</strong> • Serve.Rescue.Survive",
            },
            {
              id: 3,
              image: Slider4,
              smallImage: Slider4Small,
              buttonText: "See the schedule",
              description: "Watch Messi, every club, and every match--lives.",
            },
          ].map((slide, index) => (
            <SwiperSlide key={slide.id} className="swiper-slide-custom">
              <Slide slide={slide} activeIndex={activeIndex} isMobile={isMobile} />
            </SwiperSlide>
          ))}
          <div ref={customPag} className="custom-pagination"></div>
        </Swiper>
        {/* Infinity Slides */}
        <motion.div
          style={{
            display: "flex",
            overflow: "hidden",
            position: "relative",
            marginTop: "20px",
          }}
        >
          <motion.div
            style={{ display: "flex", gap: "10px", x: xTranslation }}
            ref={ref}
          >
            {[
              {
                bgColor: "#5824b4",
                imgSrc: Infinity1,
                title: "R&B Now",
                appleIcon: AppleMusic,
                textColor: "#fff",
              },
              {
                bgColor: "#ebe7e0",
                imgSrc: Infinity2,
                title: "Today's Country",
                appleIcon: BlackAppleMusic,
                textColor: "#000",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                onHoverStart={() => {
                  setHoveredIndex(index);
                  setAnimationSpeed(500);
                  setDuration(slowDuration);
                }}
                onHoverEnd={() => {
                  setHoveredIndex(null);
                  setAnimationSpeed(10);
                  setDuration(fastDuration);
                }}
                style={{
                  background: item.bgColor,
                  width: "417px",
                  height: "236px",
                  position: "relative",
                  flexDirection: "row",
                  display: "flex",
                  paddingLeft: "10px",
                  justifyContent:isMobile && "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.imgSrc}
                  style={{
                    borderRadius: "8px",
                    width: "196px",
                    marginRight: "10px",
                  }}
                />

                {!isMobile && (
                  <Typography sx={{ color: item.textColor }}>
                    {item.title}
                  </Typography>
                )}

                <img
                  src={item.appleIcon}
                  style={{
                    width: "60px",
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                  }}
                />

                {/* دکمه و سایه */}
                {hoveredIndex === index && (
                  <>
                    {/* سایه */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 1,
                      }}
                    />
                    {/* دکمه */}
                    <motion.button
                      style={{
                        zIndex: 2,
                        backgroundColor: "#fff",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      Play Now
                    </motion.button>
                  </>
                )}
              </motion.div>
            ))}

            {[
              {
                bgImage: `url(${Infinity3})`,
                title: "Calm Meditations with Visualization",
                appleIcon: AppleFitness,
              },
              {
                bgImage: `url(${Infinity4})`,
                title: "Football Manager 2024 Touch",
                appleIcon: AppleArcade,
              },
              {
                bgImage: `url(${Infinity5})`,
                title: "NBA 2K25 Arcade Edition",
                appleIcon: AppleArcade,
              },
              {
                bgImage: `url(${Infinity6})`,
                title: "Yoga with Molly",
                appleIcon: AppleFitness,
              },
            ].map((item, index) => (
              <motion.div
                key={index + 2}
                onHoverStart={() => {
                  setHoveredIndex(index + 2);
                  setAnimationSpeed(200);
                  setDuration(slowDuration);
                }}
                onHoverEnd={() => {
                  setHoveredIndex(null);
                  setAnimationSpeed(10);
                  setDuration(fastDuration);
                }}
                style={{
                  backgroundImage: item.bgImage,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "417px",
                  height: "236px",
                  cursor: "pointer",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100px",
                    background:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))",
                    zIndex: 1,
                  }}
                />

                <Typography
                  sx={{
                    color: "#fff",
                    position: "absolute",
                    bottom: "25px",
                    left: "10px",
                    zIndex: 2,
                  }}
                >
                  {item.title}
                </Typography>

                <img
                  src={item.appleIcon}
                  alt="apple-icon"
                  style={{
                    width: "70px",
                    position: "absolute",
                    bottom: "25px",
                    right: "10px",
                    zIndex: 2,
                  }}
                />

                {/* دکمه و سایه */}
                {hoveredIndex === index + 2 && (
                  <>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 1,
                      }}
                    />
                    <motion.button
                      style={{
                        zIndex: 2,
                        backgroundColor: "#fff",
                        border: "none",
                        radius: "20px",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      Watch now
                    </motion.button>
                  </>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Stack>
    </>
  );
}
