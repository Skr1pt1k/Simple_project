import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ClientsAddForm from './ClientsAddForm'
import ClientsTable from './ClientsTable'

const ClientsComponent = (props) => {
  const [values, setValues] = useState({})

  const { handleCreateRequest, handleUpdateRequest, handleDeleteRequest, departaments, clients } = props

  const handleChange = (event) => {
    event.persist()
    if (event.target.type === 'select-one') {
      const index = event.target.selectedIndex
      const el = event.target.childNodes[index]
      const option =  el.getAttribute('id')
      setValues(values => ({ ...values, departamentId: option }))
    }
    else {
      setValues(values => ({ ...values, [event.target.name]: event.target.value }))
    }
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    handleCreateRequest(values)
    setValues({created: true})
    setTimeout(() => {
      setValues({})
    }, 1200)
  }

  return (
    <div className='clients'>
      <Container>
        <Row>
          <Col>
            <ClientsAddForm values={ values } handleSubmit={ handleSubmit } handleChange={ handleChange } departaments={ departaments } />
            <ClientsTable handleUpdate={ handleUpdateRequest } handleDelete={ handleDeleteRequest } clients={ clients } departaments={ departaments } />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ClientsComponent
