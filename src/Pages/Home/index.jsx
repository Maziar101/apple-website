import { Button, Stack, Typography } from "@mui/material";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner1Small from "../../assets/banner1small.jpg";
import Banner2Small from "../../assets/banner2small.jpg";
import AppleWatchBannerSmall from "../../assets/apple-watch-banner-small.jpg";
import Logo from "../../assets/download.svg";
import AppleWatchBanner from "../../assets/apple-watch-banner.jpg";
import React from "react";

export default function Home() {
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
              <img
                src={Logo}
                alt=""
                style={{ width: { xs: "24px", sm: "28px", md: "38px" } }}
              />
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
                fontWeight: { xs: "bold" , sm:"bold" , md: "500" },
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
      </Stack>
    </>
  );
}
