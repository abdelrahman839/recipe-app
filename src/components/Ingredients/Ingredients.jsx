import React, { useEffect } from 'react'
import IngredientsStyle from './Ingredients.module.css'
import { FaClock, FaFireAlt, FaWeightHanging } from 'react-icons/fa'
import Typed from 'react-typed';
import $ from 'jquery'
function Ingredients({ Ingredients }) {
    function jqueryAnimation() {
        $(`.${IngredientsStyle.slideDowm}`).slideDown(500, function () {
            $(`.${IngredientsStyle.recipe_img} , .${IngredientsStyle.line}`).show(1000, function () {

                $(`.${IngredientsStyle.Nutrient_info} , .${IngredientsStyle.recipe} li  , .${IngredientsStyle.recipe} h3`).animate({
                    opacity: 1
                }, 1000)
            })

        });
    }
    return (
        <>
            <section className="container mx-auto mt-100 text-center ">
                <h1 className=" w-75 mx-auto mb-5">
                    <Typed
                        strings={[`${Ingredients.label}`]}
                        typeSpeed={40}
                        showCursor={false}
                        onComplete={jqueryAnimation}
                    />

                </h1>

                <div className={`${IngredientsStyle.slideDowm}`}>
                    <div className={`${IngredientsStyle.recipe} row px-3 `}>

                        <div className={`${IngredientsStyle.recipe_img}`}>
                            <img src={Ingredients.image} alt={Ingredients.label} className="img-fluid" />
                        </div>

                        <div className={`${IngredientsStyle.ingredients} col-md-6  h-100`}>
                            <h3 className="mt-3">Ingredients</h3>
                            <ul className="text-left mt-5 pl-3">
                                {Ingredients.ingredients.slice(0, 6).map((value, index) => {
                                    return (
                                        <li key={index} className="w-50 py-1">{value.text}</li>

                                    )
                                })}
                            </ul>

                        </div>
                        <div className={`${IngredientsStyle.line}`}></div>
                        <div className={`${IngredientsStyle.Nutrition} col-md-6   h-100 text-center`}>
                            <h3 className="mt-3 w-100 text-center">Nutrition Info</h3>
                            <div className={`${IngredientsStyle.Nutrient_info} row justify-content-center align-items-center mt-5 `}>
                                <FaFireAlt className="pr-1"></FaFireAlt>
                                <p className="pr-4">{Math.trunc(Ingredients.calories)}</p>
                                <FaClock className="pr-1"></FaClock>
                                <p className="pr-4">{Ingredients.totalTime}</p>
                                <FaWeightHanging className="pr-1"></FaWeightHanging>
                                <p >{Math.trunc(Ingredients.totalWeight)}</p>
                            </div>

                            <div className={`${IngredientsStyle.Nutrient_info} row justify-content-center align-items-center mt-5 `}>

                                <h6>Total Nutrients : </h6>
                                <p className="pl-1"> {Ingredients.digest.length}</p>
                            </div>
                            <div className={`${IngredientsStyle.Nutrient_info} row justify-content-center align-items-center mt-5 `}>
                                <h6>Yield : </h6>
                                <p className="pl-1"> {Ingredients.yield}</p>
                            </div>




                        </div>

                    </div>

                </div>
            </section>
            <div className="my-5"></div>
        </>
    )
}

export default Ingredients
