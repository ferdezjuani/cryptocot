import React, {Fragment, useState} from 'react';

const useCoin = () => {
    <Fragment>
    const[state, refreshState] = useState('');  
    
    const SelectCoin = () => (
        
            <label>Coin</label>
            <select>
                <option value="ARS">AR$</option>
            </select>
        
    );
    </Fragment>

    return[state, SelectCoin, refreshState];

}
 
export default useCoin;