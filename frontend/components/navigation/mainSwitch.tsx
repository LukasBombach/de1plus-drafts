import React from "react";
import { Button } from "antd";
import withStatus from "../de1/withStatus";
import { State } from "../../../backend/de1/api/characteristics/state";

export type Status = State | "error" | "loading" | "disconnected";

interface MainSwitchProps {
  data: Data;
}

interface Data {
  loading: boolean;
  error?: Error;
  connected: boolean;
  state: State;
}

interface StatusProps {
  [name: string]: ButtonProps;
}

interface ButtonProps {
  [name: string]: string | boolean;
}

const baseProps = {
  size: "large",
  type: "primary"
};

const statusProps: StatusProps = {
  loading: {
    children: "Loading",
    loading: true
  },
  disconnected: {
    children: "Connect",
    icon: "api"
  },
  connecting: {
    children: "Connecting",
    loading: true
  },
  idle: {
    children: "Turn off",
    icon: "poweroff"
  },
  sleep: {
    children: "Turn on",
    icon: "poweroff"
  }
};

const MainSwitch: React.FunctionComponent<MainSwitchProps> = props => {
  const status = getStatusString(props.data);
  const buttonProps = getPropsForStatus(status);
  return <Button {...buttonProps} />;
};

function getPropsForStatus(status: string): React.PropsWithChildren<any> {
  const additionalProps = statusProps[status];
  return { ...baseProps, ...additionalProps };
}

function getStatusString({ loading, error, connected, state }: Data): Status {
  if (error) return "error";
  if (loading) return "loading";
  if (!connected) return "disconnected";
  return state;
}

export default withStatus(MainSwitch);
