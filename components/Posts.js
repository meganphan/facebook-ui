import React, {Component} from 'react';
import {
  Text, 
  View, StyleSheet, Image } from 'react-native';
import {FontAwesome5, FontAwesome, MaterialCommunityIcons, Feather, Entypo} from '@expo/vector-icons'


const styles = StyleSheet.create({
    container: {
        borderTopColor:  '#9999',
        borderTopWidth: 8,
        backgroundColor:'transparent',
    },
    contentContainer: {
        margin: 10
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 100
    },
    name: {
        fontWeight: "bold",
        position: "absolute",
        top: 8,
        left: 55
    }, 
    time: {
        color: 'gray',
        fontSize: 12,
        position: "absolute",
        top: 30,
        left: 55
    },
    content: {
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10
    },
    image: {
        width: "100%",
        height: 350
    },
    buttonContent: {
        width: "33.36%",
        height: 25,
        backgroundColor: "transparent",
        left: 30   
    }
})

export default class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          postItems: [
          {
            name:"Monica Geller",
            avatar: "https://i.pinimg.com/736x/ce/72/09/ce720980b962f81e9849bd65c1f5dd8a.jpg",
            time: "2 hrs",
            content: "I cannot believe Rachel moved my green ottoman hmmmm",
            image: "",
            likes: 324,
            comments: 20
          },
          {
            name:"Rachel Green",
            avatar: "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/rachel-green-reg-Cropped.jpg",
            time: "23 mins",
            content: "Sorry Monica, I just wanted to do nice things for you.",
            image: "",
            likes: 233,
            comments: 122
          },
          {
            name:"Ross Geller",
            avatar: "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/p-friends-david-schwimmer.jpg",
            time: "12 mins",
            content: "Idk, maybe I got married too fast",
            image: "",
            likes: 100,
            comments: 14
        },
          {
            name:"Chandler Bing",
            avatar: "https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.2x.h473.w710.jpg",
            time: "Yesterday at 2:34 PM",
            content: "",
            image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/friends14-1518625349.jpg?crop=1xw:1xh;center,top&resize=480:*",
            likes: 323,
            comments: 56
        },
          {
            name:"Phoebe Buffay",
            avatar: "https://i.pinimg.com/originals/1b/85/b7/1b85b7498cf0400b47d02d49cc0bbf7b.jpg",
            time: "Sunday at 1:36 PM",
            content: "Smelly cat, smelly cat. what are they feeding you?...oh my god, it's my new song!!!",
            image: "",
            likes: 432,
            comments: 54
        },
          {
            name:"Joey Tribbiani",
            avatar: "https://i.pinimg.com/originals/f4/a9/1c/f4a91c2267d1657a1d2dc9a5dcc1e464.jpg",
            time: "5 hrs",
            content: "How you doin?",
            image: "https://imgix.bustle.com/uploads/image/2018/8/30/540599ec-b13a-428c-8075-6f15bda099d6-joey-tribbianni-best-pickup-lines.png?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70",
            likes: 455,
            comments: 200
        }
        ]
      }
    }

    Post({item,index}){
        let ImageContent;
        (item.image === "") ?
            ImageContent = <View></View>
        :
            ImageContent = <Image style={styles.image} source={{uri: item.image}}></Image>
        
        return(
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <Image style={styles.avatar} source={{uri: item.avatar}}></Image>
                    <Text style={styles.name}>{item.name}</Text>

                    <Text style={styles.time}>{item.time}<Entypo name="dot-single" size={10} color="gray" /><FontAwesome5 name="globe-americas" size={12} color="gray" /></Text>
                    <Text style={styles.content}>{item.content}</Text>
                    {ImageContent}
                    <Text style={{fontSize: 15, margin: 10, color: "gray"}}>
                        <FontAwesome style={{position: "relative"}} name="thumbs-up" size={20} color="#0078ff"/>
                        <MaterialCommunityIcons style={{position: "relative"}} name="heart-circle" size={20} color="red" /> 
                        {item.likes}</Text>
                    <Text style={{position:"absolute", right: 0, bottom: 45, color: "gray"}}>{item.comments} Comments</Text>
                    <View
                        style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: 0.5,
                        marginBottom: 10
                        }}
                    />
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={styles.buttonContent}><Text style={{color: "gray", fontWeight: "500"}}><Feather name="thumbs-up" size={15} color="gray" /> Like</Text></View>
                        <View style={styles.buttonContent}><Text style={{color: "gray", fontWeight: "500"}}><FontAwesome5 name="comment-alt" size={15} color="gray" /> Comment</Text></View>
                        <View style={styles.buttonContent}><Text style={{color: "gray", fontWeight: "500"}}><FontAwesome name="share" size={15} color="gray" /> Share</Text></View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View>
                {this.state.postItems.map((post) => {
                    return(
                        <this.Post item={post} key={post.name}></this.Post>
                    )
                })}
            </View>
        );
    }
}

