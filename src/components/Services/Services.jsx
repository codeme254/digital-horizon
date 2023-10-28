import React from "react";
import Title from "../Title/Title";
import Service from "./Service";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { Grid } from "@mui/material";

export default function Services() {
  const services = [
    {
      icon: DesignServicesIcon,
      serviceName: "web design",
      serviceSummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio, expedita rerum voluptatem nemo laboriosam qui sapiente reiciendis ea odit!",
    },
    {
      icon: DesignServicesIcon,
      serviceName: "web design",
      serviceSummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio, expedita rerum voluptatem nemo laboriosam qui sapiente reiciendis ea odit!",
    },
    {
      icon: DesignServicesIcon,
      serviceName: "web design",
      serviceSummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio, expedita rerum voluptatem nemo laboriosam qui sapiente reiciendis ea odit!",
    },
    {
      icon: DesignServicesIcon,
      serviceName: "web design",
      serviceSummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio, expedita rerum voluptatem nemo laboriosam qui sapiente reiciendis ea odit!",
    },
    {
      icon: DesignServicesIcon,
      serviceName: "web design",
      serviceSummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio, expedita rerum voluptatem nemo laboriosam qui sapiente reiciendis ea odit!",
    },
    {
      icon: DesignServicesIcon,
      serviceName: "web design",
      serviceSummary:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae optio, expedita rerum voluptatem nemo laboriosam qui sapiente reiciendis ea odit!",
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
