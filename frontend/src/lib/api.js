import requestManager from './requestManager'

export default {
  Session: {
    create: params => requestManager.post('/auth', params),
    delete: () => requestManager.delete('/auth'),
    restore: () => requestManager.get('/auth')
  },
  Clients: {
    get: () => requestManager.get('/clients')
  },
  Client: {
    update: params => requestManager.put(`/clients/${params.id}`, params),
    create: params => requestManager.post('/clients/', params),
    delete: id => requestManager.delete(`/clients/${id}`),
  },
  Departaments: {
    get: () => requestManager.get('/departaments')
  },
}
