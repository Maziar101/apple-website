import React from "react";
import {
    Button,
    Stack,
    Typography,
  } from "@mui/material";
import AppleWatchCard from "../../assets/apple-watch-card.jpg";
import Logo from "../../assets/download.svg";

import AirpodsCard from "../../assets/airpods-card.jpg";
import Grid from "@mui/material/Grid2";
import ApplePhoneCard from "../../assets/apple-phone-card.jpg";
import WhiteLogo from "../../assets/white-logo.png";
import Airpods2ProCard from "../../assets/airpods2-pro-card.jpg";
import CarrierCard from "../../assets/carrier-card.jpg";
import AirpodsMaxCard from "../../assets/airpods-max-card.jpg";
export default function Cards() {
  return (
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
            Iconic. Now supersonic. Available with Active Noise Cancellation.
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
            Hearing Aid and Hearing Test features coming with a free software
            update this fall.
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
            Get up to $1000 in credit on a new iPhone. Trade-in may be required.
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
  );
}
