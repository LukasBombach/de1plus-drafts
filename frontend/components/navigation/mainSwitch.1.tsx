//import { useState, useEffect } from "react";
import { Button } from "antd";
import Status from "../de1/status.old";

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
  disonnected: {
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

const MainSwitch: React.FunctionComponent = () => {
  return (
    <Status>
      {({ status }) => {
        const props = getPropsForStatus(status);
        return <Button {...props} onClick={() => clickHandler(status)} />;
      }}
    </Status>
  );
};

async function clickHandler(status: string) {
  if (!status) throw new Error("Missing status");
}

// TODO get rid of any
function getPropsForStatus(status: string): React.PropsWithChildren<any> {
  const additionalProps = statusProps[status];
  return { ...baseProps, ...additionalProps };
}

// const [fakeStatus, setFakeStatus] = useState("loading");
// useEffect(() => {
//   fakeLoaded(setFakeStatus);
// }, []);

/* async function fakeClickHandler(
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
}*/

export default MainSwitch;
