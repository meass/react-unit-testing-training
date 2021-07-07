import * as React from 'react';
import { ListView, ListViewHeader, ListViewFooter } from '@progress/kendo-react-listview';
import { Avatar } from '@progress/kendo-react-layout';
import { Pager } from "@progress/kendo-react-data-tools";

const contacts = [
    {
        "name": "jenson delaney",
        "email": "jenson.delaney@mail.com",
        "image": "Jenson-Delaney",
        "messages": 3
    },
    {
        "name": "amaya coffey",
        "email": "amaya.coffey@mail.com",
        "image": "Amaya-Coffey",
        "messages": 1
    },
    {
        "name": "habib joyce",
        "email": "habib.joyce@mail.com",
        "image": "Habib-Joyce",
        "messages": 5
    },
    {
        "name": "lilly-ann roche",
        "email": "lilly-ann.roche@mail.com",
        "image": "Lilly-Ann-Roche",
        "messages": 8
    },
    {
        "name": "giulia haworth",
        "email": "giulia.haworth@mail.com",
        "image": "Giulia-Haworth",
        "messages": 3
    },
    {
        "name": "dawson humphrey",
        "email": "dawson.humphrey@mail.com",
        "image": "Dawson-Humphrey",
        "messages": 2
    },
    {
        "name": "reilly mccullough",
        "email": "reilly.mccullough@mail.com",
        "image": "Reilly-Mccullough",
        "messages": 3
    }
];

const MyHeader = () => {
  return <ListViewHeader style={{
    color: 'rgb(160, 160, 160)',
    fontSize: 14
  }} className='pl-3 pb-2 pt-2'>
        Contact list
      </ListViewHeader>;
};

const MyFooter = () => {
  return <ListViewFooter style={{
    color: 'rgb(160, 160, 160)',
    fontSize: 14
  }} className='pl-3 pb-2 pt-2'>
        25 unread messages in total
      </ListViewFooter>;
};

const MyItemRender = props => {
  let item = props.dataItem;
  return <div className='row p-2 border-bottom align-middle' style={{
    margin: 0
  }}>
        <div className='col-2'>
          <Avatar shape='circle' type='img'>
            <img src={`https://gist.github.com/simonssspirit/0db46d4292ea8e335eb18544718e2624/raw/2a595679acdb061105c80bd5eeeef58bb90aa5af/${item.image}-round-40x40.png`} />
          </Avatar>
        </div>
        <div className='col-6'>
          <h2 style={{
        fontSize: 14,
        color: '#454545',
        marginBottom: 0
      }} className="text-uppercase">{item.name}</h2>
          <div style={{
        fontSize: 12,
        color: "#a0a0a0"
      }}>{item.email}</div>
        </div>
        <div className='col-4'>
          <div className='k-chip k-chip-filled'>
            <div className='k-chip-content'>
              {item.messages} new messages
            </div>
          </div>
        </div>
      </div>;
};

const KendoListView = () => {

    const [page, setPage] = React.useState({
        skip: 0,
        take: 3,
    });

    const handlePageChange = (e) => {
        setPage({
            skip: e.skip,
            take: e.take,
        });
    };

    const { skip, take } = page;

    return (
        <div>
            <ListView 
                data={contacts.slice(skip, skip + take)} 
                item={MyItemRender} 
                style={{ width: "100%" }} 
                header={MyHeader} 
                footer={MyFooter} 
            />
            <Pager
                skip={skip}
                take={take}
                onPageChange={handlePageChange}
                total={contacts.length}
            />
        </div>
    )
};

export default KendoListView;
