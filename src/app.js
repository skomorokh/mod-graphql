import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import legacyResolvers from './resolvers';

const legacyTypeDefs = fs.readFileSync('./src/master.graphql', 'utf-8');

function badRequest(response, reason) {
  response
    .status(400)
    .send(reason);
}

function checkOkapiHeaders(request, response, next) {
  // console.info('GraphQL query:', request.body);
  if (!request.get('X-Okapi-Url')) {
    badRequest(response, 'Missing Header: X-Okapi-Url');
  } else if (!request.get('X-Okapi-Tenant')) {
    badRequest(response, 'Missing Header: X-Okapi-Tenant');
  } else if (!request.get('X-Okapi-Token')) {
    badRequest(response, 'Missing Header: X-Okapi-Token');
  } else {
    next();
  }
}

const schema = makeExecutableSchema({ typeDefs: legacyTypeDefs, resolvers: legacyResolvers });

export default express()
  .post('/graphql', bodyParser.json(), checkOkapiHeaders, graphqlExpress(request => ({
    schema,
    // debug: false, // if you don't want error objects passed to console.error()
    context: {
      query: request.body,
      okapi: {
        url: process.env.OKAPI_URL || request.get('X-Okapi-Url'),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Okapi-Tenant': request.get('X-Okapi-Tenant'),
          'X-Okapi-Token': request.get('X-Okapi-Token')
        }
      },
      loggingCategories: process.env.LOGGING_CATEGORIES,
      // Supported: 'failsub,url,result'
    }
  })));
