import { Card, Descriptions } from "antd";

export interface InfoProps {
  items: Items;
}

export type Items = [string, any][];

const Info: React.FunctionComponent<InfoProps> = ({ items }) => {
  return (
    <Card size="small">
      <Descriptions title="State" column={1} size="small">
        {items.map(([name, value], key) => (
          <Descriptions.Item key={key} label={name}>
            {valueToString(value)}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Card>
  );
};

function valueToString(value: any): string {
  return value === null
    ? "null"
    : typeof value === "undefined"
    ? "undefined"
    : typeof value === "boolean"
    ? value.toString()
    : typeof value === "string"
    ? `"${value}"`
    : `${value} (${typeof value})`;
}

export default Info;
