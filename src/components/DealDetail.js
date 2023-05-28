import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { priceDisplay } from '../util';
import ajax from '../ajax';

class DealDetail extends Component {
  static propTypes = {
    initialDealData: PropTypes.object.isRequired,
  };

  state = {
    deal: this.props.initialDealData,
  };

  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
    this.setState({ deal: fullDeal });
  }

  render() {
    const { deal } = this.state;

    return (
      <View style={styles.deal}>
        <Image source={{ uri: this.props.initialDealData.media[0] }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{deal.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{deal.cause && deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
        {deal.user && (
          <View>
            <Image source={{ uri: deal.user.avatar }} style={styles.avatar} />
            <Text>{deal.user.name}</Text>
          </View>
        )}
        <View>
          <Text>{deal.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 50,
    borderColor: '#bbb'
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor:'#ccc',

  },
 detail:{},
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    padding:10,
    backgroundColor: 'rgba(237,149,45, 0.4)'
  },
  footer: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent:'space-around',
    alignItems: 'center',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
});

export default DealDetail;

