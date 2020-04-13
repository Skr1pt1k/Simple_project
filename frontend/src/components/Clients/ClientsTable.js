import React, { useState, useRef, useEffect } from 'react'
import { Table, Media  } from 'reactstrap'
import { Link } from 'react-router-dom'
import { TwitterPicker } from 'react-color';

import TrashIcon from '../../assets/icons/trash.png'
import PencilIcon from '../../assets/icons/pencil.png'
import PaintIcon from '../../assets/icons/paint.png'
import ClientEditModal from './ClientsEditModal'

const ClientsTable = (props) => {
  const [modalOpened, changeStatusOfModal] = useState(false)
  const [trToogleOpened, changeStatusOfTr] = useState({status: true, clientId: ''})
  const [clientValues, changeClientValues] = useState({})
  const [twitterColorPickerOpened, changeStatusOfTwitterColorPicker] = useState({status: false, clientId: ''})

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
      chanHistorHistoryTableiesComponentgeClientValues(clientValues => ({ ...clientValues, departamentId: option }))
    }
    else {
      changeClientValues(clientValues => ({ ...clientValues, [event.target.name]: event.target.value }))
    }
  }

   const handleChangeColor = (color, id) => {
    handleUpdate({ default_color: color.hex, id: id})
    changeStatusOfTwitterColorPicker({status: false})
   }

   const handleChangeTwitterColorPicker = (clientId) => {
    changeStatusOfTwitterColorPicker(twitterColorPickerOpened => ({ ...twitterColorPickerOpened, status: !twitterColorPickerOpened.status, clientId: clientId}))
   }

  const handleUpdateModal = (event, id) => {
    if (event) event.preventDefault()
    handleUpdate(clientValues, id)
    changeStatusOfModal(!modalOpened)
  }

  const renderTableData = () => {
    return clients.map((client) => {
      const { id, name, project, budget, estimate, start_date, last_message, history, default_color, manager } = client
      const departament  = client.departament[0]
      return (
        <tr key={ id } onMouseOver={() => changeStatusOfTr({status: false, clientId: id })} style={{backgroundColor: default_color}}>
          <td>
            <div className={trToogleOpened.status ? 'table-media table-media-hidden' : trToogleOpened.clientId === id  ? 'table-media table-media-visible' : 'table-media table-media-hidden'}>
              <Media onClick={(client) => handleChangeTwitterColorPicker(id)} className='m-l-12 c-pointer' src={ PaintIcon } width='20px' />
              <Media onClick={ () => toogleModal(client) } className='m-l-12 c-pointer' src={ PencilIcon } width='20px' />
              <Media onClick={ () => handleDelete(id) } className='m-l-12 c-pointer' src={ TrashIcon } width='20px' />
              <div>
                <TwitterPicker
                  color={clientValues.default_color}
                  colors={['#CAF7AE', '#FFFFC3', '#E6FFF9', '#ACC7ED', '#F4AD9C', '#DEACC3', '#E5E5E5', '#FFFFFF']}
                  onChangeComplete={ (color) => handleChangeColor(color, id) }
                  className={twitterColorPickerOpened.status === false ? 'twitter-picker twitter-picker-hidden' : twitterColorPickerOpened.clientId === id  ? 'twitter-picker' : 'twitter-picker twitter-picker-hidden'}
                />
              </div>
            </div>
            {name}
          </td>
          <td>{project}</td>
          <td>{departament ? departament.name : ''}</td>
          <td>{estimate}</td>
          <td>{budget}</td>
          <td>{start_date}</td>
          <td className='clients-table__history'><Link to={ `/history/${history.id}` }>{ !last_message ? 'Nothing yet' : (<><span className='client-td__bold'>{manager[0].name}:</span> <span>{last_message}</span></>)}</Link></td>
        </tr>
      )
    })
  }

  return (
    <Table bordered className='clients-table'>
      <ClientEditModal handleUpdateModal={ handleUpdateModal } modalOpened={ modalOpened } toggleModal={ toogleModal } client={ clientValues } departaments={ departaments } handleChange={ handleChange } />
      <thead>
        <tr>
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
