import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './spin.scss';

const Spin = ({mix}) => (
    <div className={cx('spin', mix)} />
);

Spin.propTypes = {
    mix: PropTypes.string
};

export default Spin;