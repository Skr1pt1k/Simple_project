import React, { useState } from 'react'
import { Container, Row, Col, Input, Button, Form, FormGroup } from 'reactstrap'

const ClientsComponent = (props) => {
  const [values, setValues] = useState({})

  const { handleCreate, departaments } = props

  const handleChange = (event) => {
    event.persist()
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  const handleChangeSelect = (event) => {
    event.persist()
    const index = event.target.selectedIndex
    const el = event.target.childNodes[index]
    const option =  el.getAttribute('id')
    setValues(values => ({ ...values, departament: event.target.value, departamentId: option }))
  }

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    handleCreate(values)
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
            <Form className='clients__form form-clients' onSubmit={ handleSubmit }>
              <FormGroup className='form-clients__group'>
                <Input
                  type="text"
                  name="name"
                  onChange={ handleChange }
                  value={ values.name || '' }
                  placeholder="Name"
                  required
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup className='form-clients__group'>
                <Input
                  type="text"
                  name="project"
                  onChange={ handleChange }
                  value={ values.project || '' }
                  placeholder="Project"
                  required
                  autoComplete="off"
                />
              </FormGroup>
              <FormGroup className='form-clients__group form-clients__group-size'>
                <Input className='form-clients__select' type="select" onChange={ (e) => handleChangeSelect(e) } defaultValue=''>
                  {departaments.map(d =>
                    <option id = { d.id } key={ d.id } value={ d.name } >{d.name}</option>
                  )};
                </Input>
              </FormGroup>
              <FormGroup className='form-clients__group'>
                <Input
                  type="number"
                  name="estimate"
                  onChange={ handleChange }
                  value={ values.estimate || '' }
                  placeholder="Est"
                />
              </FormGroup>
              <FormGroup className='form-clients__group'>
                <Input
                  type="number"
                  name="budget"
                  onChange={ handleChange }
                  value={ values.budget || '' }
                  placeholder="Budget"
                />
              </FormGroup>
              <Button className='form-clients__button'>Create</Button>
              { values.created ? <span className='form-clients__created'>Created!</span> : null}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ClientsComponent
