import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrementCount = () => {
        setCount(count + 1);
    };
    const onDecrementCount = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <Button onClick={onDecrementCount} disabled={count <= 0}>Decrement Count</Button>
            <Typography>Current value: {count}</Typography>
            <Button onClick={onIncrementCount}>Increment Count</Button>
        </div>
    );
};

export default Counter;