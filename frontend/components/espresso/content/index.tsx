import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";

const CurveChart = dynamic(() => import("./curveChart"), { ssr: false });

const IndexPage: React.FunctionComponent = () => {
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 });
  const thirdOfHeight = Math.floor(height / 3.1);

  const section = useCallback(
    node => node && setSize(node.getBoundingClientRect()),
    []
  );

  return (
    <section ref={section}>
      {/* <CurveChart width={width} height={thirdOfHeight} />
      <CurveChart width={width} height={thirdOfHeight} />
      <CurveChart width={width} height={thirdOfHeight} /> */}
    </section>
  );
};

export default IndexPage;
