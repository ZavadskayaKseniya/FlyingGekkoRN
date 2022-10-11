/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import * as reactNative from 'react-native'; 




import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { COLORS } from './constants';
import HeaderNFT from './src/components/HeaderNFT';
import NFTItem from './src/components/NFTItem';





const App = () => {
  const isDarkMode = reactNative.useColorScheme() === 'dark';
  const [arrayNFT, setarrayNFT] = useState([]);
  const [isLoading, setisLoading ]=useState(false);

  const itemR = ({Item}) => (
    <reactNative.Text>{Item[0].creator_name}</reactNative.Text>
  )
  
  useEffect(()=>{
    getNFT();
  },[])
  const getNFT = () => {
    setisLoading(true);
    let URL = 'https://631b5df3fae3df4dcffcf52e.mockapi.io/api/v1/items?page=1&limit=10';
    fetch(URL).then(res=> res.json()).then(res=>setarrayNFT(res)).finally(()=> setisLoading(false));
  }


 

  return (
    <reactNative.SafeAreaView style={{backgroundColor:COLORS.headerBackground}}>
      <NFTItem/>
      </reactNative.SafeAreaView>
  );
};

const styles = reactNative.StyleSheet.create({


});

{/* <reactNative.FlatList
        data={arrayNFT}
        renderItem={itemR}
    
        onRefresh={getNFT}
        refreshing={isLoading}
      ></reactNative.FlatList> */}
      {/* {arrayNFT.map((item)=>{
        return (
          <reactNative.Text>{item.description}</reactNative.Text>

        )
      })} */}

export default App;
