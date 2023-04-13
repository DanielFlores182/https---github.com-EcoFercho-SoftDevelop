
import {
  
  UserOutlined,
  BankOutlined,
  BgColorsOutlined,
  CarOutlined,
  PhoneOutlined,
  ManOutlined,
  WomanOutlined,
} from '@ant-design/icons';

import {  Input, Tooltip, Space, DatePicker, Button, Form} from 'antd';
import React, { useState } from 'react';
import { Checkbox, Col, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';


const onChange = (checkedValues) => {
  console.log('checked = ', checkedValues);
};

const onChange2 = (date, dateString) => {
    console.log(date, dateString);
  };

//Controlar el texto, solo letras y mayusculas
function allLetter(inputtxt)
  {
   var letters = /^[A-Za-z]+$/;
   if(inputtxt.value.match(letters))
     {
      return true;
     }
   else
     {
     alert("message");
     return false;
    }
}

//Funcion para validar los espacios vacios
function validate(evt) {
    var Letra =  /^[a-zA-Z]+$/;
    if ( document.evt.match(Letra) ) {
        alert("Enter a name");
        
       document.evt.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.myForm.name.value)) {
        alert("Invalid characters");
        document.myForm.name.focus();
        return false;
    }
}

const dateFormat = 'DD/MM/YYYY';

const { TextArea } = Input;
const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
const { value, onChange } = props;

const handleChange = (e) => {
const { value: inputValue } = e.target;
const reg = /^-?\d*(\.\d*)?$/;
if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
    onChange(inputValue);
}
};

  // '.' at the end or only '-' in the input box.
const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
        valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
};

const title = value ? (
<span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
) : (
'Input a number'
);

return (
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
        <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={8}
        />
    </Tooltip>
  );
};



export default function RegistroPedido(){

    
   
  
    const [value, setValue] = useState('');
    return (
    <Content className='Formulario-principal'>
            <Content className="site-layout">
            
            <div className='Formulario-1'>
                    <h3>Clinica</h3>
                  
                   
                       
                    
                    <Input 
                        type='text' 
                        name='clinica'
                        placeholder="Ingrese nombre de la clinica" 
                        required='true'
                        maxLength={60}
                        prefix={<BankOutlined/>} />
                    <h3>Odontologo</h3>
                <Input maxLength={64} placeholder="Ingrese nombre completo del odontologo" prefix={<UserOutlined/>}/>
                    <h3>Direccion</h3>
                <Input  maxLength={64} placeholder="Ingrese direccion de la clinica" prefix={<CarOutlined />}/>
                    <h3>Telefono</h3>
                <NumericInput  
                    placeholder='Ingrese el numero de telefono'
                    prefix={<PhoneOutlined />}
                    style={{width: 300,}}
                    value={value}
                    onChange={setValue}
                />
    
                    <h3>Descripcion</h3>
                <TextArea  maxLength={756} rows={4} />
                    <Space direction="horizontal">
                        <h3>Fecha de Recibo</h3>
                        <DatePicker style={{width: 160,}} format={dateFormat} placeholder='Selecione la fecha' onChange={onChange2}  />
                        <h3>Fecha de Entrega</h3>
                        <DatePicker style={{width: 160,}} format={dateFormat} placeholder='Selecione la fecha' onChange={onChange2} />
                    </Space>
                
            </div>
    
            <div className='Formulario-1'>
    
                        <h3>Paciente</h3>
                    <Input maxLength={64} placeholder="Ingrese nombre del paciente" prefix={<UserOutlined/>}/>
                        <h3>Colorimetro</h3>
                    <Input maxLength={30} placeholder="Ingrese codigo de colorimetro" prefix={<BgColorsOutlined />}/>
       
    
                    <h3>Edad</h3>
                    <Input maxLength={3} placeholder='Ingrese la edad'   style={{width: 300,}}/>

                  
                    <h3>Sexo</h3>
                    <Row >
                        <Col span={5}>
                            <Checkbox value="Masculino"><ManOutlined /></Checkbox>
                        </Col>
                        <Col span={5}>
                            <Checkbox value="Femenino"><WomanOutlined /></Checkbox>
                        </Col>
                    </Row>
                
                <div className='App-campo-prioridad'>
                    <Row>
                        <Col span={8}>
                            <Checkbox value="Urgente"><h3>Urgente</h3></Checkbox>
                        </Col>
                        <Col span={20}>  
                            <Checkbox value="Entregado"><h3>Entregado</h3></Checkbox>
                        </Col>
                    </Row>
                </div>
                    
            </div>
        </Content>

        <div className='Formulario-ultima-parte'>
        <Checkbox.Group
                onChange={onChange}
            >
                <div>
                    <h3>Ingresa</h3>
                    <Row>
                        <Col span={9}>
                            <Checkbox value="Antagonista">Antagonista</Checkbox>
                        </Col>
                        <Col span={20}>
                            <Checkbox value="Articulador">Articulador</Checkbox>
                        </Col>
                    </Row>
                </div>
                
                <div className='implante'>
                    <h3>Implante</h3>
                    <Row>
                        <Col span={24}>
                            <Checkbox value="Transfer">Transfer</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Checkbox value="Analogo">Analogo</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Checkbox value="Tornillo">Tornillo</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Checkbox value="Uclas Mec.">Uclas Mec.</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Checkbox value="Otros">Otros</Checkbox>
                        </Col>
                     </Row>
                </div>

                <div className='Titulos-columnas'>
                    <h3>Caracterizacion</h3>
                    <Row >
                        <Col  span={20}>Cara Oclusal</Col>
                        <Col  span={21}>Zona Cervical</Col>
                        <Col  span={16}>Incisal</Col>
                        <Col  span={20}>Mamelones</Col>
                    </Row>

                </div>
               
                <div className='columna-caracterizacion'>
                    <Row>
                        <Col span={9}>
                            <Checkbox value="Si1">Si</Checkbox>
                        </Col>
                        <Col span={20}>
                            <Checkbox value="Oscura">Oscura</Checkbox>
                        </Col>
                        <Col span={9}>
                            <Checkbox value="Translucida">Translucida</Checkbox>
                        </Col>
                        <Col span={20}>
                            <Checkbox value="Si2">Si</Checkbox>
                        </Col>
                        
                    </Row>
                </div>

                <div className='columna-caracterizacion'>
                    <Row>
                        <Col span={9}>
                            <Checkbox value="No1">No</Checkbox>
                        </Col>
                        <Col span={20}>
                            <Checkbox value="Normal1">Normal</Checkbox>
                        </Col>
                        <Col span={9}>
                            <Checkbox value="Normal2">Normal</Checkbox>
                        </Col>
                        <Col span={20}>
                            <Checkbox value="No2">No</Checkbox>
                        </Col>
                        
                    </Row>
                </div>
            
            </Checkbox.Group>
            <h3>Cantidad</h3>
            <Input style={{width: 200,}} placeholder='Ingrese la cantidad'/>
            <div className='Botones-registrar'>
                <Button  size='large' className='Btn-registrar'  >Cancelar</Button>
                <Button  size='large'  className='Btn-registrar'>Registrar</Button>
            </div>
        </div>
        

    </Content>
  )
}