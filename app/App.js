import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

import Falemais from './src/pages/Falemais';

const app = () => {
  return (
    <>
      <StatusBar  style="auto" />
      <Falemais />
    </>
  );
}

export default app;