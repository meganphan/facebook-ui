import React from 'react'
import {Text, View} from 'react-native'
import {Ionicons, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'

export default function IconWithBadge({ name, badgeCount, color, size }) {
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <Ionicons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 50,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }


function HomeIcon(props){
  return(
    <IconWithBadge {...props} name="ios-home"></IconWithBadge>
  )
}

function WatchIcon(props){
  return(
    <IconWithBadge {...props} name="ios-tv"></IconWithBadge>
  )
}

function ProfileIcon(props){
  return(
    <IconWithBadge {...props} name="ios-person"></IconWithBadge>
  )
}

function GroupIcon(props){
  return(
    <IconWithBadge {...props} name="ios-people"></IconWithBadge>
  )
}

function NotiIcon(props){
  return(
    <IconWithBadge {...props} name="ios-notifications" badgeCount={6}></IconWithBadge>
  )
}

function MenuIcon(props){
  return(
    <IconWithBadge {...props} name="ios-menu"></IconWithBadge>
  )
}

function SearchIcon(){
  return(
    <FontAwesome name="search" size={22} color="black" />
  )
}

function MesIcon(){
  return(
    <MaterialCommunityIcons name="facebook-messenger" size={22}></MaterialCommunityIcons>
  )
}


export {HomeIcon, WatchIcon, ProfileIcon, GroupIcon, NotiIcon, MenuIcon, SearchIcon, MesIcon}