import { View, Text, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { MMKV } from 'react-native-mmkv';
import Welcome from './components/Welcome';
import LandingPage from './components/LandingPage';
import axios from 'axios';

const Stack = createStackNavigator();
const store = new MMKV();
const api = axios.create({ baseURL: 'http://localhost:3000' })
const App = () => {
  const [isFirst, setIsFirst] = useState(store.getBoolean('first') ?? true);
  const [transactionLists, setTransactionLists] = useState([]);
  const [enter, setEnter] = useState(0);
  const [cat, setCat] = useState('');
  const [des, setDes] = useState('');
  const [typ, setTyp] = useState('');
  const [tim, setTim] = useState('');
  let [profile, setProfile] = useState(store.getString('profile') ?? 'https://img.icons8.com/color/48/administrator-male--v1.png');
  function notFirst() {
    store.set('first', false);
    setIsFirst(false);
  }
  useEffect(() => {
    render();
  }, [])

  async function render() {
    try {
      let list = await api.get('/transactions')
      setTransactionLists((list.data).reverse());
    }
    catch (err) {
      setTransactionLists([]);
      setTimeout(render(), 10000)
    }
  }

  async function handleAdd() {
    let id = (transactionLists.length > 0)
      ? Number(transactionLists[0].id) + 1
      : 1;
  
    let newDate = {
      id,
      type: typ,
      amount: enter,
      category: cat,
      note: des,
      date: tim
    };
  
    let newList = [...transactionLists, newDate];
    setTransactionLists(newList);
  
    await api.post('/transactions', newDate)
    .catch((err)=>Alert('Error','error'))
    render()
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isFirst ? 'welcome' : 'hp'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="welcome">
          {prev => <Welcome {...prev} notFirst={notFirst} />}
        </Stack.Screen>
        <Stack.Screen name="hp">
          {prev => <LandingPage {...prev}
            transactionLists={transactionLists}
            enter={enter}
            setEnter={setEnter}
            cat={cat}
            setCat={setCat}
            des={des}
            setDes={setDes}
            typ={typ}
            setTyp={setTyp}
            tim={tim}
            setTim={setTim}
            handleAdd={handleAdd}
            profile={profile}
            setProfile={setProfile}
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;