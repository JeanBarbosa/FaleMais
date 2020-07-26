import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
    },

    header: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#219bd3',
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 60,
        marginBottom: 16,
        marginTop: 40,
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#000'
    },

    formList: {
        marginTop: 32
    },
    
    form: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    formProperty: {
        fontSize: 14,
        color:  '#41414d',
        fontWeight: 'bold'
    },

    formValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    
    detailsButtonText: {
        fontSize: 15,
        color: '#E02041',
        fontWeight: 'bold'
    },

    plans: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24
    },

    planButton: {
        backgroundColor: "#F194FF",
        padding: 20,
    },

    textStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    buttonStyle: {
        backgroundColor: "#0e0872",
        padding: 15,
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 20,
        alignItems: "center",
    }
});