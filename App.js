import React from 'react'
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native'
import {NavigationContainer, useScrollToTop} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { HomeIcon, WatchIcon, ProfileIcon, GroupIcon, NotiIcon, MenuIcon, SearchIcon, MesIcon } from './components/IconWithBadge'
import {Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons'
import StoryCarousel from './components/Carousel'
import Posts from './components/Posts'

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  home:{
    flex: 1
  },
  header: {
    marginTop: 20,
    margin: 10,
  },
  logo:{
    fontSize: 30,
    color: '#0078ff',
    fontWeight: "bold",
    fontFamily: 'System'
  },
  iconHeader:{
    width: 35, 
    height: 35, 
    backgroundColor: "#d0d0d0", 
    borderRadius: 100,
    marginLeft: 6,
    padding: 6
  },
  avatar: {
    margin: 10,
    width: 45,
    height: 45,
    borderRadius: 100
  },
  status:{
    minHeight: 100
  },  
  question: {
    position: "absolute",
    top: 20,
    left: 65, 
    fontSize: 16
  },
  buttonHeader: {
    width: "33.36%",
    height: 30,
    backgroundColor: "transparent",
    left: 35
  }
})

function Header({title}){
  return(
    <View style={styles.header}>
      <View style={{width: 150, height: 30}}><Text style={styles.logo}>{title}</Text></View>
      <View style={{flex: 1, flexDirection: "row", position: "absolute", right: 0}}>
        <View style={styles.iconHeader}><SearchIcon name="search" size={26}></SearchIcon></View>
        <View style={styles.iconHeader}><MesIcon /></View>
      </View>
    </View>
  )
}

function Status(){
  return (
    <View style={styles.status}>
      <Image style={styles.avatar} source={{uri: "https://i.pinimg.com/736x/ce/72/09/ce720980b962f81e9849bd65c1f5dd8a.jpg"}}></Image>
      <Text style={styles.question}>What's on your mind?</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 0.3,
          marginBottom: 10
        }}
      />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.buttonHeader}><Text><Entypo name="video-camera" size={15} color="red" /> Live</Text></View>
        <View
        style={{
          borderRightColor: 'black',
          borderRightWidth: 0.3,
          marginBottom: 5
        }}
      />
        <View style={styles.buttonHeader}><Text><Ionicons name="md-images" size={15} color="green" /> Photo</Text></View>
        <View
          style={{
            borderRightColor: 'black',
            borderRightWidth: 0.3,
            marginBottom: 5
          }}
        />
        <View style={styles.buttonHeader}><Text><MaterialIcons name="location-on" size={15} color="red" />Check In</Text></View>
      </View>
    </View>
  )
}

function HomeScreen(props){
  const ref = React.useRef(null);

  useScrollToTop(ref);
  return(
    <View style={styles.home}>
      <ScrollView ref={ref}>
        <Header {...props} title="facebook"></Header>
        <Status/>
        <StoryCarousel/>
        <Posts/>
      </ScrollView>
    </View>
  )
}

function ProfileScreen(){
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Megan Hoang Phan</Text>
    </View>
  )
}

export default function App(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
            <HomeIcon onPress={()=>{alert("home")}} name="home" color={color} size={26} />
          ),
        }}></Tab.Screen>
                <Tab.Screen name="Watch" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
            <WatchIcon name="watch" color={color} size={26} />
          ),
        }}></Tab.Screen>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({ color }) => (
            <ProfileIcon name="profile" color={color} size={26} />
          ),
        }}></Tab.Screen>
                <Tab.Screen name="Groups" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
            <GroupIcon name="groups" color={color} size={26} />
          ),
        }}></Tab.Screen>
                <Tab.Screen name="Notifications" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
            <NotiIcon name="notifications" color={color} size={26} />
          ),
        }}></Tab.Screen>
                <Tab.Screen name="Menu" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
            <MenuIcon name="meny" color={color} size={26} />
          ),
        }}></Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    )
};