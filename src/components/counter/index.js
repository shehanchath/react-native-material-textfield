import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    limit: PropTypes.number,

    fontSize: PropTypes.number,

    baseColor: PropTypes.string.isRequired,
    errorColor: PropTypes.string.isRequired,

    style: Text.propTypes.style,
  };
  
  renderLimit = ( minLimit, limit, count ) => {
    if ( minLimit ) {
      if ( count < minLimit ) {
        return `${ minLimit }+`
      } else {
        return limit
      }
    } else {
      return limit
    }
  }

  render() {
    let { count, limit, minLimit, baseColor, errorColor, fontSize, style } = this.props;

    let textStyle = {
      color: ( (count > limit) || (minLimit > count) )? errorColor : baseColor,
      fontSize,
    };

    if (!limit) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={[styles.text, style, textStyle]}>
          {count} / {this.renderLimit(minLimit,limit,count)}
        </Text>
      </View>
    );
  }
}
