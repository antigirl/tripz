import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './index.scss';

const Loader = React.createClass({

    render() {
        if (!this.props.active) {
            return null;
        }

        return (
            <div className="loader">Loading...</div>
        );
    }

});

export default Loader;
