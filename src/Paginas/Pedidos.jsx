
import ListaPrueba from '../Componentes/ListaPrueba'

import WithSearch from '../Componentes/WithSearch'

const pedidos = ['Placa base ','Placa inferior flexible','Corona sobre implante','Corona metal ceramica','Placa contencion']

const WithSearchListPedidos = WithSearch(ListaPrueba)

export default function Pedidos(){
    return(
        <div>
            <div>
                <WithSearchListPedidos title="Pedidos" items={pedidos}/>
            </div> 
        </div>
    )
}