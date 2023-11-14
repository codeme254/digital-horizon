import React from "react";
import Title from "../Title/Title";
import Service from "./Service";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import SignalWifi4BarLockIcon from "@mui/icons-material/SignalWifi4BarLock";
import VideocamIcon from "@mui/icons-material/Videocam";
import LanguageIcon from "@mui/icons-material/Language";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import LanIcon from "@mui/icons-material/Lan";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import SupportIcon from "@mui/icons-material/Support";
import { Grid } from "@mui/material";

export default function Services() {
  const services = [
    {
      icon: DesignServicesIcon,
      serviceName: "web design",
      serviceSummary:
        "Creating captivating and user-friendly websites. Our designs combine aesthetics with functionality, ensuring an engaging online presence that resonates with your audience.",
    },
    {
      icon: AppShortcutIcon,
      serviceName: "mobile apps development",
      serviceSummary:
        "Crafting innovative mobile solutions. Our expertise in app development delivers user-friendly and cutting-edge applications tailored to meet your unique business needs",
    },
    {
      icon: SignalWifi4BarLockIcon,
      serviceName: "wifi installation",
      serviceSummary:
        "Seamless WiFi solutions. Our installations ensure reliable and efficient wireless networks, enhancing connectivity (Strong internet connectivity) and productivity for your space.",
    },
    {
      icon: VideocamIcon,
      serviceName: "CCTV installation",
      serviceSummary:
        "Comprehensive security solutions. Our CCTV installations offer peace of mind, providing robust surveillance systems tailored to safeguard your premises.",
    },
    {
      icon: LanguageIcon,
      serviceName: "web development",
      serviceSummary:
        "Empowering businesses online. Our web development services build robust, scalable websites, blending innovation and functionality to drive your digital success.",
    },
    {
      icon: RequestQuoteIcon,
      serviceName: "digital marketing",
      serviceSummary:
        "Elevating your online presence. Our digital marketing strategies optimize visibility, engagement, and conversions, fostering your brand growth and impact.",
    },
    {
      icon: LanIcon,
      serviceName: "IT support and maintenance",
      serviceSummary:
        "Reliable IT maintenance and support. Our services ensure seamless operations, offering timely assistance and maintenance to keep your systems running smoothly.",
    },
    {
      icon: PhonelinkIcon,
      serviceName: "IT infrastructure management",
      serviceSummary:
        "Optimizing IT infrastructure. We streamline and manage your technology, ensuring a robust and adaptable infrastructure that aligns with your business goals.",
    },
    {
      icon: SupportIcon,
      serviceName: "IT consultation services and training",
      serviceSummary:
        "Our consultation services offer expert advice and hands-on assistance, empowering businesses to navigate technology challenges and make decisions.",
    },
  ];
  return (
    <React.Fragment>
      <Title text="our services" />
      <section className="services__container" id="services">
        {services.map((service, i) => (
          <Service
            item
            key={i}
            serviceName={service.serviceName}
            serviceSummary={service.serviceSummary}
            icon={<service.icon />}
          />
        ))}
      </section>
    </React.Fragment>
  );
}
