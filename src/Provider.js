import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {

    static propTypes = {
        children: PropTypes.element.isRequired,
        store: PropTypes.object.isRequired
    }

    static childContextTypes = {
        store: PropTypes.object.isRequired
    }

    getChildContext = () => {
        return {
            store: this.props.store
        }
    }

    render() {
        return this.props.children
    }

}

export default Provider;
