import React from 'react'
import { Alert } from "react-bootstrap";

export default function Error({errormsg}){

    if (errormsg !== "") {
        return (
            <Alert variant="danger" >
                <Alert.Heading>{errormsg}</Alert.Heading>
            </Alert >
        );
    } else {
        return null
    }
}