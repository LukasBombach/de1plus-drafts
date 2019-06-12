const serializedData = [
  { uuid: "a001", value: "040901c151092c5ee0000000000000000000" },
  { uuid: "a002", value: "02" },
  { uuid: "a003", value: "0000000000000000" },
  {
    uuid: "a004",
    value: "000000000000000000000000000000000000000000000000"
  },
  { uuid: "a005", value: "0000000000000000000000000000000000000000" },
  { uuid: "a006", value: "" },
  { uuid: "a007", value: "" },
  { uuid: "a008", value: "" },
  { uuid: "a009", value: "" },
  { uuid: "a00a", value: "00000000000000000000000000000000" },
  { uuid: "a00b", value: "00a03c50503cc85800" },
  { uuid: "a00c", value: "0000000000000000000000000000000000000000" },
  { uuid: "a00d", value: "000100a00000583a583ab35a005800000002a0" },
  { uuid: "a00e", value: "0200" },
  { uuid: "a00f", value: "0103010060" },
  { uuid: "a010", value: "026040b09e000400" },
  { uuid: "a011", value: "1c480500" },
  { uuid: "a012", value: "0000000000000000000000000000" }
];

module.exports.getRecordedValues = asHex => {
  return serializedData.reduce((data, { uuid, value }) => {
    data[uuid] = asHex ? value : Buffer.from(value, "hex");
    return data;
  }, {});
};
