import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function Slide({ slide, activeIndex , isMobile }) {
  return (
    <Stack
      sx={{
        position: "relative",
        backgroundImage: {
          xs: `url(${slide.smallImage})`,
          sm: `url(${slide.smallImage})`,
          md: `url(${slide.smallImage})`,
          lg: `url(${slide.image})`,
        },
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        flexDirection: "row",
        alignItems: "end",
      }}
    >
      {activeIndex === slide.id && (
        <Stack
          sx={{
            position: "absolute",
            bottom: {
              xs: "35px",
              sm: "45px",
              md: "55px",
              lg: "75px",
            },
            left: "20px",
            flexDirection: {
              xs:"column-reverse",
              sm: "column-reverse",
              md: "row"
            },
            alignItems: "center",
            gap: {
              xs:"10px",
              sm: "10px",
              md: "20px"
            },
            zIndex: 3,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#fff",
              color: "#000",
              borderRadius: "20px",
              padding: "10px 18px",
            }}
            size={isMobile?"small":"medium"}
          >
            {slide.buttonText}
          </Button>
          <Typography
            sx={{ color: "#fff", fontSize: "22px" }}
            dangerouslySetInnerHTML={{ __html: slide.description }}
          />
        </Stack>
      )}
      {activeIndex !== slide.id && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "150px",
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))",
          zIndex: 2,
        }}
      />
    </Stack>
  );
}
