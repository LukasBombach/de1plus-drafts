import LoadStatus from "../de1/loadStatus";

const MainControls: React.FunctionComponent = ({ children }) => {
  return (
    <LoadStatus>
      {() => (
        <div style={{ float: "right", display: "inline-block" }}>
          {children}
        </div>
      )}
    </LoadStatus>
  );
};

export default MainControls;
