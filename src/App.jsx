import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/sauce/SharedLayout';
import Services from './components/Main/services/services'
import Projects from './components/Main/projects/projects'
import About from './components/Main/team/team'
import Talk from './components/Main/talk to us/talk';
import Head from './components/Main/head/head'


import './App.module.scss';


function App () {
  return (
    
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Head />} /> 
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/greet" element={<Talk />} /> 
        {/* <Route path="*" element={<Main_Head />} />  */}
      </Route>
    </Routes>
    
  );
}

export default App;
