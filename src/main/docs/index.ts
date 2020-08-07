import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Enquetes API',
    description: 'Node.js Rest API usando TDD, Clean Architecture e Typescript.',
    version: '1.7.0',
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
    name: 'Login',
    description: 'APIs relacionadas a Login'
  },
  {
    name: 'Enquete',
    description: 'APIs relacionadas a Enquete'
  }],
  paths,
  schemas,
  components
}
