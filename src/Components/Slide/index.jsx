import { Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function Slide({ slide, activeIndex }) {
  return (
    <Stack
  sx={{
    position: "relative",
    backgroundImage: `url(${slide.image})`,
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    flexDirection: "row",
    alignItems: "end",
  }}
>
  {/* متن و دکمه‌ها */}
  {activeIndex === slide.id && (
    <Stack
      sx={{
        position: "absolute",
        bottom: "75px",
        left: "20px",
        flexDirection: "row",
        alignItems: "center",
        gap: "20px",
        zIndex: 3, // تنظیم z-index بالاتر از سایه
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
      >
        {slide.buttonText}
      </Button>
      <Typography
        sx={{ color: "#fff", fontSize: "22px" }}
        dangerouslySetInnerHTML={{ __html: slide.description }}
      />
    </Stack>
  )}

  {/* اگر اسلاید فعال نبود، overlay مشکی نمایش بده */}
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

  {/* اضافه کردن سایه کم‌رنگ در پایین اسلاید */}
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "150px", // ارتفاع سایه
      background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))", // گرادیان
      zIndex: 2, // پایین‌تر از متن و دکمه
    }}
  />
</Stack>


  );
}
