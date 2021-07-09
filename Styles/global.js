import { StyleSheet } from "react-native";

export default  StyleSheet.create({
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
      borderWidth: 0,
      borderRadius: 6,
      },
      buttonTitle: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold"
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
      }
  });