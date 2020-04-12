import React, { useEffect } from 'react'
import ClientsComponent from '../../components/Clients/ClientsComponent'
import { connect } from 'react-redux'
import { clientCreateRequest } from '../../store/clients/actions'
import { departamentsGetRequest } from '../../store/departaments/actions'
import { clientsGetRequest, clientUpdateRequest, clientDeleteRequest } from '../../store/clients/actions'

const Clients = (props) => {
  useEffect(() => {
    getClients(),
    getDepartaments()
  }, [])

  const { createClient, getClients, updateClient, deleteClient, getDepartaments, departaments, clients } = props

  const handleCreateRequest = params => {
    const client = {
      client: {
        name: params.name,
        project: params.project,
        estimate: params.estimate,
        budget: params.budget,
        start_date: params.start_date,
        departament_id: params.departamentId
      }
    }
    createClient(client)
  }

  const handleUpdateRequest = params => {
    const client = {
      name: params.name,
      project: params.project,
      estimate: params.estimate,
      budget: params.budget,
      start_date: params.start_date,
      departament_id: params.departamentId,
      default_color: params.default_color
    }
    updateClient(client, params.id)
  }

  const handleDeleteRequest = id => {
    if (window.confirm('Delete this client?')) {
      deleteClient(id)
    }
  }

  return (
    <ClientsComponent handleUpdateRequest={ handleUpdateRequest } handleDeleteRequest={ handleDeleteRequest } handleCreateRequest={ handleCreateRequest } departaments={ departaments } clients={ clients } />
  )
}

const mapStateToProps = state => ({
  clients: state.clients.items,
  fetching: state.clients.fetching,
  departaments: state.departaments.items
})

const mapDispatchToProps = dispatch => ({
  getClients: () => dispatch(clientsGetRequest()),
  getDepartaments: () => dispatch(departamentsGetRequest()),
  updateClient: (client, id) => dispatch(clientUpdateRequest({ client, id })),
  createClient: data => dispatch(clientCreateRequest({ data })),
  deleteClient: id => dispatch(clientDeleteRequest(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients)
