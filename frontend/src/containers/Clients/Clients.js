import React, { useEffect } from 'react'
import ClientsComponent from '../../components/Clients/ClientsComponent'
import { connect } from 'react-redux'
import { clientCreateRequest } from '../../store/clients/actions'
import { departamentsGetRequest } from '../../store/departaments/actions'
import { clientsGetRequest } from '../../store/clients/actions'

const Clients = (props) => {
  useEffect(() => {
    getClients(),
    getDepartaments()
  }, [])

  const { createClient, getClients, getDepartaments, departaments } = props

  const handleCreate = params => {
    const client = {
      client: {
        name: params.name,
        project: params.project,
        estimate: params.estimate,
        budget: params.budget,
        departament_id: params.departamentId,
        departament_attributes: { name: params.departament }
      }
    }
    createClient(client)
  }
  return (
    <ClientsComponent handleCreate={ handleCreate } departaments={ departaments } />
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
  createClient: (data) => dispatch(clientCreateRequest({ data }))
})


export default connect(mapStateToProps, mapDispatchToProps)(Clients)
