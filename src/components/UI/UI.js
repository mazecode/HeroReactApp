import React from 'react';
import PropTypes from 'prop-types';
import styles from './UI.module.scss';

const UI = () => (
  <div className={styles.UI} data-testid="UI">
    UI Component
  </div>
);

UI.propTypes = {};

UI.defaultProps = {};

export default UI;
