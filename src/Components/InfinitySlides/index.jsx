import React, { useEffect, useState } from 'react'
import { animate, motion, useMotionValue } from "framer-motion";
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
import useMeasure from 'react-use-measure';
import { Box, Typography } from '@mui/material';
export default function InfinitySlides({isMobile}) {
  const xTranslation = useMotionValue(0);
  const fastDuration = 25;
  const slowDuration = 75;
  const [ref, { width }] = useMeasure();

  const [duration, setDuration] = useState(fastDuration);
  const [showTextOnSlider, setShowTextOnSlider] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [animationSpeed, setAnimationSpeed] = useState(10);
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
  )
}
