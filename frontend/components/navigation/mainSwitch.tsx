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
    status: Status;
    refetch: Function;
  };
  connect: Function;
  disconnect: Function;
  turnOff: Function;
  turnOn: Function;
}

interface StateActionMap {
  [key: string]: Function;
}

class MainSwitch extends React.Component<MainSwitchProps> {
  handleButtonClick = async () => {
    const stateActionMap: StateActionMap = {
      disconnected: () => this.connect(),
      sleep: () => this.props.turnOn(),
      idle: () => this.props.turnOff()
    };
    const status = this.getStatusString();
    await stateActionMap[status]();
    await this.props.data.refetch();
  };

  async connect() {
    await this.props.connect();
  }

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
    return <Button {...buttonProps} onClick={this.handleButtonClick} />;
  }
}

export default withStatus(MainSwitch);
