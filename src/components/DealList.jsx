import {  View, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DealItem from '../components/DealItem'
import React from 'react'

class DealList extends React.Component {
  render() {
    const { deals } = this.props;
    return (
      <View style={styles.list}>
        <FlatList
          data={deals}
          renderItem={({ item }) => <DealItem deal={item} onPress={this.props.onItemPress}/> }
        />
      </View>
    );
  }
}

DealList.propTypes = {
  deals: PropTypes.array.isRequired,
  onItemPress: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  list: {
    marginTop:12,
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
  },
});

export default DealList;
