import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MMKV } from 'react-native-mmkv'
import ImagePicker from 'react-native-image-crop-picker';

const Profile = ({profile, setProfile}) => {
  let store = new MMKV();
  let list = [
    {
      title: 'Account',
      icon: 'https://img.icons8.com/color/48/conference-foreground-selected-skin-type-7.png'
    },
    {
      title: 'Setting',
      icon: 'https://img.icons8.com/fluency/48/settings.png'
    },
    {
      title: 'Export Data',
      icon: 'https://img.icons8.com/office/40/export.png'
    },
    {
      title: 'Logout',
      icon: 'https://img.icons8.com/plasticine/50/logout-rounded.png'
    }
  ]
  let [edit, setEdit] = useState(false);
  function handleGallery() {
    ImagePicker.openPicker({
      cropping: true,
      width: 80,
      height: 80
    }).then(image => {
      setProfile(image.path)
      store.set('profile', image.path)
      setEdit(false)
    })
  }

  function handleCamera() {
    ImagePicker.openCamera({
      cropping: true,
      height: 80,
      width: 80
    }).then(image => {
      setProfile(image.path);
      store.set('profile', image.path)
      setEdit(false)
    })
  }

  return (
    <View style={{ backgroundColor: '#FEF6E6', padding: 20, flex: 1 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>Profile</Text>
      <View style={styles.procont}>
        <View >
          <Image
            source={{ uri: profile }}
            style={styles.pro}
          />
        </View>
        <View style={styles.texcont}>
          <Text style={{ color: '#6B7280' }}>Username</Text>
          <Text style={{ fontSize: 25 }}>Islaam</Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: '#4EC9B0', height: 30, borderRadius: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}
          onPress={() => setEdit(true)}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lists}>
        {
          list.map((itm) => (
            <View style={[styles.listitm, (itm.title === 'Logout' ?
              { borderWidth: 0 } :
              { borderBottomColor: '#6B7280', borderBottomWidth: 1 }
            )]} key={itm.title}>
              <View style={[{ width: 60, height: 60, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
              (itm.title === 'Logout' ?
                { backgroundColor: '#FFE2E4' } :
                { backgroundColor: '#EEE5FF' }
              )]}>
                <Image
                  source={{ uri: itm.icon }}
                  style={{ width: 40, height: 40 }}
                />
              </View>
              <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{itm.title}</Text>
            </View>
          ))
        }
      </View>
      {edit &&
        <View style={{ width: '113%', justifyContent: 'space-evenly', height: 250, borderTopRightRadius: 20, borderTopLeftRadius: 20, backgroundColor: '#E0E0E0', position: 'absolute', bottom: 0, padding: 20 }}>
          <TouchableOpacity
            onPress={handleGallery}
            style={styles.button}>
            <Text style={styles.innerfont}>Pick from gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleCamera}
            style={styles.button}>
            <Text style={styles.innerfont}>Open camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setEdit(false)}
            style={styles.button}
          >
            <Text style={styles.innerfont}>Cancel</Text>
          </TouchableOpacity>
        </View>}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  procont: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 50,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 15
  },
  button: {
    backgroundColor: '#0082FC',
    padding: '15',
    alignItems: 'center',
    borderRadius: 10
  },
  innerfont: {
    color: 'white',
    fontWeight: 'bold'
  },
  pro: {
    borderWidth: 2,
    borderRadius: 100,
    width: 80,
    height: 80
  },
  texcont: {
    justifyContent: 'center'
  },
  lists: {
    backgroundColor: 'white',
    gap: 10,
    borderRadius: 20,
    padding: 10
  },
  listitm: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})