import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { white } from 'material-ui/styles/colors';
import { typography } from 'material-ui/styles';

const InfoBox = ({ color, title, value, Icon }) => {
  const styles = {
    content: {
      padding: '12px 10px',
      marginLeft: 90,
      height: 80,
      color: white,
    },
    number: {
      display: 'block',
      fontWeight: typography.fontWeightMedium,
      fontSize: 29,
    },
    text: {
      fontSize: 14,
      fontWeight: typography.fontWeightLight,
      textTransform: 'uppercase',
    },
    iconSpan: {
      float: 'left',
      height: 80,
      width: 85,
      textAlign: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
    icon: {
      height: 48,
      width: 48,
      marginTop: 20,
      maxWidth: '100%',
    },
  };

  return (
    <Paper style={{ backgroundColor: color }}>
      <span style={styles.iconSpan}>
        <Icon
          color={white}
          style={styles.icon}
        />
      </span>

      <div style={styles.content}>
        <span style={styles.text}>{title}</span>
        <span style={styles.number}>{value}</span>
      </div>
    </Paper>
  );
};

InfoBox.propTypes = {
  Icon: PropTypes.any, // eslint-disable-line
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InfoBox;
