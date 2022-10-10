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


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({children, title}) => {
  const isDarkMode = reactNative.useColorScheme() === 'dark';
  return (
    <reactNative.View style={styles.sectionContainer}>
      <reactNative.Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </reactNative.Text>
      <reactNative.Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </reactNative.Text>
    </reactNative.View>
  );
};

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


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <reactNative.SafeAreaView style={backgroundStyle}>
      <reactNative.Text>jopa tvoya</reactNative.Text>
      {/* <reactNative.FlatList
        data={arrayNFT}
        renderItem={itemR}
    
        onRefresh={getNFT}
        refreshing={isLoading}
      ></reactNative.FlatList> */}
      {arrayNFT.map((item)=>{
        return (
          <reactNative.Text>{item.description}</reactNative.Text>

        )
      })}
    
    

    </reactNative.SafeAreaView>
  );
};

const styles = reactNative.StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
