exports.handler = async (event) => {
  const q = event.queryStringParameters || {};
  if (event.httpMethod === "GET") {
    if (q["hub.verify_token"] === "yerba2026") {
      return { statusCode: 200, body: q["hub.challenge"] };
    }
    return { statusCode: 403, body: "Forbidden" };
  }
  return { statusCode: 200, body: "OK" };
};

