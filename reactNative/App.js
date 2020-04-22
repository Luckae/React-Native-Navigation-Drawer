/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import ServiceScreen from './screens/ServiceScreen';

import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import black from './assets/images/black.jpeg';
import fav from './assets/images/fav.png';

 class App extends Component{
   render(){
     return(
      <App2 />
     );
   }
 }

 const CustomDrawerContentComponent = (props)=>(
   <View>
     <SafeAreaView>
       <View style={{justifyContent:'center', height:200}}>
        <ImageBackground source={black} style={styles.backgroundContainer}/>
        <Image source={fav} style={styles.drawerImage} />
        <Text style={styles.imageText}>
           ... Stunning innovations
        </Text>
       </View>
       <View>
        <DrawerItems {...props} />
       </View>
     </SafeAreaView>
   </View>
 )

 const DrawerNavigator = createDrawerNavigator({
   Home:{
     screen:HomeScreen,
     navigationOptions:{
       drawerIcon: (
         <Icon name="home" size={24} color="#cc5500" />
       ),
     },
   },
   About:{
    screen:AboutScreen,
    navigationOptions:{
      drawerIcon: (
        <Icon name="info-circle" size={24} color="#cc5500" />
      ),
    },
  },

  Contact:{
    screen:ContactScreen,
    navigationOptions:{
      drawerIcon: (
        <Icon name="envelope" size={24} color="#cc5500" />
      ),
    },
  },

  Service:{
    screen:ServiceScreen,
    navigationOptions:{
      drawerIcon: (
        <Icon name="cog" size={24} color="#cc5500" />
      ),
    },
  },

 },{
   initialRouteName: 'Home',
   contentComponent: CustomDrawerContentComponent,
   drawerPosition: 'left',
   drawerOpenRoute: 'DrawerOpen',
   drawerCloseRoute: 'DrawerClose',
   drawerToggleRoute: 'DrawerToggle'
 })

 const App2 = createAppContainer(DrawerNavigator)

 const styles = StyleSheet.create({
   container:{
     flex:1,
     alignItems:'center',
     justifyContent: 'center'
   },
   backgroundContainer:{
     flex:1,
     position: 'absolute',
     top:0,
     left:0,
     right:0,
     bottom:0,
     alignItems:'center'
   },
   drawerImage:{
     height:50,
     width:50,
     alignSelf:'center'
   },
   imageText:{
     alignSelf:'center',
     color: '#fff',
     padding:10,
     fontWeight: 'bold',
     fontStyle: 'italic'
   }
 });

export default App;
