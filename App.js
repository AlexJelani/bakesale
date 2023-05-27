import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import ajax from './src/ajax';
import DealList from './src/components/DealList.jsx';
import DealDetail from './src/components/DealDetail';

class App extends Component {
  state = {
    deals: [],
    currentDealId: null,
  };

  async componentDidMount() {
    const fetchedDeals = await ajax.fetchInitialDeals();
    this.setState({ deals: fetchedDeals });
  }

  setCurrentDeal = (dealId) => {
    this.setState({ currentDealId: dealId });
  };

  currentDeal = () => {
    return this.state.deals.find((deal) => deal.key === this.state.currentDealId);
  };

  render() {
    const { deals, currentDealId } = this.state;

    if (currentDealId) {
      return <DealDetail initialDealData={this.currentDeal()} />;
    } else if (deals.length > 0) {
      return <DealList deals={deals} onItemPress={this.setCurrentDeal} />;
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>Bakesale</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    fontSize: 40,
  },
});

export default App;



