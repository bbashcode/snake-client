const {connect} = require("./client");
const {connection, setupInput} = require("./input");
console.log("Connecting ...");

setupInput(connect());