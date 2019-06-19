import React from "react";

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

export default function getButtonProps(
  status: string
): React.PropsWithChildren<any> {
  const additionalProps = statusProps[status];
  return { ...baseProps, ...additionalProps };
}
