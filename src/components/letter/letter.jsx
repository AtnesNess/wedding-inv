import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './letter.scss';

export default class Letter extends React.PureComponent {
    static propTypes = {
        mix: PropTypes.string
    };

    render() {
        const {mix} = this.props;

        return (
            <section className={cx('letter', mix)}>
                asdasdsd sdad 
                asdasdsd sdad 
                asdasdsd sdad 
                asdasdsd sdad 
                asdasdsd sdad 
                asdasdsd sdad 
                asdasdsd sdad 
                asdasdsd sdad 
                asdasdsd sdad 
                asdasdsd sdad 
                asdasdsd sdad 
            </section>
        );
    }
}
