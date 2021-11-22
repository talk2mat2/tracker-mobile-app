import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Card2 from '../components/card2';
import Card1 from '../components/card1';
import {useSelector} from 'react-redux';
import HeaderHome from '../components/header';

const Home = () => {
  const [gridView, setGridView] = React.useState(true);
  const fetchedData = useSelector(({fetchedData}) => fetchedData.resultsData);
  const usersResultsData2 = useSelector(state => state);
  const mapItems = () => {
    return (
      fetchedData &&
      fetchedData.length > 0 &&
      fetchedData.map((item, index) =>
        gridView ? <Card2 item={item} key={index} /> : <Card1 item={item} key={index} />,
      )
    );
  };

  React.useEffect(() => {
    console.log(usersResultsData2);
  }, []);
  return (
    <View style={styles.container}>
      <HeaderHome setGridView={setGridView} gridView={gridView} />
      <ScrollView>
        <View style={styles.items}>{mapItems()}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    padding: 10,
  },
  items: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    padding: 0,
    justifyContent: 'center',
  },
});

export default Home;
