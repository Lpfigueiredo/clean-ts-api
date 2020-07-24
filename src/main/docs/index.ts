import { loginPath } from './paths'
import { badRequest, serverError, unauthorized, notFound } from './components'
import { accountSchema, loginParamsSchema, errorSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Enquetes API',
    description: 'Node.js Rest API usando TDD, Clean Architecture e Typescript',
    version: '1.3.0'
  },
  license: {
    name: 'ISC',
    url: 'https://opensource.org/licenses/ISC'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized,
    notFound
  }
}
