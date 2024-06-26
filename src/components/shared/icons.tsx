import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

type IconProps = {
  width?: number;
  height?: number;
  color?: string;
};

type IconName = "home" | "completed" | "categories" | "calendar" | "profile";

const Home = ({ color = "black", height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 20" fill="none">
    <Path
      d="M8.92527 1.40363L0.925273 7.02207C0.658682 7.20929 0.5 7.51464 0.5 7.84041V18C0.5 18.5523 0.947715 19 1.5 19H9.5H17.5C18.0523 19 18.5 18.5523 18.5 18V7.84041C18.5 7.51464 18.3413 7.20929 18.0747 7.02207L10.0747 1.40363C9.72985 1.16143 9.27015 1.16143 8.92527 1.40363Z"
      stroke={color}
    />
  </Svg>
);
const Completed = ({ color = "black", height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Circle cx={9.5} cy={9} r={8.5} stroke={color} />
    <Path
      d="M4 8.5C4 10 4.36418 11.1735 5 12C6.28097 13.6652 8.06982 13.9999 9.5 14C11.0334 14.0001 12.2064 13.5523 13.5 12C14.138 11.1018 14.5 9.5 14.5 8.5"
      stroke={color}
      strokeLinecap="round"
    />
  </Svg>
);

const Calendar = ({ color = "black", height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      d="M18.5 9.06708V4.19513C18.5 3.64284 18.0523 3.19513 17.5 3.19513H9.5H1.5C0.947715 3.19513 0.5 3.64284 0.5 4.19513V9.06708M18.5 9.06708V18C18.5 18.5523 18.0523 19 17.5 19H9.5H1.5C0.947715 19 0.5 18.5523 0.5 18V9.06708M18.5 9.06708H0.5"
      stroke={color}
    />
    <Path d="M4.5 3.19512V1" stroke={color} strokeLinecap="round" />
    <Path d="M14 3.19512V1" stroke={color} strokeLinecap="round" />
  </Svg>
);
const Categories = ({
  color = "black",
  height = 20,
  width = 20,
}: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      d="M18.5 9.06708V4.19513C18.5 3.64284 18.0523 3.19513 17.5 3.19513H9.5H1.5C0.947715 3.19513 0.5 3.64284 0.5 4.19513V9.06708M18.5 9.06708V18C18.5 18.5523 18.0523 19 17.5 19H9.5H1.5C0.947715 19 0.5 18.5523 0.5 18V9.06708M18.5 9.06708H0.5"
      stroke={color}
    />
    <Path d="M4.5 3.19512V1" stroke={color} strokeLinecap="round" />
    <Path d="M14 3.19512V1" stroke={color} strokeLinecap="round" />
  </Svg>
);

const Profile = ({ color = "black", height = 20, width = 20 }: IconProps) => (
  <Svg width={width} height={height} viewBox="0 0 19 18" fill="none">
    <Circle cx={9.5} cy={9} r={8.5} stroke={color} />
    <Path
      d="M4 8.5C4 10 4.36418 11.1735 5 12C6.28097 13.6652 8.06982 13.9999 9.5 14C11.0334 14.0001 12.2064 13.5523 13.5 12C14.138 11.1018 14.5 9.5 14.5 8.5"
      stroke={color}
      strokeLinecap="round"
    />
  </Svg>
);

// </svg>
const Icons = ({
  name,
  color,
  height,
  width,
}: IconProps & { name: IconName }) => {
  switch (name) {
    case "home":
      return <Home color={color} height={height} width={width} />;
    case "completed":
      return <Completed color={color} height={height} width={width} />;
    case "categories":
      return <Categories color={color} height={height} width={width} />;
    case "calendar":
      return <Calendar color={color} height={height} width={width} />;
    case "profile":
      return <Profile color={color} height={height} width={width} />;
  }
};

export default Icons;
