import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import AppleWatchBannerSmall from "../../assets/apple-watch-banner-small.jpg";
import Logo from "../../assets/download.svg";
import AppleWatchBanner from "../../assets/apple-watch-banner.jpg";

export default function Ads({ ads }) {
  return (
    <>
      {ads.map((ad) => (
        <Stack
          key={ad.id}
          sx={{
            backgroundImage: {
              xs: `url(${ad.bannerSmall})`,
              sm: `url(${ad.bannerSmall})`,
              md: `url(${ad.bannerSmall})`,
              lg: `url(${ad.bannerLarge})`,
            },
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: ad.height,
            textAlign: "center",
            justifyContent: "space-between",
            padding: "40px 0",
            marginTop: ad.id !== 1 ? "10px" : "50px", // Add margin only for the second and third ads
          }}
        >
          <Stack>
            <Typography
              variant="h2"
              sx={{
                color: ad.textColor,
                letterSpacing: { xs: "-.05em", md: "-.005em" },
                fontWeight: "600",
                fontSize: { xs: "32px", sm: "44px", md: "54px" },
              }}
            >
              {ad.title}
            </Typography>
            {ad.subtitle && (
              <Typography
                variant="p"
                sx={{
                  color: ad.textColor,
                  letterSpacing: ".007em",
                  fontSize: { xs: "18px", sm: "24px", md: "28px" },
                }}
              >
                {ad.subtitle}
              </Typography>
            )}
            {ad.tagline && (
              <Typography
                variant="p"
                sx={{
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                  letterSpacing: ".007em",
                  marginTop: "-10px",
                }}
              >
                {ad.tagline}
              </Typography>
            )}
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
            {ad.bottomText && (
              <Stack sx={{ justifyContent: "end" }}>
                <Typography
                  sx={{
                    color: ad.bottomTextColor,
                    fontSize: ad.bottomTextSize,
                  }}
                >
                  {ad.bottomText}{" "}
                  <sup style={{ fontSize: "12px" }}>{ad.sup}</sup>
                </Typography>
              </Stack>
            )}
          </Stack>
        </Stack>
      ))}
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
    </>
  );
}
