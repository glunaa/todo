import React ,{FC}from 'react';
import TodoList from './TodoList';
interface Props{
    header: string;
}
const Container:FC<Props> = ({header}) =>{
    return(
        <div className='container'>
            <h3>{header}</h3>
            <TodoList/>
        </div>
    )
}
export default Container;