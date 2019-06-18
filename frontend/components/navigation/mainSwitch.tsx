import { useState, useEffect } from "react";
import { Button } from "antd";
import LoadStatus from "../de1/loadStatus";

interface StatusProps {
  [name: string]: ButtonProps;
}

interface ButtonProps {
  [name: string]: string | boolean;
}

const baseProps = {
  type: "primary",
  size: "large"
};

const statusProps: StatusProps = {
  loading: {
    children: "Loading",
    loading: true
  },
  connecting: {
    children: "Connecting",
    loading: true
  },
  disonnected: {
    children: "Connect",
    icon: "api"
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

const MainSwitch: React.FunctionComponent = () => {
  const [fakeStatus, setFakeStatus] = useState("loading");
  useEffect(() => {
    fakeLoaded(setFakeStatus);
  }, []);

  return (
    <LoadStatus>
      {({ status }) => {
        const props = getPropsForStatus(fakeStatus);
        return (
          <Button
            {...props}
            onClick={() => clickHandler(fakeStatus, setFakeStatus)}
          />
        );
      }}
    </LoadStatus>
  );
};

async function clickHandler(
  status: string,
  setStatus: React.Dispatch<React.SetStateAction<string>>
): Promise<void> {
  if (status === "disonnected") {
    setStatus("connecting");
    await wait();
    setStatus("idle");
  }
  if (status === "idle") {
    setStatus("sleep");
  }
  if (status === "sleep") {
    setStatus("idle");
  }
}

function fakeLoaded(
  setStatus: React.Dispatch<React.SetStateAction<string>>,
  ms: number = 500
): void {
  window.setTimeout(() => setStatus("disonnected"), ms);
}

async function wait(ms: number = 500, success: boolean = true) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => (success ? resolve() : reject()), ms);
  });
}

// TODO get rid of any
function getPropsForStatus(status: string): React.PropsWithChildren<any> {
  const additionalProps = statusProps[status];
  return { ...baseProps, ...additionalProps };
}

export default MainSwitch;
