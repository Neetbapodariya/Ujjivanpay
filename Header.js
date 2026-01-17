import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = () => {

    return (
   
        <View style={styles.container}>
                <Image source={require("./assest/image/UjjivanPay_Logo.imageset/UjjivanPay_Logo.png")}
                    style={{  width: "40%", height: 20, marginBottom:10 }} />

        </View>

);
}
export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#007a6b",
        alignItems: "center",
        height: 80,
        // paddingTop:60
        justifyContent:"flex-end",
        
    }
})