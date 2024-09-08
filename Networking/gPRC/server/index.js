const grpc = require("@grpc/grpc-js");
const protoloader = require("@grpc/proto-loader");
const PROTO_PATH = "./customer.proto";

const packageDifination = protoloader.loadSync(PROTO_PATH, {
  keepCase: true,
  logs: String,
  enums: String,
  arrays: true,
});

const customersProto = grpc.loadPackageDefinition(packageDifination);
const server = new grpc.Server();

const customers = [
  {
    id: 1,
    name: "lakshay",
    address: "efdoeifj3",
    age: 21,
  },
  {
    id: 2,
    name: "lakshay2",
    address: "dwdifj3",
    age: 22,
  },
  {
    id: 3,
    name: "lakshay3",
    address: "hhfdoeifj3",
    age: 23,
  },
];
server.addService(customersProto.CustomerService.service, {
  getAll: (call, callback) => {
    callback(null, { customers });
  },
  get: (call, callback) => {},
  insert: (call, callback) => {},
  update: (call, callback) => {},
  remove: (call, callback) => {},
});

server.bindAsync(
  "127.0.0.1:30043",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    // if (!err) server.start();
    // else console.log(err);
  }
);

//this cod only has one service , rest will follow similar logic , get wil return one customer
