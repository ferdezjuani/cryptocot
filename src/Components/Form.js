import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import useCoin from '../hooks/useCoin';

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #15e620;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #ffffff;
    transition: background-color .3s ease;

    &:hover{
        background-color: #025f07;
        cursor: pointer;
    }
`

const Form = () => {

    const [coin, SelectCoin] = useCoin('Choice your coin');

    return ( 

        <form>

                <SelectCoin /> 

                <Button
                        type= "submit"
                        value= "Calculate!"
                />
        </form>

     );
}
 
export default Form;