import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
import DataTable from 'react-data-table-component'


export const Clients = () => {
    const [clients, setClients] = useState([]);

    const fetchData = async ()=>{
        try {
            const response = await axios.get("/clients");;
            setClients(response.data);
        } catch(e) {
            console.error(e);
        }
    };
    
    useEffect(()=>{
        fetchData();
    }, [setClients]);

    const allClients = clients.map(client => {
        return (
            <div className={client.id}>{client.name}</div>
        )
    });

    const columns = [
        {
            name: "Назва",
            selector: row => row.name,
        },
        {
            name: "Телефон",
            selector: row => row.phone,
        },
        {
            name: "Електронна пошта",
            selector: row => row.email,
        },
    ];


    return (
        <>
            <DataTable
                columns={columns}
                data={allClients}
            />
        </>
    )
} 

    


export default Clients;