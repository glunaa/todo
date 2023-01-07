import React ,{FC}from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
interface Props{
    header: string;
}
const Container:FC<Props> = ({header}) =>{
    return(
        <div className='container'>
            <h3>{header}</h3>
            <InputGroup className='mb-3'>
                <Form.Control
                    placeholder='Add task...'
                    aria-label='Add task...'
                    aria-describedby='basic-addon2'/>
            </InputGroup>  
            <Button variant='primary'>Add</Button>  
        </div>
    )
}
export default Container;