import { Button, Stack, Typography } from "@mui/material";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
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
            backgroundImage: `url(${Banner1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "692px",
            textAlign: "center",
            justifyContent: "space-between",
            padding: "40px 0",
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
              }}
            >
              iPhone 16 Pro
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "white", fontSize: "28px", letterSpacing: ".007em" }}
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
                sx={{ borderRadius: "20px", background: "#0071E3",textTransform: 'none',}}
                size="large"
                variant="contained"
              >
                Learn more
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",textTransform: 'none',
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
            backgroundImage: `url(${Banner2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "692px",
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
              }}
            >
              iPhone 16
            </Typography>
            <Typography
              variant="p"
              sx={{ color: "white", fontSize: "28px", letterSpacing: ".007em" }}
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
                sx={{ borderRadius: "20px", background: "#0071E3" ,textTransform: 'none',}}
                size="large"
                variant="contained"
              >
                Learn more
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",textTransform: 'none',
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
            backgroundImage: `url(${AppleWatchBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "692px",
            textAlign: "center",
            padding: "40px 0",
            gap: "15px",
            marginTop: "10px",
          }}
        >
          <Stack
            sx={{
              gap:'15px'
            }}
          >
            <Typography
              variant="h2"
              sx={{
                letterSpacing: "-.005em",
                fontWeight: "600",
                display: "flex",
                fontSize: "38px",
                height:'30px',
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <img src={Logo} alt="" style={{ width: "38px" }} />
              WATCH
            </Typography>
            <Typography sx={{fontSize:'19px',letterSpacing:'3px'}}>
              SERIES 10
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "28px", letterSpacing: ".007em" , marginTop:'-10px' }}
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
                sx={{ borderRadius: "20px", background: "#0071E3", textTransform: 'none', }}
                size="large"
                variant="contained"
              >
                Learn more
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",textTransform: 'none',
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
