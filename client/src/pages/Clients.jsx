import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'
import "primereact/resources/themes/nova-alt/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  

export const Clients = () => {
    const [clients, setClients] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const response = await axios.get("/clients");
                setClients(response.data);
            } catch(e) {
                console.log(e);
            }
        };
        fetchData();
    }, []);

/*    const allClients = () => {
        return (
            {clients.map((client) => (
            {client.name, client.phone, client.email}
        )})
    };*/
    console.log(clients);

    

    return (
        <div className='clients'>
            <div className='actionButtons'>
                <Button icon='pi pi-pencil'></Button>
            </div>
            <div className='container'>
                <DataTable value={clients} responsiveLayout="scroll" size='small' stripedRows selectionMode='single'>
                    <Column field='Name' header="Назва"></Column>
                    <Column field='Phone' header="Телефон"></Column>
                    <Column field='Email' header="Електронна пошта"></Column>
                    <Column field='Person' header="Представник"></Column>
                </DataTable>
            </div>
        </div>

    )
} 

    


export default Clients;