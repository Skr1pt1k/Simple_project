import React, { useEffect } from 'react'
import HistoriesComponent from '../../components/Histories/HistoriesComponent'
import { historyGetRequest, historyCreateRequest } from '../../store/histories/actions'
import { actionCreateRequest } from '../../store/actions/actions'

import { connect } from 'react-redux'

const Histories = (props) => {

  const { getHistory, createAction, histories } = props

  const handleCreateRequest = params => {
    const action = {
      date: params.date,
      action_value: params.action,
      history_id: props.match.params.id,
    }
    createAction(action)
  }

  useEffect(() => {
    const { id } = props.match.params

    getHistory(id)
  }, [])

  return (
    <HistoriesComponent handleCreateRequest={handleCreateRequest} histories={histories}/>
  )
}

const mapStateToProps = state => ({
  histories: state.histories.items.history,
  fetching: state.histories.fetching,
})

const mapDispatchToProps = dispatch => ({
  getHistory: id => dispatch(historyGetRequest(id)),
  createAction: data => dispatch(actionCreateRequest({ data })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Histories)
