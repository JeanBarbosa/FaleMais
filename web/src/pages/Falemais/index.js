import React, { useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Alert from '@material-ui/lab/Alert';
import Radio from '@material-ui/core/Radio';
import Slider from '@material-ui/core/Slider';
import citys from '../../services/PGCN';
import marks from '../../services/marks';
import tariff from '../../services/tariff';
import plans  from '../../services/phoneplans';

import './styles.css';
import logoImg from '../../assets/falemais.png';

export default function Falemais() {

  const [phoneplan, setPhoneplan] = useState('FM30');
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [minutes, setMinutes] = useState(30);
  const [promotion, setPromotion ] = useState(0);
  const [withoutPromotion, setWithoutPromotion] = useState(0);
  const [error, setError] = useState(false);

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
        setError(false);
        return true;
      }
    }

    setError(true);
    return false;
  }

  function hadleSubmit(e) {

    setPromotion(0);
    setWithoutPromotion(0);
    e.preventDefault();

    const plan = plans.find((plan) => plan.codigo ===  phoneplan);
   
    if(isValidRegion() === false) {
      return;
    }

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
    <div className="calc-container">
      <div className="content">
        
        <form onSubmit={hadleSubmit} >

          <div className="input-group">

            <Autocomplete
              id="combo-box-demo"
              noOptionsText="Não encontrado"
              onChange={(event, value) => {
                setError(false);
                setFrom(value);
              }}
              options={citys}
              getOptionLabel={(city) => `(${city.ddd}) ${city.name}` }
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Ligação de:" variant="outlined" />}
            />

            <Autocomplete
              id="combo-box-demo2"
              noOptionsText="Não encontrado"
              onChange={(event, value) => {
                setError(false);
                setTo(value);
              }}
              options={citys}
              getOptionLabel={(city) => `(${city.ddd}) ${city.name}` }
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Para:" variant="outlined" />}
            />
          </div>

          {
            error ? <Alert severity="error">A promoção FaleMais não cobre as regiões informadas!</Alert> : ''

          }
          
          <div className="min">
            <p>
              Minutos
            </p>

            <div className="slider">
              <Slider
                defaultValue={minutes}
                value={minutes}
                onChange={ (event, value) => setMinutes(value)}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                marks={marks}
                min={1}
                max={120}
                valueLabelDisplay="on"
              />
            </div>
          </div>

          <div className="input-group">

            {
              plans.map((plan) => (
                <div className="card" key={plan.id}>
                  <Radio
                      checked={phoneplan === plan.codigo}
                      onChange={(event) => setPhoneplan(event.target.value)}
                      value={plan.codigo}
                      name="radio-button-demo"
                      inputProps={{ 'aria-label': `${plan.codigo}`}}
                    /> 

                    <div className="plan">
                      { plan.title }
                    </div>
              </div>
              ))
            }
            </div>

              <button className="button" type="submit"> Custo da ligação </button>
            </form>

            <section>
                <img src={logoImg} alt="Logo" />

                <p>Com FaleMais você gastaria: </p>
                <h1>
                  {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(promotion)}
                </h1>
               
                <p> Sem FaleMais </p>
                <h1>
                  {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(withoutPromotion)}
                </h1>
            </section>
        </div>
    </div>
  );
}
