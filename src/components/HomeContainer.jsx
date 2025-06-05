import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'


const HomeContainer = ({saving,income,expence,title}) => {
    return (
        <View style={{ margin: 20 }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#A6A3AB', fontSize: 18, fontWeight: 'bold' }}>{title} Saving</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 50 }}>{saving}</Text>
            </View>
            <View style={{ marginTop: 20, flexDirection: 'row', gap: 10 }}>
                <View style={{ borderRadius: 25, flexDirection: 'row', paddingVertical: 15, gap: 10, alignItems: 'center', justifyContent: 'center', flexGrow: 1, backgroundColor: '#00A86B' }}>
                    <View style={styles.box}><Text style={{ fontWeight: '900', fontSize: 30, color: '#00A86B' }}>↑</Text></View>
                    <View>
                        <Text style={[styles.text]}>Income</Text>
                        <Text style={[styles.text, { fontSize: 25 }]}>{income}</Text>
                    </View>
                </View>
                <View style={{ borderRadius: 25, flexDirection: 'row', gap: 10, paddingVertical: 15, alignItems: 'center', justifyContent: 'center', flexGrow: 1, backgroundColor: '#FD3C4A' }}>
                    <View style={styles.box}><Text style={{ fontWeight: '900', fontSize: 30, color: '#FD3C4A' }}>↓</Text></View>
                    <View>
                        <Text style={[styles.text]}>Expenses</Text>
                        <Text style={[styles.text, { fontSize: 25 }]}>{expence}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default HomeContainer

const styles = StyleSheet.create({
    box: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#FCFCFC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FCFCFC',
        fontWeight: 'bold'
    }
})