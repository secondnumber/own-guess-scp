import React, {useState, useEffect} from 'react';
import {chooseHidden} from '../../../redux/scpReducer';

const Question = ({who, chooseHidden}) => {
    const [hidden, setHidden] = useState(null);

    useEffect(() => {
        chooseHidden();
        setHidden(who);
    }, [hidden]);

    console.log(who);
    
    return (
        <div>
        Question: {who}
        </div>
    );
};

export default Question;