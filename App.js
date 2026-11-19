import {Image, StyleSheet, Text, TouchableOpacity, View, FlatList, SectionList, Button, Alert} from 'react-native';
import {FontAwesome6} from "@expo/vector-icons";

const datasource = [

  {
    data:[
      {name: 'Abra', num: 63},
      {name: 'Haunter', num: 93}
    ],
title:'Psychic', icon: 'eye', color: '#b743c4', textColor: '#ff9cf7'
  },
  {
    data:[
      {name: 'Pidgey', num: 16},
      {name: 'Doduo', num: 84}
    ],
    title: 'Colorless', icon: 'star-of-life', color: '#d9d9d9', textColor: '#636363'
  }
]

const renderItem = ({ item, index, section }) => {

  return (
      <TouchableOpacity>
        <View style={[styles.pokemonContainer, {backgroundColor: section.color}]}>
          <Text style={[styles.pokemonContainerText, {color: section.textColor}]}>{item.name}</Text>
          <Image source={{uri: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' + item.num + '-2x.png'}}
          style={{width: 200, height: 300}}/>
        </View>
      </TouchableOpacity>
  )
}


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{padding:20, marginHorizontal:10, borderWidth: 1}}>
        <Button onPress={() => {Alert.alert("I forgor how to")}} title={"Add Pokemon"}/>
      </View>
      <SectionList contentContainerStyle={{padding: 10}} sections={datasource} renderItem={renderItem}
      renderSectionHeader={({section: {title, icon, color, textColor}}) => (
        <View style={{backgroundColor: color, marginTop:20, alignItems: 'center', justifyContent: 'center', borderWidth: 1}}>
          <FontAwesome6 name={icon} size={20} color={textColor} style={{padding:20}}>
              <Text>{title}</Text>
          </FontAwesome6>
        </View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: 20
  },
  pokemonContainer: {
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  pokemonContainerText: {
    textWeight: 'bold',
    fontSize: 18
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
