import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom"
import axios from "axios"

export const Clients = () => {
    const [clients, setClients] = useState([]);

    const location = useLocation();

    console.log(location);

    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get("/clients");
                setClients(res.data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchData();
    }, [clients]);

    return (
        {Clients.map(client)};
    )
}

export default Clients