import Meals from '@/components/Meals';
import React from 'react';
import style from './styles.module.css'

const page = () => {
    
    return (
       
        <div>
            <h2 className={style.font_tomato}>choose your meals</h2>
            <p>search the meals .......</p>
            <Meals></Meals>
        </div>

    );
};

export default page;