import { List, Divider } from 'antd'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';



const pedidos = ['Placa ','Placa ','Corona ','Corona ','Placa ','Placa ','Corona ','Corona ','Placa ']
const descripcion1 =['Placa inferior flexible']

export default function ListaPrueba(props){



    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const loadMoreData = () => {
      if (loading) {
        return;
      }
      
    };
    useEffect(() => {
      loadMoreData();
    }, []);


    return(
            
        <div>
            <InfiniteScroll
                dataLength={pedidos.length}
                next={loadMoreData}
                hasMore={pedidos.length < 20}
                
                endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List  
                className='App-list'
                 dataSource={props.dataSource} renderItem={
                     (item) => (
                         <List.Item>
                            
                             <List.Item.Meta
                                 title={item}
                                 description={descripcion1}
                             />
                         </List.Item>
                     )
                 }
                
                
            >
            </List>
            </InfiniteScroll>



            {/* <List  
                className='App-list'
                 dataSource={props.dataSource} renderItem={
                     (item) => (
                         <List.Item>
                            
                             <List.Item.Meta
                                 title={item}
                               description="Aqui vendra la descripcion de los pedidos"
                             />
                         </List.Item>
                     )
                 }
                 height={ContainerHeight}
                
            >
            </List> */}
        </div>
    )
}