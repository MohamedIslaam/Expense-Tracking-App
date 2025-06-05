import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import HomeContainer from './HomeContainer';
import NaviBar from './NaviBar';
import Recents from './Recents';
import { ScrollView } from 'react-native-gesture-handler';
import FilterFunction from '../FilterFunction';
import SkeletonCard from '../SkeletonCard';

const HomePage = ({ profile, setProfile, navigation, transactionLists }) => {
  let [select, setSelect] = useState('Today');
  let [saving, setSaving] = useState(0);
  let [income, setIncome] = useState(0);
  let [expence, setExpence] = useState(0);


  function SelectMapper(list) {
    if (select === 'Today') {
      return FilterFunction.Today(list);
    } else if (select === 'Week') {
      return FilterFunction.Week(list)
    } else if (select === 'Month') {
      return FilterFunction.Month(list)
    } else if (select === 'Year') {
      return FilterFunction.Year(list)
    }
    return []
  }

  useEffect(() => {

    let inc = 0;
    let exp = 0;
    let today_savings = SelectMapper(transactionLists);
    for (let index = 0; index < today_savings.length; index++) {
      if (today_savings[index].type === 'income') {
        inc += today_savings[index].amount
      } else if (today_savings[index].type === 'expense') {
        exp += today_savings[index].amount
      }
    }
    setIncome(inc);
    setExpence(exp);
    setSaving(inc - exp)
  }, [select, transactionLists])

  function handleView(page) {
    navigation.navigate('tran', { rt: page })
  }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#C6C4C3' }}>
      <View>
        <View style={{ backgroundColor: '#F2F2F2', paddingBottom: 20, borderBottomLeftRadius: 25, borderBottomRightRadius: 25 }}>
          <Header
            profile={profile}
            setProfile={setProfile}
          />
          <HomeContainer
            saving={saving}
            income={income}
            expence={expence}
            title={select}
          />
        </View>
        <View style={{ flex: 1, marginVertical: 20 }}>
          <NaviBar
            select={select}
            setSelect={setSelect}
          />
          <Recents
            select={select}
            SelectMapper={SelectMapper}
            handleView={handleView}
            navigation={navigation}
            transactionLists={transactionLists}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({});
