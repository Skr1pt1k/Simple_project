import React from 'react'
import { Container, Row, Col, Table } from 'reactstrap'

const HistoryTable = (props) => {
  const { histories } = props

  const renderTableData = () => {

    return histories.actions.map((action) => {
      return (
        <tr key={ action.id }>
          <td>{action.date}</td>
          <td>{action.user.name}</td>
          <td className='action__td'>{action.action}</td>
        </tr>
      )
    })
  }

  return (
    <Table bordered className='actions-table'>
      <thead>
        <tr>
          <th>Date</th>
          <th>Manager</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {histories && renderTableData()}
      </tbody>
    </Table>
  )
}

export default HistoryTable
