import {useState} from 'react';


export const useForm = (initialState: object = {}): [any, ({target}: any) => void, (newFormState?: {}) => void] => {

    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    }

    const handleInputChange = ({target}: any) => {

        setValues({
            ...values,
            [target.name]: target.value
        });

    }

    return [values, handleInputChange, reset];
}
