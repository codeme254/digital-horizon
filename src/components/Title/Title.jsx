import React from "react";
import { Typography } from "@mui/material";

export default function Title({ text }) {
  return (
    <Typography
      variant="h2"
      textTransform="capitalize"
      align="center"
      mt={8}
      fontSize={15}
      gutterBottom={true}
      sx={{
        color: "primary.main",
      }}
    >
      {text}
    </Typography>
  );
}
