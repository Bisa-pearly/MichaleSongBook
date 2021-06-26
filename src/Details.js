import React, { Component } from "react";
import { StyleSheet,  View, Text,Image} from "react-native";
import pStyles from './projectStyle';
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state={        
      Moviedata: props.route.params.itemObj,     
    }
  }
    render() {
      
        return (
          <View style={styles.container,{width:'100%',height:'100%'}}> 
            <View style={styles.imagecontainer,{height:'55%'}}>   
            <Text  style={pStyles.textHeaderColor,{padding:'2%'}}>{this.state.Moviedata.artistName}</Text>
            <View style={{height:'90%', width:'100%'}}>
              <Image style={styles.imagestyle} source={{ uri: this.state.Moviedata.artworkUrl100 }}/> 
              </View>
            </View>  
            {/* <View style={styles.textcontainer}> */}
            <View>
            <View style={styles.columnequal} >             
                <View style={{flexDirection:'row'}}>
                  <Text style={pStyles.textHeaderColor}>Artist ID</Text>
                  <Text style={pStyles.textValue}>{this.state.Moviedata.artistId}</Text> 
                </View>  
                <View style={{flexDirection:'row'}} >
                  <Text style={pStyles.textHeaderColor}>Collection ID</Text>
                  <Text style={pStyles.textValue}>{this.state.Moviedata.collectionId}</Text>
                </View> 
                <View style={{flexDirection:'row'}}>
                  <Text style={pStyles.textHeaderColor}>Collection Name</Text>
                  <Text style={pStyles.textValue}>{this.state.Moviedata.collectionName}</Text> 
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={pStyles.textHeaderColor}>Collection Price</Text>
                <Text style={pStyles.textValue}>${this.state.Moviedata.collectionPrice}</Text> 
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={pStyles.textHeaderColor}>Release Date</Text>
                <Text style={pStyles.textValue}>{this.state.Moviedata.releaseDate}</Text> 
                </View>
                <View style={{flexDirection:'row'}}>
                <Text style={pStyles.textHeaderColor}>Track name</Text> 
                <Text style={pStyles.textValue}>{this.state.Moviedata.trackName}</Text> 
                </View>
              </View>
            </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
  flex: 1,
},

imagecontainer:{
  width: '100%', 
  height: '65%', 
  alignSelf: 'center' 
},

columnequal:{
  flexDirection: 'column',
  justifyContent:'space-around',
},

imagestyle:{
   width: '95%', 
   height: '85%', 
   alignSelf: 'center',
   justifyContent:'center'
},
})
export default Detail;