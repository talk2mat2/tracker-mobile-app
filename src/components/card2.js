import React from 'react';
import {useDispatch} from 'react-redux';
import {DELETEUSERRESULT} from '../../redux/action';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
const Card2 = ({item}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    Alert.alert('DELETE', 'This user will be deleteed', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {text: 'OK', onPress: () => dispatch(DELETEUSERRESULT(item.id))},
    ]);
  };
  return (
    <View style={styles.card2}>
      <Image source={{uri: item.avatar}} style={styles.avater} />
      <View>
        <Text>{item.email}</Text>
        <Text>
          {item.first_name} {item.last_name}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <Image source={require('../media/delete.png')} style={styles.delete} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  delete: {
    height: 30,
    width: 30,
  },
  avater: {
    height: 80 + '%',
    width: 100,
    marginRight: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    padding: 6,
  },
  card2: {
    backgroundColor: '#fff',
    width: 95 + '%',
    elevation: 5,
    height: 100,
    margin: 5,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Card2;
