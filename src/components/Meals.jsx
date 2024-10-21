"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    const [search, setSearch] = useState("a");
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState("")
    console.log(meals)


    const loadData = async () => {
        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            const data = await res.json();
            console.log(data.meals)
            setMeals(data.meals)
            setError("")
        } catch (error) {
           // console.log(error.message);
            setError("no data found")
        }
    }

    const handler = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)
    };

    // if(meals?.length === 0){
    //     return <h4>no data found ........</h4>
    // }

    useEffect(()=>{
        loadData();
    },[])



    return (
        <div className='mt-12 ml-8'>
            <input
                onChange={handler}
                className='
       p-4 
       outline-none
       border-transparent text-slate-900' type="text"
                placeholder='search meals' />
            <button onClick={() => loadData()} className='bg-red-400 p-4'>search</button>

            <div className='mt-12 grid grid-cols-3 gap-12'>
                {
                   meals.length > 0 && !error && meals?.map((meal) => (
                        (
                            <div className='border-2 p-4' key={meal?.idMeal}>
                                <h6> {meal.strMeal}</h6>
                               <Image src={meal?.strMealThumb} alt={meal?.strMeal} width={500} height={400}></Image>
                                <p>{meal.strInstructions}</p>
                            </div>
                        )
                    )
                    )
                }
                {
                    error && <h6>no data found.......</h6>
                }
            </div>
        </div>
    );
};

export default Meals;