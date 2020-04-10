import React, { useState } from 'react'
import { Table, Media  } from 'reactstrap'

import TrashIcon from '../../assets/icons/trash.png'
import PencilIcon from '../../assets/icons/pencil.png'
import PaintIcon from '../../assets/icons/paint.png'
import ClientEditModal from './ClientsEditModal'

const ClientsTable = (props) => {
  const [modalOpened, changeStatusOfModal] = useState(false)
  const [clientValues, changeClientValues] = useState({})

  const { clients, handleDelete, handleUpdate, departaments } = props

  const toogleModal = (client) => {
    changeStatusOfModal(!modalOpened)
    changeClientValues(client)
  }

  const handleChange = (event) => {
    event.persist()

    if (event.target.type === 'select-one') {
      const index = event.target.selectedIndex
      const el = event.target.childNodes[index]
      const option =  el.getAttribute('id')
      changeClientValues(clientValues => ({ ...clientValues, departamentId: option }))
    }
    else {
      changeClientValues(clientValues => ({ ...clientValues, [event.target.name]: event.target.value }))
    }
  }

  const handleUpdateModal = (event, id) => {
    if (event) event.preventDefault()
    handleUpdate(clientValues, id)
    changeStatusOfModal(!modalOpened)
  }


  const renderTableData = () => {
    return clients.map((client) => {
      const { id, name, project, budget, estimate, start_date, last_message } = client //destructuring
      const departament  = client.departament[0]

      return (
        <tr key={ id }>
          <td className='no-border'>
            <div className='flex'>
              <Media className='c-pointer' src={ PaintIcon } width='20px' />
              <Media onClick={ () => toogleModal(client) } className='m-l-12 c-pointer' src={ PencilIcon } width='20px' />
              <Media onClick={ () => handleDelete(id) } className='m-l-12 c-pointer' src={ TrashIcon } width='20px' />
            </div>
          </td>
          <td>{name}</td>
          <td>{project}</td>
          <td>{ departament ? departament.name : ''}</td>
          <td>{estimate}</td>
          <td>{budget}</td>
          <td>{start_date}</td>
          <td className='clients-table__history'>{ !last_message ? 'Nothing yet' : last_message }</td>
        </tr>

      )
    })
  }

  return (
    <Table bordered className='clients-table'>
      <ClientEditModal handleUpdateModal={ handleUpdateModal } modalOpened={ modalOpened } toggleModal={ toogleModal } client={ clientValues } departaments={ departaments } handleChange={ handleChange } />
      <thead>
        <tr>
          <th></th>
          <th>Client</th>
          <th>Project</th>
          <th>Departament</th>
          <th>Estimate (h)</th>
          <th>Budget ($)</th>
          <th>Start Date</th>
          <th>History</th>
        </tr>
      </thead>
      <tbody>
        {clients && renderTableData()}
      </tbody>
    </Table>
  )
}

export default ClientsTable
