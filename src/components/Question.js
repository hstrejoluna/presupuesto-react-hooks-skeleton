import React, { useState } from 'react';
import Error from './Error';

function Question(props) {
    const { saveBudget, SaveQuestionBudget, saveRemain } = props;

    // definir el state
    const [ quantity, saveQuantity ] = useState(0);
    const [ error, saveError ] = useState(false);

    // validar el budget
    const submitBudget = e => {
        e.preventDefault();

        // validar
        if( quantity < 1 || isNaN(quantity) ) {
            saveError(true);
            return;
        }

        // Si se pasa la validación
        saveError(false);
        saveBudget(quantity);
        saveRemain(quantity);
        SaveQuestionBudget(false);
    }

    return(
        <>
            <h2>Enter your Budget</h2>

            {error ? <Error message='Budget is incorrect'/> : null }

            <form
                onSubmit={submitBudget}
        >
            <input type="number"
            className="u-full-width"
            placeholder="Enter your budget"
            onChange={e => saveQuantity( parseInt(e.target.value, 10) ) }
            />
            <input type="submit" className="button-primary u-full-width" value="Define Budget" />
            </form>
            </>
    );
}
export default Question;