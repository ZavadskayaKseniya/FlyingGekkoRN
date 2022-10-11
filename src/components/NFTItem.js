import React from "react";
import * as reactNative from 'react-native'; 
import CardContent from "./CardContent";
import HeaderNFT from "./HeaderNFT";
import { COLORS } from "../../constants";

const image = 'https://s.yimg.com/os/creatr-uploaded-images/2021-12/9908fc00-5398-11ec-b7bf-8dded52a981b';

const NFTItem = () => {
    return <reactNative.View>
       {/* Header */}
       <reactNative.View style={styles.headerContainer}>
             <reactNative.Text>HeaderNFT</reactNative.Text>
       </reactNative.View>
     
        {/* Image Content */}
        <reactNative.View style={styles.container}>
            <reactNative.TouchableHighlight  onPress={()=> reactNative.Linking.openURL(image)}
            >
                <reactNative.ImageBackground
                    style={styles.image}
                    source={{uri:image}}
                    resizeMode="cover"
                />
            
            </reactNative.TouchableHighlight>
        </reactNative.View>

        {/* Card Content */}
        <reactNative.View style={styles.cardContainer}>
             
        </reactNative.View>
       
    </reactNative.View>
};
 const styles = reactNative.StyleSheet.create({
    container: {
        
    
    },
    image: {
        flex: 1,
        justifyContent: "center",
        padding:200
    },
    headerContainer: {
        backgroundColor: COLORS.cardBackground,
        opacity: 0.85,
        padding:35,
        color:'white',
        flex: 1,
      
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        backgroundColor: COLORS.basicText,
        opacity: 0.85,
        padding:200,
        color:'white',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    }
      
 })
export default NFTItem;