import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedNumber = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(value, 10);
        if (start === end) return;

        let totalDuration = 2000;
        let incrementTime = (totalDuration / end);

        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {count}
        </motion.span>
    );
};

export default AnimatedNumber;
