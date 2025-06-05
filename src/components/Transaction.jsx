import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import { ScrollView } from 'react-native-gesture-handler';
import FilterFunction from '../FilterFunction';
import SkeletonCard from '../SkeletonCard';

const Transaction = ({ route, transactionLists }) => {
  const rt = route && route.params && route.params.rt ? route.params.rt : "All";
  const [val, setVal] = useState(rt);
  const [val2, setVal2] = useState('All');
  const [list, setList] = useState(transactionLists || []);

  const data = [
    { label: 'All', value: 'All' },
    { label: 'Today', value: 'Today' },
    { label: 'Week', value: 'Week' },
    { label: 'Month', value: 'Month' },
    { label: 'Year', value: 'Year' }
  ];

  const data2 = [
    { label: 'All', value: 'All' },
    { label: 'Income', value: 'income' },
    { label: 'Expense', value: 'expense' }
  ];

  function SelectMapper(data) {
    if (val === 'Today') return FilterFunction.Today(data);
    if (val === 'Week') return FilterFunction.Week(data);
    if (val === 'Month') return FilterFunction.Month(data);
    if (val === 'Year') return FilterFunction.Year(data);
    if (val === 'All') return FilterFunction.All(data);
    return [];
  }

  function handleFilter() {
    let newList = SelectMapper(transactionLists);
    if (val2 === 'All') {
      setList(newList);
    } else {
      let filterList = newList.filter(itm => itm.type === val2);
      setList(filterList);
    }
  }

  useEffect(() => setVal(rt), [rt]);
  useEffect(() => setList(SelectMapper(transactionLists)), [val, transactionLists]);
  useEffect(() => handleFilter(), [val, val2]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Transactions</Text>
        <View style={styles.dropdownRow}>
          <Dropdown
            data={data}
            style={styles.drop}
            labelField={"label"}
            valueField={"value"}
            value={val}
            onChange={(itm) => setVal(itm.value)}
          />
          <Dropdown
            data={data2}
            style={styles.drop}
            labelField={"label"}
            valueField={"value"}
            value={val2}
            onChange={(itm) => setVal2(itm.value)}
          />
        </View>
        <View style={styles.listContainer}>
          {(!transactionLists || transactionLists.length == 0) ? (
            <View>
              {Array.from({length:10}).map((_,ind)=>(
                <SkeletonCard key={ind} />
              ))}
            </View>
          ) : (list.map((itm, index) => {
            const date = new Date(itm.date);
            const amountColor = itm.type === 'income' ? '#28a745' : '#dc3545';
            const amountPrefix = itm.type === 'income' ? '+' : '-';

            return (
              <View key={index} style={styles.card}>
                <View style={styles.row}>
                  <Text style={styles.leftText}>{itm.category}</Text>
                  <Text style={[styles.rightText, { color: amountColor }]}>
                    {amountPrefix}{itm.amount}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.noteText}>{itm.note}</Text>
                  <View>
                    <Text style={styles.timeText}>{date.toLocaleString('en-US',{dateStyle:'medium'})}</Text>
                    <Text style={styles.timeText}>{date.toLocaleString('en-US',{timeStyle:'short'})}</Text>
                  </View>
                </View>
              </View>
            )
          }))}
        </View>
      </View>
    </ScrollView>
  )
}

export default Transaction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F5F9',
    flex: 1,
  },
  innerContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#2B2D42',
  },
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  drop: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#CCCCCC',
    borderRadius: 25,
    flex: 1,
    height: 45,
    paddingHorizontal: 10,
  },
  listContainer: {
    marginTop: 20,
    gap: 15,
  },
  card: {
    backgroundColor: '#E8F0FE',
    borderRadius: 15,
    padding: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  leftText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  rightText: {
    fontSize: 16,
    fontWeight: '600',
  },
  noteText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
    textAlignVertical:'bottom'
  },
  timeText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'right',
    flex: 1,
  },
});