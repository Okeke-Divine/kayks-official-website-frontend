import React, { useEffect } from "react";

import Homepage from "./homepage/index.jsx";
import SiteConfig from "../data/SiteConfig.json";

import "../assets/css/index.css"

export default function MainRouter() {
  useEffect(function () {
    document.title = SiteConfig.site_name;
  }, []);

  return <Homepage SiteConfig={SiteConfig} />;
}
