const { Tcl } = require("tcl");

const tcl = new Tcl();

function cmd(cmdStr) {
  return new Promise((resolve, reject) => {
    tcl.cmd(cmdStr, (err, result) => (err ? reject(err) : resolve(result)));
  });
}

function eval(cmdStr) {
  return new Promise((resolve, reject) => {
    tcl.eval(cmdStr, (err, result) => (err ? reject(err) : resolve(result)));
  });
}

module.exports.cmd = cmd;
module.exports.eval = eval;
