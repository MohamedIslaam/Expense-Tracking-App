import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Welcome = ({ navigation, notFirst }) => {
    return (
        <View style={styles.bg}>
            <Image
                source={require('../../assets/welimg.png')
                }
                style={{ width: '100%', height: '45%', borderBottomLeftRadius: 70, borderBottomRightRadius: 70 }}
            />
            <View style={{ marginBottom: '15%', marginHorizontal: '10%', rowGap: 20 }}>
                <Text style={styles.text}>Simple solution for
                    your budget.</Text>
                <Text style={[styles.text, { fontSize: 15, fontWeight: '500' }]}>Counter and distribute the income
                    correctly...</Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'black', paddingVertical: 10, borderRadius: 5, alignItems: 'center', marginHorizontal: '15%' }}
                    onPress={()=> {
                        navigation.navigate('hp')
                        notFirst();
                    }}
                >
                    <Text style={{ color: 'white' }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    bg: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 30,
        fontWeight: '900'
    }
})