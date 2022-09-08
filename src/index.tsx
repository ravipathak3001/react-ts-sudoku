import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import reportWebVitals from './core/reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { Card,Content,Grid,NewButton, Title, Numbers } from 'components';
import { GlobalStyles, theme } from 'styles';
import { configureStore } from 'core';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = configureStore()
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Provider store={store}>
    <Content data-cy="content">
      <Title data-cy="title">
        Sudoku
      </Title>
      <Card data-cy="card">
        <NewButton/>
       <Grid/>
       <Numbers/>
      </Card>
    </Content>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
