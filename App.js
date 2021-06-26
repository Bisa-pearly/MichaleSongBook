import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,TextInput , ScrollView , TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './src/Details';
import { nanoid } from "nanoid";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import pStyles from "./src/projectStyle";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      text:'Michael',
      searchResults: null,
    }
  }
SearchMovies=(text)=>{ 
  console.log("search key  "+   text  );
  const url= 'https://itunes.apple.com/search?term='+text;
  fetch(url,{method: 'GET'})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          searchResults: responseJson.results
        })
      })
      .catch((error) => {
        console.error(error);
      });
}
  componentDidMount = () => {
    this.SearchMovies(this.state.text);
  }
  getListViewItem = (item) => {
    console.log("item data  "+item);
    this.props.navigation.navigate('Detail', {
      itemObj: item,
      otherParam: 'anything you want here',
    });
  }

  render() {  
    return (  
        <View style={styles.container}>  
        <StatusBar barStyle="light-content" />
                <TextInput  
                          style={{height: 40,backgroundColor: 'azure', fontSize: 10, width: "100%",}}  
                          placeholder="Type here to search playlist!"  
                          onChangeText={  (name) => {this.SearchMovies( name ) }  }
                />  
                <hr/>
              <ScrollView>
                <View style={styles.container}>
                  {
                  this.state.searchResults && this.state.searchResults.map((item) => (
                      <TouchableOpacity  key={nanoid(5)}  onPress={  () =>   this.getListViewItem(item)    }  >
                        <View style={styles.item}>
                          <Image  style={styles.image}  source={{  uri: item.artworkUrl100}}   />
                          <Text style={pStyles.textHeaderColor,{fontSize:15}}>{item.artistName}</Text>
                        </View>
                      </TouchableOpacity>
                    ))
                  }
                </View>
              </ScrollView>           
        </View>  
    );  
}  
} 
const Stack= createStackNavigator();
function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
          </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#BDBDBD",
    width: wp("45%"),
    alignItems: "center",
    marginBottom: 10,
    padding:5,
  },
  image: {
    width: wp("45%"),
    height: hp("30%"),
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding:"2%"
  },
})
export default App;