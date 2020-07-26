import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Slider,
  Alert
} from 'react-native';
import Modal from '../../components/Modal';

import plans from '../../services/phoneplans';
import tariff from '../../services/tariff';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Falemais() {

  const [minutes, setMinutes ] = useState(30);
  const [phoneplan, setPhoneplan ] = useState(plans[0]);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [promotion, setPromotion ] = useState(0);
  const [withoutPromotion, setWithoutPromotion] = useState(0);

  function getTax() {

    if(from && to) {
      const ddds = `${from.ddd}${to.ddd}`;
      return tariff.get(ddds);
    }

    return undefined;
  }

  function isValidRegion() {

    if(from && to) {
  
      if(getTax()) {
        return true;
      }

      Alert.alert(
        "Oooopss!!",
        "A promoção FaleMais não cobre as regiões informadas!",
        [ 
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );

    }

    return false;
  }

  function updateValues() {

    if(isValidRegion() === false) {
      return;
    }

    setPromotion(0);
    setWithoutPromotion(0);

    const plan = plans.find((plan) => plan.codigo ===  phoneplan.codigo);
   
    const tax = getTax();

    if(tax) {
      if(minutes > plan.min){
        const total = (minutes - plan.min) * (0.10 * tax + tax);
        setPromotion(total);
      }

      setWithoutPromotion(minutes * tax);
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.headerTextBold}>
          {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(promotion)}
        </Text>

        <Text style={styles.description}> 
          {` sem o plano: ${Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(withoutPromotion)}`}
        </Text>
      </View>

      <View style={styles.form}>
        <View style={styles.plans}>
          { 
            plans.map((plan) => (
              <TouchableOpacity
                key={plan.codigo}
                style={{ ...styles.planButton, backgroundColor: phoneplan.id === plan.id ? '#808080': '#d3d3d3' }}
                onPress={() => {
                  setPhoneplan(plan);
                }}>
                <Text style={{ ...styles.planButtonText, fontWeight: phoneplan.id === plan.id ? 'bold': 'normal' }}>
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
          onValueChange={(value) => {
            setMinutes(value);
          }}
          style={styles.slider}
          thumbTintColor="#0e0872"
        />

          <View style={{marginTop: 10, marginBottom: 40}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 18}}>
                Ligação de:
            </Text>
            <Modal onChange={setFrom} />

            <Text
              style={{fontWeight: 'bold', fontSize: 18, marginTop: 8}}>
                para:
            </Text>
            <Modal onChange={setTo} />
          </View>

          <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => updateValues()}
            >
              <Text style={styles.textStyle}>
                Custo da Ligação
              </Text>
          </TouchableOpacity>
          
      </View>
    </View>
  );
}
