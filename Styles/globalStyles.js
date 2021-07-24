import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//Colour Scheme
//#003049 rgb{}
//#D62828
//#F77F00
//#FCBF49
//#EAE2B7
//#FFF

export default  StyleSheet.create({

    test:{
      flex:1,
      backgroundColor:'blue',
      borderWidth: 2,
      borderColor:'red',
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
      backgroundColor: '#003049',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      alignSelf:'center',
      padding:20,
      margin:10,
      borderRadius:5,
      width:windowWidth/1.1,
    },

    button:{
      alignItems: "center",
      backgroundColor: "#FCBF49",
      width:200,
      padding: 10,
      margin:20,
      borderRadius:5
      },
      buttonTitle: {
        color: "#003049",
        fontSize: 20,
        fontWeight: "bold",
        
      },

      textHighlight:{
        color: "#003049",
        margin: 12,
        textDecorationLine: 'underline',
      },

      input: {
        width: 300,
        height: 40,
        margin: 12,
        borderRadius:5,
        borderColor:'#003049',
        backgroundColor:'#EDF2F4',
        padding:10,
        borderWidth: 2,
      },

      text:{
        color:'#003049',
        fontFamily:'Roboto',
        fontSize:14,
        margin:10
      },
      textAlt:{
        color:'#FFF',
        fontFamily:'Roboto',
        fontSize:14,
        margin:10
      },
      subTextAlt:{
        color:'#EAE2B7',
        fontFamily:'Roboto',
        fontSize:14,
        margin:8
      },
      title:{
        fontFamily:'Roboto',
        fontSize:24,
        color:'#003049',
        fontWeight: "bold",
        textAlign: 'center',
        margin:20,
      },
      titleAlt:{
        fontFamily:'Roboto',
        fontSize:24,
        color:'#FFF',
        fontWeight: "bold",
        textAlign: 'center',
        margin:20,
      },
      subTitle:{
        color:'#003049',
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
        backgroundColor: "#EAE2B7",
        alignItems: "flex-start",
        paddingTop: 10,
        paddingBottom: 10,
        width: windowWidth,
        marginTop:10,
        alignItems:'center',
        borderRadius:5,

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