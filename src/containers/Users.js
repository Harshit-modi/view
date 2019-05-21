import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Reactstrap from '../components/Reactstrap'
import { loadInitData, loadMoreData } from "../actions/loadMoreAction"

class Users extends Component {
    static propTypes = {
        userData: PropTypes.string.isRequired
    }

    handleLoadMore = () => {
        this.props.loadMoreData()
    }

    componentDidMount = () => {
        this.props.loadInitData()
    }

    render() {
        return (
            <div>
                <h1 style={{marginBottom: '30px'}}>Users</h1>
                <Reactstrap userData={this.props.userData}
                            onLoadMore={this.handleLoadMore}
                            isFetching={this.props.isFetching} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.users,
    isFetching: state.isFetching
   })

export default connect(mapStateToProps, {
    loadInitData,
    loadMoreData
})(Users);