import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap';

const spinnerStyle = {
    position: 'fixed',
    background: 'white',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
}

const tableHeadingStyle = {
    fontWeight: 'bold',
    border: '1px solid'
}

const headingCell = {
    borderRight: '1px solid'
}

const dataStyle = {
    border: '1px solid',
    minHeight: '100px'
}

const dataCellStyle = {
}

export default class Reactstrap extends Component {
    static propTypes = {
        userData: PropTypes.object.isRequired,
        onLoadMore: PropTypes.func.isRequired
    }

    handleLoadMore = () => {
        this.props.onLoadMore()
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) && this.props.userData) {
            this.handleLoadMore()
        }
    }

    toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    }

    renderItem = ([key, item]) => {
        return (
            <div className="row align-items-center" key={key} style={dataStyle}>
                <div className="col-6 col-sm" style={dataCellStyle}>
                    <img src={item.picture.thumbnail} />
                </div>
                <div className="col-6 col-sm" style={dataCellStyle}>
                {this.toTitleCase(item.name.title)} {this.toTitleCase(item.name.first)} {this.toTitleCase(item.name.last)}
                </div>
                <div className="col-6 col-sm" style={dataCellStyle}>
                    {item.email}
                </div>
                <div className="col-6 col-sm" style={dataCellStyle}>
                    {new Date(item.dob.date).toLocaleDateString()}
                </div>
                <div className="col-6 col-sm" style={dataCellStyle}>
                    {item.location.street}, <br />
                    {item.location.city}, {item.location.state}. {item.location.postcode}
                </div>
                <div className="col-6 col-sm" style={dataCellStyle}>
                    {item.cell}
                </div>
            </div>
        )
    }

    render() {
        let usersList = Object.entries(this.props.userData).map(this.renderItem);
        let spinnerBlock = (
            <div style={spinnerStyle} className="d-flex align-items-center justify-content-center">
                <Spinner animation="border" />
            </div>);
        return (
            <div className="container">
                <div className="row" style={tableHeadingStyle}>
                    <div className="col-6 col-sm" style={headingCell}>
                        Picture
                    </div>
                    <div className="col-6 col-sm" style={headingCell}>
                        Name
                    </div>
                    <div className="col-6 col-sm" style={headingCell}>
                        Email
                    </div>
                    <div className="col-6 col-sm" style={headingCell}>
                        DOB
                    </div>
                    <div className="col-6 col-sm" style={headingCell}>
                        Address
                    </div>
                    <div className="col-6 col-sm" style={headingCell}>
                        Phone
                    </div>
                </div>
                {usersList}
                {this.props.isFetching ? spinnerBlock : null}
            </div>
        )
    }
}