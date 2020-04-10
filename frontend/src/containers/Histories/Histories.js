import React, { useEffect } from 'react'
import HistoriesComponent from '../../components/Histories/HistoriesComponent'
import { historyGetRequest } from '../../store/histories/actions'

import { connect } from 'react-redux'

const Histories = (props) => {

  const { getHistory } = props


  useEffect(() => {
    const { id } = props.match.params

    getHistory(id)
  }, [])

  return (
    <HistoriesComponent  />
  )
}

const mapStateToProps = state => ({
  histories: state.histories.items,
  fetching: state.histories.fetching,
})

const mapDispatchToProps = dispatch => ({
  getHistory: id => dispatch(historyGetRequest(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Histories)
