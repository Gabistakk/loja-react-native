import { React, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Input } from '@rneui/themed';
import { MaterialIcons, AntDesign, Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';



export default function App() {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Usuario" component={User} options={{
      tabBarLabel: 'User',
      tabBarIcon: ({ color, size }) => (
        <Feather name="user" size={size} color={color} />),
    }}/>
        <Tab.Screen name="Loja" component={Compra} options={{
      tabBarLabel: 'Loja',
      tabBarIcon: ({ color, size }) => (
        <FontAwesome5 name="store" size={size} color={color} />),
    }}/>
        <Tab.Screen name="Favorite" component={Favorite} options={{
      tabBarLabel: 'User',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="heart-circle" size={size} color={color} />),
    }}/>
      </Tab.Navigator>
    </NavigationContainer>

  );
}


export function User() {

  const [name, setName] = useState('Lucas de Oliveira')
  const [actualText, setActualText] = useState('')

  function mudarNome() {
    setName(actualText);
    this.textInput.clear();
  }


  return (
    <View style={styles.container}>
      <Image style={styles.imagemPFP} source={require('./assets/pfp.jpg')} />
      <Text style={{ fontSize: 30, }}>{name}</Text>
      <View style={{ height: 60 }}></View>
      <Text style={{ fontSize: 20 }}>Alterar nome</Text>
      <Input
        onChangeText={(text) => setActualText(text)}
        ref={input => { this.textInput = input }}
        placeholder='ALTERE SEU NOME'
      />
      <MaterialIcons name="update" size={70} color="black" onPress={mudarNome} />
    </View>
  );
}


export function Favorite() {
  return (
    <View style={styles.container}>
      <Text>favorite</Text>
    </View>
  );
}


export function Compra() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          <Produto
            text={'Celular Xiaomi'}
            image={require('./assets/celular1.jpg')}
          />
          <Produto
            text={'Iphone 14 Pro 128GB'}
            image={require('./assets/iphone.jpg')}
          />
        </View>
        <View style={styles.containerButtons}>
          <Produto
            text={'Tablet Samsung'}
            image={require('./assets/tablet.jpg')}
          />
          <Produto
            text={'Notebook Samsung'}
            image={require('./assets/notebook.jpg')}
          />
        </View>
        <View style={styles.containerButtons}>
          <Produto
            text={'Alexa Smart'}
            image={require('./assets/alexa.jpg')}
          />
          <Produto
            text={'Google Home'}
            image={require('./assets/google-home.jpg')}
          />
        </View>
        <View style={styles.containerButtons}>
          <Produto
            text={'Playstation 5'}
            image={require('./assets/ps5.jpg')}
          />
          <Produto
            text={'Nintendo Switch'}
            image={require('./assets/switch.jpeg')}
          />
        </View>
      </View>
    </ScrollView>
  );
}


function Produto(props) {
  const [loaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.containerVenda}>
      <Text style={{ fontSize: 20, fontFamily: 'Roboto-Regular' }}>{props.text}</Text>
      <Image style={styles.imagemVenda} source={props.image}></Image>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: '100%'}}>
        <AntDesign name="heart" size={36} color="red" />
        <AntDesign name="shoppingcart" size={36} color="black" />
      </View>
    </View>
  );
}


const windowWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  imagemPFP: {
    height: 200,
    width: 200,
    borderRadius: 300
  },
  input: {
    width: 50
  },
  containerVenda: {
    width: windowWidth / 2.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    borderRadius: 20,
    padding: 10,
    marginBottom: 15,
    marginTop: 15,
    elevation: 24,

  },

  imagemVenda: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain'
  },

  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    gap: 35,
  }

});