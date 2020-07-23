import React, { useState} from 'react';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import PGCN from '../../services/PGCN';

import './styles.css';
import logoImg from '../../assets/falemais.png';


export default function Register() {

  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
  ];

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
      label: '+ 100 min ',
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
    <div className="register-container">
        <div className="content">
        
            <form onSubmit={hadleRegister}>

            <div className="input-group">

            <Autocomplete
              id="combo-box-demo"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Ligação de:" variant="outlined" />}
            />

            <Autocomplete
              id="combo-box-demo2"
              options={top100Films}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Para:" variant="outlined" />}
            />

          </div>
            
           
          <Typography id="discrete-slider-small-steps" gutterBottom>
            Minutos
          </Typography>

          <Slider
            defaultValue={1}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks={marks}
            min={1}
            max={100}
            valueLabelDisplay="on"
          />

              <div className="input-group">

              <div>
              <Radio
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value="a"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'A' }}
                /> 

                FaleMais 20
                
              </div>
            
              <div>
                <Radio
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value="b"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'B' }}
                />

                FaleMais 60
                </div>

                <div>
                <Radio
                  checked={selectedValue === 'c'}
                  onChange={handleChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
                />
                  FaleMais 120
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
