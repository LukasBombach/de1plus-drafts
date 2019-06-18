import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { Row, Col } from "antd";

const CurveChart = dynamic(() => import("./curveChart"), { ssr: false });

const IndexPage: React.FunctionComponent = () => {
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 });

  const section = useCallback(
    node => node && setSize(node.getBoundingClientRect()),
    []
  );

  return (
    <section ref={section}>
      <Row>
        <Col span={24}>
          <CurveChart width={width} height={Math.floor(height / 3)} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <CurveChart width={width} height={Math.floor(height / 3)} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <CurveChart width={width} height={Math.floor(height / 3)} />
        </Col>
      </Row>
    </section>
  );
};

export default IndexPage;
