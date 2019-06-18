import LoadStatus from "../de1/loadStatus";

const State: React.FunctionComponent = () => {
  return <LoadStatus>{({ status }) => status}</LoadStatus>;
};

export default State;
