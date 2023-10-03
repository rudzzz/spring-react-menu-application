import "./card.css"
import { useState } from 'react';

interface InputProps{
    label: string,
    value: string | number,
    updatedValue(value: string | number): void
}

const Input = ({lael, value, updatedValue}: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updatedValue(event.target.value)}></input>
        </>
    )
}


export function CreateModal(){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    return (
        <>
            <div className="modal-overflow">
               <div className="modal-body">
                    <h2>Register a new item</h2>
                    <form className="form-container" action="">
                        <Input label="title" value={} updatedValue={}/>
                        <Input label="price" value={} updatedValue={}/>
                        <Input label="image_url" value={} updatedValue={}/>
                    </form>
               </div>
            </div>
        </>
    )
}