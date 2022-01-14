import React from "react";
import "./container.css";
interface Props {
  children?: React.ReactNode;
  size?: number;
}
const Container = (props: Props) => {
  const { children } = props;
  return <div className="container">{props.children}</div>;
};
export default Container;
