import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import DateTimePickerModel from 'react-native-modal-datetime-picker';


const AddTransaction = ({ enter, setEnter, cat,handleAdd, setCat, des, setDes, typ, setTyp, tim, setTim }) => {
  let [show, setShow] = useState(false);
  let [sel, setSel] = useState('');
  let [date, setDate] = useState(new Date());

  function handleDate(selectedDate) {
    setDate(selectedDate);
    setTim(selectedDate.toISOString());
    setShow(false);
  }

  function handleAddTransaction() {
    if (!enter || !cat || !des || !typ || !tim) {
      Alert.alert('Error', 'Please fill all fields before adding the transaction.');
      return;
    }

    Alert.alert('Success', 'Transaction added successfully!');
    handleAdd();
    setEnter('');
    setCat('');
    setDes('');
    setTyp('');
    setTim('');
    setSel('');
    setDate(new Date());
  }
  return (
    <View style={{ padding: 20, backgroundColor: '#FEF6E6', flex: 1 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>Add Transaction</Text>
      <View style={{ marginVertical: 30 }}>
        <View>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>How Much?</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 50, fontWeight: 'bold' }}>₹</Text>
            <TextInput
              style={{ color: 'black', fontSize: 50, height: 85, flexGrow: 1, borderBottomWidth: 1, fontWeight: 'bold' }}
              keyboardType='number-pad'
              value={enter}
              onChangeText={(text) => setEnter(Number(text))}
            />
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: 'white', gap: 20, paddingVertical: 30, paddingHorizontal: 10, borderRadius: 20 }}>
        <TextInput
          style={styles.inp}
          placeholder='Category'
          placeholderTextColor={'#868686'}
          value={cat}
          onChangeText={setCat}
        />
        <TextInput
          style={styles.inp}
          placeholder='Description'
          placeholderTextColor={'#868686'}
          value={des}
          onChangeText={setDes}
        />
        <Text>Choose Type:</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
          <TouchableOpacity
            style={[styles.box, { backgroundColor: '#01A86B' }, (typ === 'income') ? { borderWidth: 2, borderColor: 'black' } : { borderWidth: 0 }]}
            onPress={() => setTyp('income')}
          >
            <Text>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, { backgroundColor: '#FD3C4B' }, (typ === 'expense') ? { borderWidth: 2, borderColor: 'black' } : { borderWidth: 0 }]}
            onPress={() => setTyp('expense')}
          >
            <Text>Expense</Text>
          </TouchableOpacity>
        </View>
        <Text>Choose Time:</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 10 }}>
          <TouchableOpacity
            style={[styles.box, { borderWidth: 1, paddingHorizontal: 25 }, (sel === 'now') ? { backgroundColor: '#868686' } : { backgroundColor: 'white' }]}
            onPress={() => {
              setSel('now')
              setTim(new Date().toISOString());
            }}
          >
            <Text>Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, { borderWidth: 1 }, (sel === 'cus') ? { backgroundColor: '#868686' } : { backgroundColor: 'white' }]}
            onPress={() => {
              setSel('cus')
              setShow(true)
            }}
          >
            <Text>Custom</Text>
          </TouchableOpacity>
        </View>
        <DateTimePickerModel
          mode='datetime'
          is24Hour={false}
          isVisible={show}
          onConfirm={handleDate}
          onCancel={() => { setShow(false); setSel('now'); setTim(new Date().toISOString()) }}
          date={date}
        />
        <View>
          <Text>{tim ? new Date(tim).toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' }):'select Date'}</Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#01A86B', padding: 10, borderRadius: 10 }}
          onPress={handleAddTransaction}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>
            Add Transaction
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddTransaction

const styles = StyleSheet.create({
  inp: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 17
  },
  box: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  }
})