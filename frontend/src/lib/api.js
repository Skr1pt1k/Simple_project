import requestManager from './requestManager'

export default {
  Session: {
    create: params => requestManager.post('/auth', params),
    delete: () => requestManager.delete('/auth'),
    restore: () => requestManager.get('/auth')
  }
}
