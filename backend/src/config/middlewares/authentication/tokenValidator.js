const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: process.env.SECRET_CACHE,
    rateLimit: process.env.SECRET_RATE_LIMIT,
    jwksRequestsPerMinute: process.env.SECRET_REQUEST_PER_MINUTE,
    jwksUri: process.env.SECRET_URI,
  }),
  audience: process.env.AUDIENCE,
  issuer: process.env.ISSUER,
  algorithms: process.env.ALGORITHMS,
});

module.exports = jwtCheck;
