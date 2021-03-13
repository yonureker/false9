import React, {useState} from 'react';
import {
  ImageBackground,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Auth} from 'aws-amplify';

const backgroundImage = require('../../../assets/false9_background.png');
const logo = require('../../../assets/false9_logo.png');

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState(null);
  const [phone_number, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState('12345678');

  const signUpUser = async () => {
    try {
      const {user} = await Auth.signUp({
        username,
        password,
        attributes: {
          phone_number, // optional - E.164 number convention
          // other custom attributes
        },
      });

      navigation.navigate('Verify', {
        phoneNumber: phone_number,
        username: username,
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <View style={[styles.container, styles.logo]}>
        <Image source={logo} />
      </View>
      <View style={[styles.container, styles.form]}>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter team name"
            onChangeText={(text) => setUsername(text)}
            style={styles.textInput}
          />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter phone number"
            onChangeText={(number) => setPhoneNumber(number)}
            style={styles.textInput}
            keyboardType="numeric"
          />
        </View>
        <View>
          <Text style={styles.smallText}>
            By signing up, you agree to our terms & conditions, competition
            rules and acknowledge our privacy notice.
          </Text>
        </View>
        <View style={styles.button}>
          <Pressable onPress={() => signUpUser()}>
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
        <View>
          <Text style={styles.smallText}>Already have an account? Sign In</Text>
        </View>
      </View>

      <View style={styles.footer}></View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 2,
  },
  form: {
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '300@ms',
    maxHeight: '300@ms',
  },
  textInputContainer: {
    height: '50@ms',
    width: '300@ms',
    backgroundColor: '#7ABDC9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  button: {
    width: '150@ms',
    height: '50@ms',
    backgroundColor: '#0D7D8F',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'LexendDeca-Regular',
    fontSize: '16@ms',
  },
  footer: {
    flex: 1,
  },
  smallText: {
    color: 'white',
    fontSize: '14@ms',
    textAlign: 'center',
    fontFamily: 'LexendDeca-Regular',
  },
  textInput: {
    fontSize: '16@ms',
    textAlign: 'center',
    fontFamily: 'LexendDeca-Regular',
    width: '100%',
  },
});
