import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";

export type IconProps = {
  fontSize?: SvgIconTypeMap["props"]["fontSize"];
  color?: SvgIconTypeMap["props"]["color"];
  isHovered: boolean;
};
