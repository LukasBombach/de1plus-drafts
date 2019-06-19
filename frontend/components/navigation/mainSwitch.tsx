import React from "react";
import { Button } from "antd";
import withStatus from "../de1/withStatus";
import { State } from "../../../backend/de1/api/characteristics/state";
import getButtonProps from "./buttonProps";

export type Status = State | "error" | "loading" | "disconnected";

interface MainSwitchProps {
  data: {
    loading: boolean;
    error?: Error;
    connected: boolean;
    state: State;
  };
  connect: Function;
  disconnect: Function;
  turnOff: Function;
  turnOn: Function;
}

class MainSwitch extends React.Component<MainSwitchProps> {
  getStatusString(): Status {
    const { loading, error, connected, state } = this.props.data;
    if (error) return "error";
    if (loading) return "loading";
    if (!connected) return "disconnected";
    return state;
  }

  render() {
    const status = this.getStatusString();
    const buttonProps = getButtonProps(status);
    return <Button {...buttonProps} />;
  }
}

export default withStatus(MainSwitch);
