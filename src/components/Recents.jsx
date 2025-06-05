import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Transaction_lists from '../Transaction_lists'
import SkeletonCard from '../SkeletonCard';
const Recents = ({ select,SelectMapper,navigation,handleView,transactionLists }) => {
    let data = SelectMapper((!transactionLists || transactionLists.length === 0)?[]:transactionLists);
    return (
        <View style={{ margin: 20 }}>
            
            <Text style={styles.font}>{select === 'Today'?'Recent':null} Transactions</Text>
                
            
            {(!transactionLists || transactionLists.length === 0)?(
                <View>
                    {Array.from({length:5}).map((_,ind)=>(
                    <SkeletonCard key={ind}/>
                    ))}
                </View>
            ):(<View style={{ gap: 15, marginTop: 20 }}>
                {
                (data.length>=8?data.slice(0,8):data).map(itm => (
                    <View key={itm.id} style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, borderRadius: 10, elevation: 10 }, (itm.type === 'expense' ? { backgroundColor: '#B8B8B8' } : { backgroundColor: '#E6E6E6' })]}>
                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                            <View style={{ borderRadius: 50, backgroundColor: (itm.type === 'expense' ? '#FD3C4A' : '#00A86B') }}>
                                <Text style={{ color: 'white', fontSize: 25, fontWeight: 900, paddingHorizontal: 10, paddingVertical: 5 }}>{(itm.type === 'expense' ? '↓' : '↑')}</Text>
                            </View>
                            <Text style={[styles.font, { fontSize: 20 }]}>₹{itm.amount}</Text>
                        </View>
                        <Text style={[styles.font, { fontSize: 20 }]}>{itm.category}</Text>
                    </View>
                ))}
                {(data.length>=8?<TouchableOpacity onPress={()=>handleView(select)} ><Text style={{fontWeight:'bold',alignSelf:'center'}}>View All</Text></TouchableOpacity>:null)}
            </View>)}
        </View>
    )
}

export default Recents

const styles = StyleSheet.create({
    font: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})