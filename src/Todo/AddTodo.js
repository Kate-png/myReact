import React, {useState} from "react";
import PropTypes from "prop-types";

function useInputValue(defultVlue = ''){
    const [value, setValue] = useState(defultVlue)

    return{
        bind:{
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}

function AddTodo({ onCreate }){

    const input = useInputValue('')

    function submitHendler(event){
        event.preventDefault()
    
        if (input.value().trim()) {
            onCreate(input.value())
            input.clear('')
        }
    }

    return (
        <form style = {{marginBottom: '1rem'}} onSubmit = {submitHendler}>
            <input {...input.bind}/>
            <button type = "submit"> Add todo </button>
        </form>
    )
}

AddTodo.prototype = {
    onCreate: PropTypes.func.isRequired
}


export default AddTodo