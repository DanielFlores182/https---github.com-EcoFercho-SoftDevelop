
import VirtualList from 'rc-virtual-list';
import { List, Avatar, message } from 'antd'
import { useState, useEffect } from 'react';

const ContainerHeight = 400
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';

export default function ListaPedidos(){
    
    const [data, setData] = useState([]);
    const appendData = () => {
        fetch(fakeDataUrl)
          .then((res) => res.json())
          .then((body) => {
            setData(data.concat(body.results))
          });
      };
    const onScroll = (e) => {
        if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
          appendData();
        }
      }
    useEffect(() => {
    appendData();
    }, [])
    return(
      <List className='App-list'>
          <VirtualList
              data={data}
              height={ContainerHeight}
              itemHeight={47}
              itemKey="email"
              onScroll={onScroll}
          >
              {(item) => (
              <List.Item key={item.email}>
                  <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a>{item.name.last}</a>}
                  description={item.email}
                  />
              </List.Item>
              )}
          </VirtualList>
      </List>
    )
}