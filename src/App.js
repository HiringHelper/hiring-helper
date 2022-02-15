import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import showModalSlice from './redux/showModalSlice.js';
import ColumnContainer from './components/ColumnContainer/ColumnContainer.jsx';
import Header from './components/Header/Header.jsx';

const App = () => {
  const modals = useSelector((state) => {state.modals})
  const jobModal = useSelector((state) => {state.modals.jobModal})


  return (
    <div id='app'>
      <Header />
      <ColumnContainer />
    </div>
  );
};

export default App;
