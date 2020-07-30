import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Enquetes API',
    description: 'Node.js Rest API usando TDD, Clean Architecture e Typescript.',
    version: '1.6.0',
    contact: {
      name: 'Leonardo Figueiredo',
      url: 'https://www.linkedin.com/in/leonardo-paulo-figueiredo/'
    }
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
  },
  {
    name: 'Enquete'
  }],
  paths,
  schemas,
  components
}
