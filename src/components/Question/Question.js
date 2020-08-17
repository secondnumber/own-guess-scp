import React, {useState, useEffect} from 'react';
import {chooseHidden} from '../../../redux/scpReducer';

const Question = ({who, level, chooseHidden}) => {
    const [hidden, setHidden] = useState(null);

    useEffect(() => {
        chooseHidden();
        setHidden(who);
    }, [level]);
    
    return (
        <div>
        Question: {who}
        </div>
    );
};

export default Question;