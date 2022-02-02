import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Alert from './Components/Alert';
import Navigation from './Components/Navigation';
import Templates from './Components/Templates';
import { fetchTemplates } from './Redux/actions/Templates';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplates());
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Alert />
      <Templates />
    </div>
  );
}

export default App;
