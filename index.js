"use strict";

const AWS = require("aws-sdk");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async event => {

  console.log("request: " + JSON.stringify(event));

  const { id } = event.pathParameters;
  const params = {
    TableName: tableName,
    Key: {
      id: id
    }
  };

  const product = await dynamoDb.get(params).promise();

  const response = {
    statusCode: 200,
    body: JSON.stringify(product)
  };
  return response;
};
