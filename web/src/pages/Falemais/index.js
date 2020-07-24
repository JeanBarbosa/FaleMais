import React, { useState} from 'react';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import citys from '../../services/PGCN';

import './styles.css';
import logoImg from '../../assets/falemais.png';


export default function Register() {

  const marks = [
    {
      value: 1,
      label: '1 min',
    },
    {
      value: 20,
      label: '20 min',
    },
    {
      value: 40,
      label: '30 min',  
    },
    {
      value: 100,
      label: '+100',
    },
  ];

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value); 
  };

  async function hadleRegister(e) {

  }

  function valuetext(value) {
    return `${value} min`;
  }

  return (
    <div className="calc-container">
        <div className="content">
        
            <form onSubmit={hadleRegister}>

            <div className="input-group">

            <Autocomplete
              id="combo-box-demo"
              options={citys}
              getOptionLabel={(city) => city.name}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Ligação de:" variant="outlined" />}
            />

            <Autocomplete
              id="combo-box-demo2"
              options={citys}
              getOptionLabel={(city) => city.name}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Para:" variant="outlined" />}
            />

          </div>
          
          <div className="min">
            <Typography id="discrete-slider-small-steps" gutterBottom>
              Minutos
            </Typography>

            <div className="slider">
              <Slider
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                marks={marks}
                min={1}
                max={100}
                valueLabelDisplay="auto"
              />

            </div>
          </div>

          <div className="input-group">

              <div className="card">
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  /> 

                  <div>
                    FaleMais 20
                  </div>
                
              </div>
            
              <div className="card">
                <Radio
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />

                  <div>
                    FaleMais 60
                  </div>
                </div>

                <div className="card">
                <Radio
                  checked={selectedValue === 'c'}
                  onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
                />
                  <div>
                    FaleMais 120
                  </div>
                </div>

              </div>

              <button className="button" type="submit"> Custo da ligação </button>
            </form>

            <section>
                <img src={logoImg} alt="Logo" />

                <p>Com FaleMais você gastaria: </p>
                <h1>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(6000)}</h1>
               
                <p>Sem FaleMais </p>
                <h1>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(100)}</h1>
                
            </section>
        </div>
    </div>
  );
}
