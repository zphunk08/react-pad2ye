import * as React from 'react';
import ReactDOM from 'react-dom';
import { StyledEngineProvider } from '@mui/material/styles';
import Demo from './demo';
import QuizSlider from './quizStepper';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <Demo />
    <QuizSlider />
  </StyledEngineProvider>,
  document.querySelector('#root')
);
