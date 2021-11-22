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
  TouchableOpacity,
  Alert,
} from 'react-native';
const Card1 = ({item}) => {
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
    <View style={styles.card1}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <Text>{item.email}</Text>
      <Text>
        {item.first_name} {item.last_name}
      </Text>
      <TouchableOpacity onPress={handleDelete}>
        <Image source={require('../media/delete.png')} style={styles.delete} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  delete: {
    height: 20,

    width: 20,
  },
  avatar: {
    height: 70 + '%',
    width: 90 + '%',
    marginBottom: 3,
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    padding: 6,
  },
  card1: {
    width: Dimensions.get('window').width * 0.44,
    backgroundColor: '#fff',
    elevation: 5,
    height: 220,
    margin: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
});

export default Card1;
