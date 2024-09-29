import { Button, Stack, Typography } from "@mui/material";
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
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
                sx={{ borderRadius: "20px", background: "#0071E3" }}
                size="large"
                variant="contained"
              >
                Learn more
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",
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
            marginTop:'10px'
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
                sx={{ borderRadius: "20px", background: "#0071E3" }}
                size="large"
                variant="contained"
              >
                Learn more
              </Button>
              <Button
                sx={{
                  borderRadius: "20px",
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
        {/* Second Advertisement For Apple 16 */}

      </Stack>
    </>
  );
}
