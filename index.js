const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello amigos from Lambda!")
  };
  return dynamoDb
    .get({
      TableName: "products",
      Key: {
        Id: "1"
      }
    })
    .promise();
};
