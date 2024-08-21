import { FC } from "react";
import "./StdOut.modules.css";

interface IProps {
  children: any;
}

const StdOut: FC<IProps> = (props) => {
  const { children } = props;

  return <div className="stdOut">{children}</div>;
};

export default StdOut;
