import { Layout, Menu } from 'antd'
import {  UserOutlined, 
    ReconciliationOutlined,
    ScheduleOutlined, 
  } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Sider from 'antd/es/layout/Sider';
import { useState } from 'react';

function getItem(label, key, icon, children, type) {
return {
    key,
    icon,
    children,
    label,
    type,
};
}


const items = [
    //getItem((<Link to="/odontologos">Odontologos</Link>),'1',<UserOutlined />),
    //getItem((<Link to="/pacientes">Pacientes</Link>),'2',<UserOutlined />),
    getItem('Pedidos', 'sub1', <ScheduleOutlined />, [
      getItem((<Link to="/registro-pedido">Registrar pedido</Link>), '3'),
      getItem((<Link to="/pedidos">Lista de pedidos</Link>), '4'),
    ]),
    //getItem((<Link to="/proveedores">Proveedores</Link>),'5', < UserOutlined />),
    //getItem((<Link to="/materiales">Materiales</Link>),'6', < ReconciliationOutlined />)
]

export default function SideMenu(){
  const [collapsed, setCollapsed] = useState(false);
    return(
      
          <Sider 
          className='App-sider'
          breakpoint='xxl'
          collapsible collapsed={collapsed} 
          onCollapse={(value) => setCollapsed(value)}  
          >
            <div>
            <div
              style={{
                height: 32,
                margin: 16,
                background: 'rgba(255, 255, 255, 0.2)',
              }}
            />
            <Menu theme="dark" 
            defaultSelectedKeys={['1']} 
            mode="inline" 
            items={items} />
        </div>
        </Sider>
     
      
    )
}