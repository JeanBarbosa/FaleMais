import React, { useState } from "react";
import { 
    Alert, 
    Modal,
    Text,
    TouchableOpacity,
    View,
    FlatList
} from "react-native";

import citys from '../../services/citys';
import styles from './styles';

const App = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState('-- selecione a cidade --');

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
            >
            <Text style={styles.modalTextCancel}> Cancelar </Text>
            </TouchableOpacity>            

            <FlatList
              data={citys}
              keyExtractor={item => `${item.id}`}
              renderItem={({item}) => (
                <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: "#fff",  }}
                onPress={() => {
                  props.onChange(item);
                  setSelected(item.name);
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}> { item.name} </Text>
              </TouchableOpacity>
              )}
            />

          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={{ ...styles.openButton, backgroundColor: '#dcdcdc' }}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textStyle}>{ selected }</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;