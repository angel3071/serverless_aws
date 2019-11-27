const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {

  const params = {
    TableName: "products",
    Key: {
      Id: "1"
    }
  };

  const product = await dynamoDb.get(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(product)
  };
  return response;
};
