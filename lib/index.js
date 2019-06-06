const { connect, disconnect } = require("./connect");

(async () => {
  try {
    const de1 = await connect();
    console.log("connected");
    console.log(de1);
    await disconnect(de1);
    console.log("disconnected!");
  } catch (err) {
    console.log("An error occurred");
    console.error(err);
  }
})();
