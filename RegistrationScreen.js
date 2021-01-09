import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    TextInput,
    StatusBar,
    ScrollView
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
//import LoginScreen from './LoginScreen';
const RegistrationScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor="#41E3F2" barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.text_header}>Register</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <Text style={styles.text_footer}>Mobile No.</Text>
                    <View style={styles.action}>
                        
                        <TextInput
                            keyboardType="number-pad"
                            placeholder="Enter Mobile No."
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => ('')}
                        />
                        
                    </View>
                    <Text style={styles.text_footer}>Name</Text>
                    <View style={styles.action}>
                        
                        <TextInput
                            placeholder="Name*"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => ('')}
                        />
                        
                    </View>
                    <Text style={styles.text_footer}>Enter Aadhar Number</Text>
                    <View style={styles.action}>
                        
                        <TextInput
                            placeholder="aadhar no."
                            style={styles.textInput}
                            keyboardType="number-pad"
                            autoCapitalize="none"
                            onChangeText={() => ('')}
                        />
                        
                    </View>
                    <Text style={styles.text_footer}>Address</Text>
                    <View style={styles.action}>
                        <TextInput
                            style={{ flex: 1 }}
                            keyboardType="number-pad"
                            placeholder="Pincode*"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => ('')}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Region"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => ('')}
                        />
                    </View>
                    <View style={styles.action}>
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Taluk"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => ('')}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="Distict"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => ('')}
                        />
                        <TextInput
                            style={{ flex: 1 }}
                            placeholder="State"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => ('')}
                        />
                        
                    </View>
                    <Text style={styles.text_footer}>Create Password</Text>
                    <View style={styles.action}>
                        
                        <TextInput
                            placeholder="Enter Password"
                            secureTextEntry={true}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() => ('')}
                        />
                        
                    </View>
                    <Text style={styles.text_footer}>Confirm Password</Text>
                    <View style={styles.action}>
                        
                        <TextInput
                            placeholder="Confirm Your Password"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={() =>('')}
                        />
                    </View>
                    <View style={styles.button}>
                        <LinearGradient
                            colors={['#08d4c4', '#01E3F2']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: "#fff"
                            }]}>Sign Up</Text>
                        </LinearGradient>

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={[styles.signIn, {
                                borderColor: "#41E3F2",
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, { color: '#41E3F2' }]}
                            >Sign In</Text>

                        </TouchableOpacity>
                    </View>
                </Animatable.View>

            </View>
        </ScrollView>
    );
}

export default RegistrationScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#41E3F2'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#545454',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});