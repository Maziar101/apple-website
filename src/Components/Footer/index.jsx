import {
  Box,
  List,
  ListItem,
  Stack,
  Typography,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Footer() {
  const isMobile = useMediaQuery("(max-width:960px)");
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const Section = ({ title, links }) => (
    <Stack>
      <Typography variant="p" component={"h3"}>
        {title}
      </Typography>
      <List sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {links.map((link, index) => (
          <ListItem sx={{ p: "0" }} key={index}>
            <Link to={link.to} style={{ color: "rgba(0, 0, 0, 0.72)" }}>
              {link.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
  const sectionsData = [
    {
      title: "Shop and Learn",
      links: [
        { name: "Store", url: "/" },
        { name: "Mac", url: "/mac" },
        { name: "iPad", url: "/ipad" },
        { name: "iPhone", url: "/iphone" },
        { name: "Watch", url: "/watch" },
        { name: "Vision", url: "/vision" },
        { name: "AirPods", url: "/airpods" },
        { name: "TV & Home", url: "/tv-home" },
        { name: "AirTag", url: "/airtag" },
        { name: "Accessories", url: "/accessories" },
        { name: "Gift Cards", url: "/gift-cards" },
      ],
    },
    {
      title: "Apple Wallet",
      links: [
        { name: "Wallet", url: "/wallet" },
        { name: "Apple Card", url: "/apple-card" },
        { name: "Apple Pay", url: "/apple-pay" },
        { name: "Apple Cash", url: "/apple-cash" },
      ],
    },
    {
      title: "Account",
      links: [
        { name: "Manage Your Apple Account", url: "/manage-account" },
        { name: "Apple Store Account", url: "/store-account" },
        { name: "iCloud.com", url: "/icloud" },
      ],
    },
    {
      title: "Entertainment",
      links: [
        { name: "Apple One", url: "/apple-one" },
        { name: "Apple TV+", url: "/apple-tv-plus" },
        { name: "Apple Arcade", url: "/apple-arcade" },
        { name: "Apple Fitness+", url: "/apple-fitness" },
        { name: "Apple News+", url: "/apple-news-plus" },
        { name: "Apple Podcasts", url: "/apple-podcasts" },
        { name: "Apple Books", url: "/apple-books" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Apple Support", url: "/support" },
        { name: "Contact Apple Support", url: "/contact" },
        { name: "Service & Repair", url: "/service" },
        { name: "Warranty", url: "/warranty" },
        { name: "Recycle", url: "/recycle" },
      ],
    },
  ];

  return (
    <Stack
      component={"footer"}
      sx={{ background: "#F5F5F7", mt: "50px", pt: "50px", pb: "20px" }}
    >
      <Stack
        sx={{
          width: { xs: "90%", sm: "80%", md: "60%" },
          margin: "0 auto",
        }}
      >
        {/* Big Text */}
        <Stack
          component={"section"}
          sx={{
            color: "#8C8C8D",
            fontSize: "12px",
            letterSpacing: "1px",
            fontFamily: "sans-serif",
          }}
        >
          <List>
            <ListItem>
              <Typography variant="span">
                1. Apple Intelligence will be available in beta on all iPhone 16
                models, iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with
                M1 and later, with Siri and device language set to U.S. English,
                as part of an iOS 18, iPadOS 18, and macOS Sequoia update this
                fall. English (Australia, Canada, New Zealand, South Africa, UK)
                language support available this December. Some features and
                support for additional languages, like Chinese, English (India,
                Singapore), French, German, Italian, Japanese, Korean,
                Portuguese, Spanish, Vietnamese, and others, will be coming over
                the course of the next year.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="span">
                2. Apple Intelligence will be available in beta on all iPhone 16
                models, iPhone 15 Pro, iPhone 15 Pro Max, and iPad and Mac with
                M1 and later, with Siri and device language set to U.S. English,
                as part of an iOS 18, iPadOS 18, and macOS Sequoia update this
                fall. English (Australia, Canada, New Zealand, South Africa, UK)
                language support available this December. Some features and
                support for additional languages, like Chinese, English (India,
                Singapore), French, German, Italian, Japanese, Korean,
                Portuguese, Spanish, Vietnamese, and others, will be coming over
                the course of the next year.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="span">
                3. Available in two models: AirPods 4 and AirPods 4 with Active
                Noise Cancellation.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="span">
                4. Hearing Test and Hearing Aid features expected fall 2024.
                They will be supported on AirPods Pro 2 with the latest firmware
                paired with a compatible iPhone or iPad with iOS 18 or iPadOS 18
                and later, and are intended for people 18 years old or older.
                The Hearing Aid feature will be intended for people with
                perceived mild to moderate hearing loss and is pending FDA
                review.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="span">
                5. Trade-in values will vary based on the condition, year, and
                configuration of your eligible trade-in device. Not all devices
                are eligible for credit. You must be at least 18 years old to be
                eligible to trade in for credit or for an Apple Gift Card.
                Trade-in value may be applied toward qualifying new device
                purchase, or added to an Apple Gift Card. Actual value awarded
                is based on receipt of a qualifying device matching the
                description provided when estimate was made. Sales tax may be
                assessed on full value of a new device purchase. In-store
                trade-in requires presentation of a valid photo ID (local law
                may require saving this information). Offer may not be available
                in all stores, and may vary between in-store and online
                trade-in. Some stores may have additional requirements. Apple or
                its trade-in partners reserve the right to refuse or limit
                quantity of any trade-in transaction for any reason. More
                details are available from Apple’s trade-in partner for trade-in
                and recycling of eligible devices. Restrictions and limitations
                may apply.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="span">
                To access and use all Apple Card features and products available
                only to Apple Card users, you must add Apple Card to Wallet on
                an iPhone or iPad that supports and has the latest version of
                iOS or iPadOS. Apple Card is subject to credit approval,
                available only for qualifying applicants in the United States,
                and issued by Goldman Sachs Bank USA, Salt Lake City Branch.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="span">
                If you reside in the U.S. territories, please call Goldman Sachs
                at 877-255-5923 with questions about Apple Card.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="span">
                Learn more about how Apple Card applications are evaluated at
                <Link
                  to={"/"}
                  style={{ color: "#8C8C8D", textDecoration: "underline" }}
                >
                  {" "}
                  support.apple.com/kb/HT209218.
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="span">
                A subscription is required for Apple TV+.
              </Typography>
            </ListItem>
            <ListItem>
              <Typography variant="span">
                A subscription is required for Apple Arcade, Apple Fitness+, and
                Apple Music.
              </Typography>
            </ListItem>
          </List>
        </Stack>
        {/* Type of hr tag */}
        <Box
          sx={{
            width: "98%",
            margin: "10px auto",
            height: "1px",
            background: "#CECECF",
          }}
        ></Box>
        {/* Menu */}

        <Stack
          component={"nav"}
          sx={{
            flexDirection: isMobile?"column":"row",
            justifyContent: "space-between",
            width: "98%",
            margin: "15px auto",
          }}
        >
          {sectionsData.map((section, index) => (
            <Stack key={index}>
              {isMobile ? (
                <Accordion
                  expanded={expanded === index}
                  onChange={handleAccordionChange(index)}
                  sx={{background:"transparent",borderBottom:"1px solid #CECECF",boxShadow:"none","&:before": {
      display: "none", // حذف خط نازکی که بین آکاردئون‌ها قرار می‌گیرد
    },}}

                  
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography variant="h6">{section.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <List
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {section.links.map((link, idx) => (
                        <ListItem sx={{ p: "0" }} key={idx}>
                          <Link
                            to={link.url}
                            style={{ color: "rgba(0, 0, 0, 0.72)" }}
                          >
                            {link.name}
                          </Link>
                        </ListItem>
                      ))}
                    </List>
                  </AccordionDetails>
                </Accordion>
              ) : (
                <>
                  <Typography variant="h6" component={"h3"}>
                    {section.title}
                  </Typography>
                  <List
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {section.links.map((link, idx) => (
                      <ListItem sx={{ p: "0" }} key={idx}>
                        <Link
                          to={link.url}
                          style={{ color: "rgba(0, 0, 0, 0.72)" }}
                        >
                          {link.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </>
              )}
            </Stack>
          ))}
        </Stack>

        {/* Copywrite */}

        <Stack sx={{ gap: "2px", padding: "0 10px", fontSize: "12px" }}>
          <Typography sx={{ fontSize: "13px" }}>
            More ways to shop:{" "}
            <Link
              style={{ textDecoration: "underline", color: "blue" }}
              to={"#"}
            >
              Find an Apple Store
            </Link>{" "}
            or{" "}
            <Link
              style={{ textDecoration: "underline", color: "blue" }}
              to={"#"}
            >
              other retailer
            </Link>{" "}
            near you. Or call 1-800-MY-APPLE.
          </Typography>
          <Box
            sx={{
              width: "100%",
              margin: "10px auto",
              height: "1px",
              background: "#CECECF",
            }}
          ></Box>
          <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "12px" }}>
              Copyright © 2024 Apple Inc. All rights reserved.
            </Typography>
            <Typography sx={{ fontSize: "12px" }}>United States</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
