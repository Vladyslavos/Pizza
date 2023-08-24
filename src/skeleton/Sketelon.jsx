import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={470}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#f5eed5"
    {...props}
  >
    <circle cx="138" cy="138" r="130" />
    <rect x="205" y="285" rx="0" ry="0" width="1" height="1" />
    <rect x="3" y="276" rx="9" ry="9" width="273" height="47" />
    <rect x="4" y="342" rx="7" ry="7" width="276" height="112" />
    <rect x="55" y="447" rx="0" ry="0" width="1" height="12" />
  </ContentLoader>
);

export default MyLoader;
