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
    containerAlt: {
      flex: 1,
      backgroundColor: '#F3F4F7',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: windowWidth
    },

    button:{
      alignItems: "center",
      backgroundColor: "#D90429",
      width:200,
      padding: 10,
      margin:20,

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
        height:120
      },

      // Lists/ Scroll View
      card:{
        backgroundColor: "#F7CAD1",
        alignItems: "flex-start",
        paddingTop: 10,
        paddingBottom: 10,
        width: windowWidth,
        marginTop:10,
        alignItems:'center',
       

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
        width: windowWidth,
        padding:20
      },
      cardImage:{
        width:windowWidth/1.1,
        height:500,
        
      },
      cardDate:{
        position:'absolute',
        alignSelf:'baseline',
        padding:20,
      }
  });