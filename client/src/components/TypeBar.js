import React, {useContext,useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from 'react-bootstrap';
import getRandomInt from './NavBar';
import Navbar from './NavBar'
import { fetchCoints } from '../http/deviceAPI';
import jwt_decode from "jwt-decode";



    


const TypeBar = observer(() => {
    const {device} = useContext(Context)
    const {coins} = useContext(Context)

    const onClick = async (type) => {
        device.setSelectedType(type)
        const token = `${localStorage.getItem('token')}`
        console.log(jwt_decode(token).id,type.name)
        const res= await fetchCoints(jwt_decode(token).id,type.name)
      
        const TEMP_RANDOM_VALUE =Math.floor(Math.random() * (500 - 50)) + 50
        console.log(TEMP_RANDOM_VALUE)
        coins.setCoins(TEMP_RANDOM_VALUE) //передаю коины

        console.log(coins)
    }
    return (
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={type.id === device.selectedType.id}
                    onClick ={()=>{
                        onClick(type)
                    }}
                    key={type.id}
                    

                >
                    {type.name}
                </ListGroup.Item>
                
            )}
        
        </ListGroup>
    );
});

export default TypeBar;
