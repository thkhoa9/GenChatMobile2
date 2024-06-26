import React from 'react'
import { useRoute } from "@react-navigation/native";
import { TextInput, ScrollView, Text, View, Image, Pressable } from 'react-native'
import GlobalAsset from "../GlobalAsset.js";
import GlobalStyle from '../GlobalStyle.js';
import acceptFriend from '../services/acceptFriend.js';
import removeRequestSend from '../services/removeRequestSend.js';
import removeRequestGet from '../services/removeRequestGet.js';
import createRoom from '../services/createRoom.js';

export default function ReceivedFriendRequestUser({ navigation, user, userRoot }) {  
  const acceptFriendRequest = async () => {
    await acceptFriend(userRoot.phoneNumber, user.phoneNumber);
    await acceptFriend(user.phoneNumber, userRoot.phoneNumber);
    await createRoom([userRoot.phoneNumber, user.phoneNumber], "1_1");
    alert("Added friend Successfully!");
    navigation.navigate("ChatHistory");
  }

  const declineFriendRequest = async () => {
    await removeRequestSend(userRoot.phoneNumber, user.phoneNumber);
    await removeRequestGet(user.phoneNumber, userRoot.phoneNumber);
    alert("Remove friend request Successfully!");
    navigation.navigate("ChatHistory");
  }

  return (
    <View
      style={{
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center',
        padding: 10, 
        gap: 10, 
        margin: 10, 
        borderRadius: 5, 
        backgroundColor: '#dddddd'
      }}
    >
      <View style={{
        flexDirection: 'row', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        gap: 10
      }}>

        <Image
          source={{
            uri: GlobalAsset.defaultLogoImage
          }}
          style={{
            width: 60, 
            borderRadius: 30, 
            aspectRatio: 1 / 1, 
          }}
        >  
        </Image>

        <View
          style={{
            flex: 1, 
            alignContent: 'space-around', 
            justifyContent: 'space-around', 
            gap: 10
          }}
        >
          <Text style={{fontWeight: 'bold'}}>{user.name}</Text>
          <Text>{user.phoneNumber}</Text>
        </View>

      </View>

      <View style={{
        flexDirection: 'row', 
        flex: 0, 
        alignItems: 'center', 
        justifyContent: 'flex-end', 
        gap: 10
      }}>
        {/* <Text style={{}}>Accept Friend?</Text> */}
        
        <Pressable
          onPress={acceptFriendRequest}
        >
          <Image
            source={GlobalAsset.acceptIcon}
            style={{
              width: 30, 
              height: 30, 
            }}
          >
          </Image>
        </Pressable>
        <Pressable
          onPress={declineFriendRequest}
        >
          <Image
            source={GlobalAsset.cancelIcon}
            style={{
              width: 30, 
              height: 30, 
            }}
          >
          </Image>
        </Pressable>
      </View>
    </View>
  )
}