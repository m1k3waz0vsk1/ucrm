import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios"
import DataTable from 'react-data-table-component'


export const Clients = () => {
    const [clients, setClients] = useState([]);

    const fetchData = async ()=>{
        try {
            const response = await axios.get("/clients");
            setClients(response.data);
        } catch(e) {
            console.error(e);
        }
    };
    
    useEffect(()=>{
        fetchData();
    }, [setClients]);

    return (
        <>
            КЛІЄНТИ
            {
                    clients.map((client) => {
                        return (
                            {client} )
                    })
                    
            }
        </>
    )
} 

    


export default Clients;