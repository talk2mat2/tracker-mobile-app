import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Switch,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {LOGOUTUSER} from '../../redux/action';

const HeaderHome = ({gridView, setGridView}) => {
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    setGridView(!gridView);
  };
  const handleLogout = () => dispatch(LOGOUTUSER());
  return (
    <View style={styles.container}>
      <View style={styles.switch}>
        <Text>Grid</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={'#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={gridView}
        />
        <Text>List</Text>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Image
          onP
          source={require('../media/logout.png')}
          style={styles.logout}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  switch: {
    flexDirection: 'row',
    width: 120,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logout: {
    height: 30,
    width: 30,
  },
  container: {
    height: 70,
    backgroundColor: '#fff',
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HeaderHome;
