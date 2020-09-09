import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
//
import * as Icon from "react-feather";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function CustomBreadcrumb({ data }) {
  return (
    <div className="top-bar text-base text-gray-600 mb-3">
      <Breadcrumbs
        separator={<Icon.ChevronRight fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Typography style={{ fontFamily: "Poppins" }} color="textPrimary">
          {data.start}
        </Typography>
        {data.links.map((link, i) => {
          return (
            <Link
              key={data.start + i}
              color="inherit"
              href={link.url}
              onClick={handleClick}
            >
              {link.label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
