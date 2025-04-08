import dynamic from "next/dynamic";

// const AutoPlaySlider = dynamic(() => import("./slider/AutoPlaySlider"));
// const AutoScrollSlider = dynamic(() => import("./slider/AutoScrollSlider"));
const Header = dynamic(() => import("./layout/Header"));
const Banner = dynamic(() => import("./banner/Banner"));
const VideoSection = dynamic(() => import("./videoSection/VideoSection"));
const Steps = dynamic(() => import("./steps/Steps"));
const ExploreTemplates = dynamic(
  () => import("./exploreTemplates/ExploreTemplates")
);

export { Header, Banner, ExploreTemplates, VideoSection, Steps };
