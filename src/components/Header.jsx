import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MMKV } from 'react-native-mmkv';

const Header = ({profile, setProfile}) => {
  let store = new MMKV();
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [name, setName] = useState('Islaam');

  useEffect(() => {
    let currentDate = new Date();
    setDay(currentDate.toLocaleDateString('en-US', { weekday: 'long' }));
    setDate(currentDate.toLocaleDateString('en-US', { day: 'numeric' }));
    setMonth(currentDate.toLocaleDateString('en-US', { month: 'long' }));
  }, []);

  return (
    <View style={{ borderBottomWidth: 1, margin: 20, padding: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <View style={{ flexDirection: 'row', gap: 5 }}>
            <Text style={{ fontWeight: 'bold' }}>{day}</Text>
            <Text style={{ fontWeight: 'bold' }}>{date}</Text>
          </View>
          <Text style={{ fontWeight: 'bold' }}>{month}</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <View>
            <Image
              source={{ uri: profile }}
              style={{ borderWidth: 1, width: 40, height: 40, borderRadius: 100 }}
            />
          </View>
          <Text style={{ fontWeight: 'bold' }}>{name}</Text>
        </View>
      </View>
    </View>
  );
}

export default Header