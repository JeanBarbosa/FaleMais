import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    centeredView: {
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: '#000',
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center"
    },
    modalTextCancel: {
      marginBottom: 20,
      fontSize: 20,
      fontWeight: "bold",
      color: 'red',
      textAlign: "center"
    }
  });