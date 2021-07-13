import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default  StyleSheet.create({

    test:{
      flex:1,
      backgroundColor:'blue',
      width:100,
    },
    // General 
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      alignItems: 'center',
      justifyContent: 'center',
    },

    button:{
      alignItems: "center",
      backgroundColor: "#D90429",
      width:200,
      padding: 10,
      margin:20,
      borderWidth: 0,
      borderRadius: 6,
      },
      buttonTitle: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
        
      },

      textHighlight:{
        color: "#D90429",
        margin: 12,
        textDecorationLine: 'underline',
      },

      input: {
        width: 300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        backgroundColor:'#EDF2F4',
        padding:10,
        borderWidth: 0,
        borderRadius: 6,
      },

      text:{
        fontFamily:'Roboto',
        fontSize:14,
        margin:10
      },
      title:{
        fontFamily:'Roboto',
        fontSize:24,
        fontWeight: "bold",
        textAlign: 'center',
        margin:20,
      },
      subTitle:{
        fontFamily:'Roboto',
        fontSize:20,
        fontWeight: "bold",
        margin:20,
      },
      scrollFill:{
        height:200
      },

      // Lists/ Scroll View
      card:{
        backgroundColor: "pink",
        flex:1,
        width: windowWidth -40,
        padding: 20,
        margin:20,
        borderRadius: 20,
        alignItems:'center'
      },
      cardContentView:{
        borderStyle: 'solid',
        backgroundColor:'blue'
      },
    
      cardTitle:{
        fontSize:20,
        fontWeight:'bold',
      },
      cardContent:{
        borderStyle: 'solid',
        width: windowWidth/1.3,
        padding:10
      },
      cardImage:{
        width:windowWidth/1.3,
        height:500,
        borderRadius:10,
      },
      cardDate:{
        position:'absolute',
        alignSelf:'baseline',
        padding:20,
      }
  });