import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import profile from '../assets/profile.jpg';
import home from '../assets/home.png';
import search from '../assets/search.png';
import notifications from '../assets/bell.png';
import settings from '../assets/settings.png';
import logout from '../assets/logout.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import visit from '../assets/visit.png';
import transaction from '../assets/transaction.png';
import { RecomindationHome } from './RecomindationHome';
import market from '../assets/market3.png';
import { useNavigation } from '@react-navigation/native';
import profile1 from "../assets/profile1.png"
import photo from '../assets/profile.jpg';

export default function App() {

  const [currentTab, setCurrentTab] = useState("Home");
  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  const TabButton = ({ title, image }) => {
    const handleTabPress = () => {
      if (title === 'LogOut') {
        // Perform logout actions
      } else {
        setCurrentTab(title);
        if (title === 'Market') {
          navigation.navigate('RecomindationHome');
        }
      }
    };

    return (
      <TouchableOpacity onPress={handleTabPress}>
        <View style={{
          flexDirection: "row",
          alignItems: 'center',
          paddingVertical: 8,
          backgroundColor: currentTab === title ? 'white' : 'transparent',
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15
        }}>

          <Image source={image} style={{
            width: 25, height: 25,
            tintColor: currentTab === title ? "#5359D1" : "white"
          }} />

          <Text style={{
            fontSize: 15,
            fontWeight: 'bold',
            paddingLeft: 15,
            color: currentTab === title ? "#5359D1" : "white"
          }}>{title}</Text>

        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={{marginTop:20, padding: 15 }}>
        <Image source={profile} style={{
          width: 60,
          height: 60,
          borderRadius: 10,
          marginTop: 8
        }}></Image>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 20
        }}>Adnan Ennab</Text>

        <TouchableOpacity>
          <Text style={{
            marginTop: 6,
            color: 'white'
          }}>View Profile</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          <TabButton title="Home" image={home} />
          <TabButton title="Profile" image={profile1} />
          <TabButton title="Search" image={search} />
          <TabButton title="Market" image={market} />
          <TabButton title="Visit" image={visit} />
          <TabButton title="Transactions" image={transaction} />
          <TabButton title="Notifications" image={notifications} />
          <TabButton title="Settings" image={settings} />
        </View>
<View > 
  <Image source={require("../assets/logoo1.png")} style={{ marginLeft:50, width:100,height:100}}></Image>
</View>
        <View>
          <TabButton title="LogOut" image={logout} />
        </View>

      </View>

      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: showMenu ? 15 : 0,
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity onPress={() => {
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 0.88,
              duration: 300,
              useNativeDriver: true
            }).start();

            Animated.timing(offsetValue, {
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            }).start();

            Animated.timing(closeButtonOffset, {
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            }).start();

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 40,
            }}></Image>

          </TouchableOpacity>

          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>{currentTab}</Text>

          <Image source={photo} style={{
            width: '100%',
            height: 300,
            borderRadius: 15,
            marginTop: 25
          }}></Image>

          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            paddingTop: 15,
            paddingBottom: 5
          }}>Jenna Ezarik</Text>

          <Text>
            Techie, YouTuber, PS Lover, Apple Sheep's Sister
          </Text>
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
