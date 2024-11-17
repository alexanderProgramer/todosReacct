import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState,setFormState] = useState(initialForm);

    
    
   
    const onInputChange = ({target}) => {
        const {name, value} = target;
        console.log({value});
        console.log({name});

        setFormState({
            ...formState,
            [name]: value
        })
    }

   
    return (
        <>
        <h1>Formulario Simple</h1>
        <hr />
        <input type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value = {username}
        onChange={onInputChange} />

        <input type="email"
        className="form-control"
        placeholder="alexanderpretyboy@gmai.com"
        name="email"
        value={email}
        onChange={onInputChange}/>

        {
           [ (username === 'strider2') && <Message/>,
            (email ==='alexanderInge@gmail.com') && <Message/>
        ]
        }
        </>

    )

}