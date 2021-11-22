import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Api from '../../api';
import {FETCHDATASUCCESS} from '../../redux/action';
import {LOGINSUCCESS} from '../../redux/action';

const Login = () => {
  const dispatch = useDispatch();
  const [formResponse, setFormresponse] = React.useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = React.useState(false);
  const token = useSelector(state => (state.user ? state.user.token : ''));
  const handleChangeText = (text, value) => {
    setFormresponse({...formResponse, [value]: text});
  };
  const handleLoginNow = async () => {
    if (!formResponse.email) {
      return Alert.alert('Kindly Provide A valid Email');
    }
    if (!formResponse.password) {
      return Alert.alert('You forgot to provide a password');
    }
    setLoading(true);
    return await Api.login(formResponse)
      .then(async Response => {
        //   we should have fetch all users on the home page on component did mount
        //but since deleted data needed to be persisted, so we decided to tech it here once user logs in
        //successfully
        setLoading(false);
        Api.fetchUsers(token)
          .then(response => dispatch(FETCHDATASUCCESS(response.data)))
          .then(() => dispatch(LOGINSUCCESS(Response)));
      })
      .catch(err => {
        setLoading(false);
        err.error && Alert.alert(err.error);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Welcome Back,to<Text style={styles.boldText}> Tracker</Text>
        </Text>
      </View>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <View style={styles.auth}>
            <TextInput
              onChangeText={text => handleChangeText(text, 'email')}
              placeholder="Email address"
              style={styles.input}
              autoCapitalize="none"
            />
            <TextInput
              value={formResponse.password}
              onChangeText={text => handleChangeText(text, 'password')}
              secureTextEntr={true}
              placeholder="Password"
              style={styles.input}
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity onPress={handleLoginNow} style={styles.button}>
            {loading ? (
              <ActivityIndicator size="small" color="#f2f2f2" />
            ) : (
              <Text style={styles.btntxt}>Login</Text>
            )}
          </TouchableOpacity>

          <View style={styles.socialSection}>
            <Image
              source={require('../media/google.png')}
              style={styles.social}
            />
            <Image source={require('../media/fb.png')} style={styles.social} />
            <Text style={{marginLeft: 40}}>Forgot Password?</Text>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  socialSection: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    marginTop: 50,
    padding: 30,
  },
  btntxt: {
    color: '#f2f2f2',
    fontSize: 25,
  },
  headerText: {
    fontSize: 40,
    color: '#000',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  auth: {
    paddingTop: 80,
  },
  input: {
    borderBottomColor: '#808080',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  social: {height: 30, width: 30, margin: 10},
  button: {
    height: 60,
    marginTop: 60,
    backgroundColor: '#1E90FF',
    color: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
