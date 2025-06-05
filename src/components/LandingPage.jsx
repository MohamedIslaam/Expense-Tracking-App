import { Image, View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';
import Transaction from './Transaction';
import AddTransaction from './AddTransaction';
import Profile from './Profile';

const Tab = createBottomTabNavigator();
const LandingPage = ({ profile, setProfile, transactionLists, enter, handleAdd, setEnter, cat, setCat, des, setDes, typ, setTyp, tim, setTim }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case 'home':
              label = 'Home';
              break;
            case 'tran':
              label = 'Transactions';
              break;
            case 'add':
              label = 'Add';
              break;
            case 'profile':
              label = 'Profile';
              break;
          }
          return (
            <Text style={{ color: focused ? 'lightblue' : 'gray', fontSize: 12 }}>
              {label}
            </Text>
          );
        },
        tabBarIcon: ({ focused }) => {
          let iconUrl;
          switch (route.name) {
            case 'home':
              iconUrl = 'https://img.icons8.com/material-rounded/24/home.png';
              break;
            case 'tran':
              iconUrl = 'https://img.icons8.com/ios-glyphs/30/transaction.png';
              break;
            case 'add':
              iconUrl = 'https://img.icons8.com/fluency-systems-filled/48/add-item.png';
              break;
            case 'profile':
              iconUrl = 'https://img.icons8.com/fluency-systems-regular/48/user--v2.png';
              break;
          }
          return (
            <Image
              source={{ uri: iconUrl }}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? 'lightblue' : 'gray'
              }}
            />
          );
        }
      })}
    >
      <Tab.Screen name="home">
        {prev => <HomePage {...prev}
          transactionLists={transactionLists}
          profile={profile}
          setProfile={setProfile}
        />}
      </Tab.Screen>
      <Tab.Screen name="tran">
        {prev => <Transaction {...prev} transactionLists={[...transactionLists]} />}
      </Tab.Screen>
      <Tab.Screen name="add">
        {prev => (
          <AddTransaction
            {...prev}
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
          />
        )}
      </Tab.Screen>
      {/* <Tab.Screen name="profile" component={Profile} /> */}
      <Tab.Screen name="profile">
        {prev => <Profile {...prev}
          profile={profile}
          setProfile={setProfile}
        />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default LandingPage