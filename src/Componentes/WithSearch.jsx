import { Input } from "antd"
import { useState, useEffect } from "react"

const { Search } = Input
const onSearch = (value) => console.log(value)

export default function WithSearch(Component){
    return function WithSearComponent({title, items, ...props}){
        
        const [ dataSource, setDataSource ] = useState([])

        useEffect(() =>{
            setDataSource(items)
        }, [items])

        function onChangeInput(evento){
            const text = evento.target.value   
            const result = items.filter(item => String(item).toLowerCase().startsWith(String(text.toLowerCase())))
            setDataSource(result)
        }

        return(
            <div>
                <div className='App-subtitulo-buscador'>
                <h4>Lista de pedidos</h4>
                <Search className='search' placeholder={ "Buscar".concat(title)} onChange={onChangeInput} 
                    allowClear
                    onSearch={onSearch} 
                />   
                </div>
                <Component dataSource={dataSource} {...props}/>
            </div>
        )
    }
}