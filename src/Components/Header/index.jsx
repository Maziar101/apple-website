import React from "react";
import Logo from "../../assets/download.svg";
import { Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          gap: "30px",
          alignItems: "center",
          justifyContent: {
            xs: "space-between",
            sm: "space-between",
            md: "center",
          },
          background: "#F7F7F9",
          backdropFilter:`blur(10px)`,
          padding: {
            xs: "0 20px",
            sm: "0 20px",
            md: "0",
          },
          position:"fixed",
          top:"0",
          left:"0",
          right:"0",
          zIndex:"99",
        }}
      >
        <Link to={"/"} style={{ display: "flex", alignItems: "center" }}>
          <img src={Logo} alt="apple-logo" />
        </Link>
        {/* Menu */}
        <Stack
          sx={{
            flexDirection: "row",
            gap: { md: "20px", xl: "35px" },
            display: { xs: "none", sm: "none", md: "flex" },
          }}
          component={"ul"}
        >
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            Store
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            Mac
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            iPad
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            iPhone
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            Watch
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            Vision
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            AirPods
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            Tv & Home
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            Entertainment
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            Accessories
          </Typography>
          <Typography sx={{ fontSize: "12px" }} component={"li"}>
            Support
          </Typography>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            gap: { xs: "20px", md: "20px", xl: "35px" },
          }}
        >
          <SearchIcon style={{ fontSize: "18px" }} />
          <ShoppingBagOutlinedIcon style={{ fontSize: "18px" }} />
          <MenuIcon
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
              },
              fontSize: "20px",
            }}
          />
        </Stack>
      </Stack>
    </>
  );
}
