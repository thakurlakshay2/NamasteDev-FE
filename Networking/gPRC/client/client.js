const grpc = require("@grpc/grpc-js");
const protoloader = require("@grpc/proto-loader");
const PROTO_PATH = "./customer.proto";

const packageDifination = protoloader.loadSync(PROTO_PATH, {
  keepCase: true,
  logs: String,
  enums: String,
  arrays: true,
});

const CustomerService =
  grpc.loadPackageDefinition(packageDifination).CustomerService;

const client = new CustomerService(
  "127.0.0.1:30043",
  grpc.credentials.createInsecure()
);

module.exports = client;
