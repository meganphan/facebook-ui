import React, {Component} from 'react';
import {
  Text, 
  View,
  SafeAreaView, StyleSheet, Image, ImageBackground } from 'react-native';
  import {MaterialIcons} from '@expo/vector-icons'
  import Carousel from 'react-native-snap-carousel';


const styles = StyleSheet.create({
    container:{
        borderTopColor:  '#9999',
        borderTopWidth: 8,
        backgroundColor:'transparent', 
    },
    carousel: {
        padding: 10,
        flexDirection:'row',
        justifyContent: 'center'
    },
    story:{
        minHeight: 200,
        minWidth: 120,
        backgroundColor: "#fff",
        margin: 5,
        borderRadius: 10
    },
    background: {
        height: 200,
        width: 120,
        padding: 5
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderColor: "#0078ff",
        borderWidth: 4
    },
    name: {
        fontSize: 20,
        color: '#fff',
        fontWeight: "bold",
        textAlign: "center"
    },
    addStory:{
        minHeight: 200,
        minWidth: 120,
        backgroundColor: "#fff",
        margin: 5,
        borderRadius: 10
    },
    profile: {
        height: 130,
        width: 120,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    addIcon:{
        textAlign: "center",
        position: 'absolute',
        top: 115,
        left: 40,
        backgroundColor: "#fff",
        borderRadius: 100
    },
    text: {
        marginTop: 25,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 12,
        paddingLeft: 20,
        paddingRight: 20    
    }
})

export default class StoryCarousel extends Component {

    constructor(props){
        super(props);
        this.state = {
        activeIndex: 0,
          carouselItems: [
          {
              name:"Monica Geller",
              avatar: "https://i.pinimg.com/736x/ce/72/09/ce720980b962f81e9849bd65c1f5dd8a.jpg",
          },
          {
            name:"Rachel Green",
            avatar: "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/rachel-green-reg-Cropped.jpg",
            image: "https://sayingimages.com/wp-content/uploads/friends-life-starts-to-fall-apart-meme.jpg"
          },
          {
            name:"Ross Geller",
            avatar: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg",
            image: "https://i.kym-cdn.com/photos/images/original/001/405/094/a9a.jpg"
          },
          {
            name:"Chandler Bing",
            avatar: "https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.2x.h473.w710.jpg",
            image: "https://quotesnhumor.com/wp-content/uploads/2019/04/1.jpg"
          },
          {
            name:"Phoebe Buffay",
            avatar: "https://i.pinimg.com/originals/1b/85/b7/1b85b7498cf0400b47d02d49cc0bbf7b.jpg",
            image: "https://66.media.tumblr.com/2c8feccd6ac27728925fecdeaf873fd7/f34c76e2b684ba29-84/s640x960/efd498aba466eea3c425c42477c9dac211fabaf9.jpg"
          },
          {
            name:"Joey Tribbiani",
            avatar: "https://i.pinimg.com/originals/f4/a9/1c/f4a91c2267d1657a1d2dc9a5dcc1e464.jpg",
            image: "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/09/Friends.Joey-.Meme-.Turning30.jpg?q=50&fit=crop&w=740&h=555"
          }
        ]
      }
    }

    _renderItem({item,index}){
        if(index === 0){
            return (
                <View style={styles.addStory}>
                    <Image style={styles.profile} source={{uri: item.avatar}}></Image>
                    <View style={styles.addIcon}>
                        <MaterialIcons name="add-circle" size={40} color="#0078ff"/>
                    </View>
                    <Text style={styles.text}>Create a Story</Text>
               </View>
            )
        }else {
            return (
                <View style={styles.story}>
                    <ImageBackground source={{uri: item.image}} style={styles.background} imageStyle={{borderRadius: 10}}>
                        <Image style={styles.avatar} source={{uri: item.avatar}}></Image>
                        <Text style={styles.name}>{item.name}</Text>
                    </ImageBackground>
                </View>
            )
        }
    }

    render() {
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.carousel}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={100}
                  itemWidth={120}
                  renderItem={this._renderItem}
                  onSnapToItem = {(index) => this.setState({activeIndex: index})}
                />
            </View>
          </SafeAreaView>
        );
    }
}

