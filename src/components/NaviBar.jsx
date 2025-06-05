import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const NaviBar = ({select,setSelect}) => {
    const navs = ['Today', 'Week', 'Month', 'Year'];
    return (
        <View style={{flexDirection:'row',borderWidth:1,borderColor:'white',marginHorizontal:10,borderRadius:20}}>
            {navs.map((nav) => (
                <TouchableOpacity onPress={() => setSelect(nav)} key={nav} style={[{flexGrow:1,alignItems:'center',paddingVertical:10,borderRadius:20},(nav === select) ? { backgroundColor:'#0F0F0E' } : { backgroundColor: null }]}>
                    <Text style={[{fontWeight:'bold',fontSize:15},(nav === select) ? { color:'white' } : { color:'black' }]}>{nav}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default NaviBar

const styles = StyleSheet.create({})