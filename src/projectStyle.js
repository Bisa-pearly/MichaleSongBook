import {StyleSheet} from "react-native";
import {responsiveheight, responsivewidth, responsivefontSize, responsiveFontSize} from "react-native-responsive-dimensions";
export default StyleSheet.create({
titleCell:{
    color:"#27272e",
    responsiveFontSize:'2',
    padding:35,
    justifyContent:'flex-start'
},
imagePlaceHolder:{
height:40,
width:40,
justifyContent:'space-evenly'
},
container:{
    responsiveheight:5,
    flexDirection:'row',
    paddingRight:'0',
    paddingLeft:'0',
    flex:'1'
},
textHeaderColor:{
    textAlign: 'left',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    responsivefontSize: 20,
    color: '#00000',
    paddingRight:'2%',
    paddingLeft:'2%',
    width:'40%'
   
  },
  textValue:{
    fontFamily: "sans-serif",
    responsivefontSize: 20,
    color: '#00000',
    paddingLeft:'2%',
  },
  textInput: {
    width: "100%",
    height: 50,
    borderColor: "#BDBDBD",
    borderWidth: 0.7,
    marginBottom: 10,
    padding: 5,
    fontSize: 18,
  },
});