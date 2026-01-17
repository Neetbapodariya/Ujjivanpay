import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './Header';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottom from './bottom';

const data = [
  {
    name: "Sent Money\nto Contact ",
    icon: require("./imagess/PaytoContact.png")
  },
  {
    name: "Sent Money ",
    icon: require("./imagess/SendMoney.png")
  },
  {
    name: "Scan any\nUPI QR ",
    icon: require("./imagess/ScanQR.png")
  },
  {
    name: "Balance\nEnquiry",
    icon: require("./imagess/Checkbalance.png")
  },
  {
    name: "Manage\nBeneficiary",
    icon: require("./imagess/ManageBeneficiary.png")
  },
  {
    name: "Generate\nUPI PIN",
    icon: require("./assest/image/ChangeUPIPin.imageset/ChangeUPIPin.png")
  },
  {
    name: "Unblock &\nVirtual ID",
    icon: require("./imagess/Paytoself.png")
  },
  {
    name: "Add Bank",
    icon: require("./imagess/BankTransfer.png")
  },
]

const payment = [
  {
    name: "Collect \nMoney",
    icon: require("./assest/image/CollectMoney.imageset/CollectMoney.png")
  },
  {
    name: "Mandate",
    icon: require("./assest/image/Mandate.imageset/Mandate.png")
  },
  {
    name: "Generate QR",
    icon: require("./assest/image/GenerateQR.imageset/GenerateQR.png")
  },
  {
    name: "My QR",
    icon: require("./assest/image/MyQR.imageset/MyQR.png")
  },
]

const other = [
  {
    name: "Manage\nAccount",
    icon: require("./imagess/ManageAccount.png")
  },
  {
    name: "Change\nUPI PIN",
    icon: require("./assest/image/ChangeUPIPin.imageset/ChangeUPIPin.png")
  },
  {
    name: "Transaction\nHistory",
    icon: require("./imagess/TransactionHistory.png")
  },
  {
    name: "Approve\nto Pay",
    icon: require("./assest/image/Pending.imageset/Pending.png")
  },
]

const last = [
  {
    name: "Contact Us",
    icon: require("./assest/image/ContactUS.imageset/Main.png")
  },
  {
    name: "FAQ's",
    icon: require("./assest/image/FAQ.imageset/Group14085.png")
  },
  {
    name: "Security Question",
    icon: require("./assest/image/SECURITY.imageset/SECURITY.png")
  }
]
const App = () => {
  const Tab = createBottomTabNavigator()
  const stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <ScrollView>
        <View style={{}} >
          <View style={{ flex: 1, flexDirection: "row", padding: 20 }}>
            <Image source={require("./imagess/user.png")} style={{ height: 50, width: 50 }} />
            <View style={{ flexDirection: "column", marginLeft: 10, justifyContent: "space-between" }}>
              <Text style={{ fontWeight: "bold", marginTop: 5, fontSize: 15 }}>
                Hi 
              </Text>
              <Text >
                UPI ID:
              </Text>
            </View>
          </View>
          <View>
            <Image source={require("./assest/image/banner.imageset/banner.png")} style={{ width: "100%" }} />
          </View>
          <View style={{ backgroundColor: "#007a6b", borderRadius: 20, }}>
            <Text style={{ color: "white", marginLeft: 15, marginTop: 10, marginBottom: 10, }}>
              Quick Link
            </Text>
            <View style={{ backgroundColor: "white", borderRadius: 15, elevation: 3, shadowColor: "black", width: "100%", padding: 10 }}>
              <FlatList
                data={data}
                numColumns={4}
                renderItem={({ item }) =>
                  <TouchableOpacity style={{ flex: 1, alignItems: "center", marginTop: 15, }}>
                    <Image source={item.icon} style={{ height: 40, width: 40 }} />


                    <Text style={{ marginTop: 10, fontWeight: "400", fontSize: 12, textAlign: "center", marginBottom: 10, }}>
                      {item.name}
                    </Text>

                  </TouchableOpacity>
                } />
            </View>
          </View>
          <View style={{ width: "92%", backgroundColor: "#e2eceb", borderRadius: 20, margin: 15, marginTop: 20 }}>
            <Text style={{ marginTop: 20, fontWeight: "500", marginLeft: 10, fontSize: 15, }}>
              Payment Categories
            </Text>
            <FlatList
              data={payment}
              numColumns={4}
              renderItem={({ item }) =>
                <TouchableOpacity style={{ flex: 1, marginTop: 30, alignItems: "center", marginBottom: 30 }}>
                  <Image source={item.icon} style={{ height: 50, width: 50 }} />
                  <Text numberOfLines={2} style={{ marginTop: 10, fontSize: 12, textAlign: "center", }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              } />
          </View>

          <View style={{ width: "92%", backgroundColor: "#e2eceb", borderRadius: 20, margin: 15, }}>
            <Text style={{ marginTop: 20, fontWeight: "500", marginLeft: 10, fontSize: 15, }}>
              Other
            </Text>
            <FlatList
              data={other}
              numColumns={4}
              renderItem={({ item }) =>
                <TouchableOpacity style={{ flex: 1, marginTop: 30, alignItems: "center", marginBottom: 30 }}>
                  <Image source={item.icon} style={{ height: 50, width: 50 }} />
                  <Text style={{ marginTop: 10, fontSize: 12, textAlign: "center" }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              } />
          </View>
        </View>
      </ScrollView>
      <View style={{ width: "100%", backgroundColor: "#007a6b", }}>
        <FlatList numColumns={3}
          data={last}
          renderItem={({ item }) =>
            <TouchableOpacity style={{ alignItems: "center", flex: 1, marginTop: 10, marginBottom: 10 }}>
              <Image source={item.icon} style={{ height: 40, width: 40 }} />
              <Text style={{ color: "white", marginTop: 10, fontSize: 10 }}>
                {item.name}
              </Text>
            </TouchableOpacity>}>
        </FlatList>
        <View style={{ alignItems: "center", backgroundColor: "white", marginBottom: 35, height: 40, justifyContent: "center", }}>
          <Image source={require("./assest/image/Bhim-Upi-Logo-PNG.imageset/Bhim-Upi-Logo-PNG.png")} style={{}} />
        </View>
      </View>
    </View>
  )
}



export default App;

const styles = StyleSheet.create({

})



// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, Alert, Button } from 'react-native';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// const Googlelogin = () => {
//   const [userinfo, setuserinfo] = useState(null);

//   const login=async()=>{
//     await GoogleSignin.hasPlayServices()
//     const info=await GoogleSignin.signIn()
//     setuserinfo(info)
//     .catch(error=>{
//         Alert.alert(error.message)
//       }
//     )
//     console.log(info);
    
//   }

//     useEffect(()=>{
//        GoogleSignin.configure({
//         webClientId:"829769076401-2c0oi8f2ricga8h8f5ts1i33bo5qafle.apps.googleusercontent.com",
//         scopes:["email","profile"]
//       })
//     },[])

//   return(
//     <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
//       {
//         userinfo !=null ?(
//         <View>
//           <Text>Name:{userinfo.user.name}</Text>
//           </View>
//       ):null
//       }
//       <Button title='Press' onPress={login}/>
//     </View>
//   )
// };

// export default Googlelogin;











// // App.js
// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import LoginScreen from './loginscreen';
// import HomeScreen from './homescreen';

// const Stack = createNativeStackNavigator();

// const App = () => {
  
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Sign In' }} />
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
