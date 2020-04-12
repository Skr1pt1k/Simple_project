import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ActionTable from './ActionTable'
import HistoryAddForm from './HistoryAddForm'

const HistoriesComponent = (props) => {
  const { handleCreateRequest, histories } = props

  const handleSubmit = (event, values) => {
    if (event) event.preventDefault()
    handleCreateRequest(values)
  }

  return (
    <div className='histories'>
      <Container>
        <Row>
          <Col>
            <div className='histories__header header-history'>
              <div className='header-history__block'>
                <span className='header-history__span'>Client:</span>
                <span className='header-history__span header-history__span-left header-history__span-bold'>{histories && histories.client.name}</span>
              </div>
             <div className='header-history__block'>
               <span className='header-history__span'>Project:</span>
               <span className='header-history__span header-history__span-left header-history__span-bold'>{histories && histories.client.project}</span>
             </div>
             <div className='header-history__block'>
               <span className='header-history__span'>Departament:</span>
               <span className='header-history__span header-history__span-left header-history__span-bold'>{histories && histories.departament[0] ? histories.departament[0].name : 'Without departament'}</span>
             </div>
            </div>
            <HistoryAddForm handleSubmit={handleSubmit}/>
            <ActionTable histories={histories}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default HistoriesComponent
