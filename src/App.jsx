import './App.css';

import {  Layout } from 'antd';
import { useState } from 'react';
import { Header } from 'antd/es/layout/layout';

import HeaderApp from './Componentes/HeaderApp';
import SideMenu from './Componentes/SideMenu';
import { Route, Routes } from 'react-router-dom';

import Home from './Paginas/Home'
import Odontologos from './Paginas/Odontologos'
import Pacientes from './Paginas/Pacientes';
import RegistroPedido from './Paginas/RegistroPedido';
import Pedidos from './Paginas/Pedidos';
import Proveedores from './Paginas/Proveedores';
import Materiales from './Paginas/Materiales';

const {  Content,Sider } = Layout

function App() {
  return ( 
    <Layout  className='App-layout' >
    
        <SideMenu />
          
        <Layout className='App-contenido-principal'>
          <Header className='App-header'  >      
             <HeaderApp/>
          </Header>
          <Content className='App-content'>
            <Routes>
              {/* <Route path='/' element={<Home/>}/> */}
              {/* <Route path='/odontologos' element={<Odontologos/>}/>
              <Route path='/pacientes' element={<Pacientes/>}/> */}
              <Route path='/registro-pedido' element={<RegistroPedido/>}/>
              <Route path='/pedidos' element={<Pedidos/>}/>
              {/* <Route path='/proveedores' element={<Proveedores/>}/>
              <Route path='/materiales' element={<Materiales/>}/> */}
            </Routes>
          </Content>
        </Layout>
    </Layout>
  )
}

export default App;