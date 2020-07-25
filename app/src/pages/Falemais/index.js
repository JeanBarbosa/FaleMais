import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Slider
} from 'react-native';
import Modal from '../../components/Modal';

import plans from '../../services/phoneplans';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Falemais() {

  const [minutes, setMinutes ] = useState(30);
  const [phoneplan, setPhoneplan ] = useState({});

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <Text style={styles.headerTextBold}>
          {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(107)}
        </Text>

        <Text style={styles.description}> 
          sem o plano:
          {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(50)}
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.plans}>
          { 
            plans.map((plan) => (
              <TouchableOpacity
                key={plan.codigo}
                style={{ ...styles.planButton, backgroundColor: phoneplan.id === plan.id ? 'gray': 'red' }}
                onPress={() => {
                  setPhoneplan(plan);
                }}>
                <Text style={styles.planButtonText}>
                  {plan.title}
                </Text>
              </TouchableOpacity>
            ))
          }

        </View>

        <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'right'}}>
          { minutes } minutos
        </Text>
        <Slider
          minimumValue={1}
          maximumValue={120}
          minimumTrackTintColor="#0e0872"
          maximumTractTintColor="#0e0872"
          step={1}
          value={30}
          onValueChange={(value) => setMinutes(value)}
          style={styles.slider}
          thumbTintColor="#0e0872"
        />

          <Text> Ligação de: </Text>
          <Modal />

          <Text> para: </Text>
          <Modal />
      </View>
    </View>
  );
}
