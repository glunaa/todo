import React ,{FC}from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
interface Props{
    header: string;
}
const Container:FC<Props> = ({header}) =>{
    return(
        <div className='container'>
            <h3>{header}</h3>
            <div>
            <InputGroup className='mb-3 inputText'>
                <Form.Control
                    placeholder='New task...'
                    aria-label='New task...'
                    aria-describedby='basic-addon2'/>
            </InputGroup>  
            <Button variant='primary'>Add</Button>  
            </div>
            
        </div>
    )
}
export default Container;