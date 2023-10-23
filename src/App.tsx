import React,{FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
const App :FC = () => {
  return (
    <div className="App">
      <Header header="ToDo"/>
      <Container header='Today'/>
    </div>
  );
}

export default App;
