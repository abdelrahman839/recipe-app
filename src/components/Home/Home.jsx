import axios from 'axios';
import React, { useState } from 'react'
import HomeStyle from './Home.module.css'
import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch } from 'react-icons/fa'
import bgImage from '../../images/bg.jpeg'
import { NavLink } from 'react-router-dom';
import Typed from 'react-typed';
function Home({ getIngredients }) {
    // API
    const App_ID = "8af1c415";
    const App_Key = "7c08f6370ea6339f6b833e549e73662c";

    // 
    const [chick, setChick] = useState(false)
    const [recipes, setRecipes] = useState([]);

    // fetch recipes from API
    const getData = async ({ target }) => {
        if (target.value === "") {
            setChick(false);
        } else if (target.value.length > 3) {
            setChick(true)
            const URl = `https://api.edamam.com/search?q=${target.value}&app_id=${App_ID}&app_key=${App_Key}`;
            const { data } = await axios.get(URl);
            setRecipes(data.hits);
        }


    }

    return (
        <>
            <header style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}>
                <div className={`${HomeStyle.header_content}  `}>
                    <h1>
                        <Typed
                            strings={['Find a Recipe']}
                            typeSpeed={40}
                            showCursor={false}
                        />
                    </h1>
                    <div className="position-relative">
                        <input type="text" onChange={getData} placeholder="Type more than 3 letters"  />
                        <FaSearch className={`${HomeStyle.search_icon}`}></FaSearch>
                    </div>
                </div>
            </header>

            {chick ? <div className="container  mx-auto my-5 ">
                <div className="row">
                    {recipes.map((value, index) => {
                        return (

                            <div key={index} className="col-lg-4 col-md-6  my-3 pl-3 pr-3  ">
                                <div className={`${HomeStyle.recipe_img}  shadow`}>
                                    <img src={value.recipe.image} alt={value.recipe.label} className="w-100" />
                                </div>
                                <div className={`${HomeStyle.recipe_content}  px-2   shadow d-flex  flex-column justify-content-between`}>
                                    <div className="row align-items-center justify-content-between">
                                        <p>{value.recipe.mealType}</p>
                                        <p>{value.recipe.cuisineType}</p>
                                    </div>
                                    <div className="d-flex flex-column justify-content-between  h-132">
                                        <h4 className="mb-3">{value.recipe.label}</h4>
                                        <NavLink to="ingredients"><button onClick={() => { getIngredients(value.recipe) }} className="btn text-center w-100 my-2 py-2">Ingredients</button></NavLink>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> : <div className="container  mx-auto row justify-content-center align-items-center my-5">
                <FaArrowUp className={`${HomeStyle.search_animation}`}></FaArrowUp>
                <FaArrowUp className={`${HomeStyle.search_animation}`}></FaArrowUp>
                <FaArrowUp className={`${HomeStyle.search_animation}`}></FaArrowUp>
                <h3 className="mx-3">Search</h3>
                <FaArrowUp className={`${HomeStyle.search_animation}`}></FaArrowUp>
                <FaArrowUp className={`${HomeStyle.search_animation}`}></FaArrowUp>
                <FaArrowUp className={`${HomeStyle.search_animation}`}></FaArrowUp>

            </div>}

            <footer className=" w-100 ">
                <div className="container py-4 mx-auto">
                    <div className="row px-4">
                        <div className="col-md-8">
                            <h5 className="mb-3 ">ABOUT ME</h5>
                            <p className="text-muted">I am studying engineering in the software engineering <br /> department of the Egyptian Chinese University. <br />I have 7 months of experience with front-end  Web development. </p>
                        </div>
                        <div className="col-md-4">
                            <h5 className="mb-3 ">KEEP In TOUTCH </h5>
                            <p className="text-muted">Phone: +01064598472</p>
                            <p className="text-muted">E-mail: asdddghjh@gmail.com</p>
                            <p className="text-muted">abdelrahmanabdallah9800@gmail.com</p>
                            <div className=" d-flex justify-content-between align-items-center col-5  p-0">
                                <a href="https://www.facebook.com/abdelrahman.elsherif.397?_rdc=1&_rdr" target="_blank"><FaFacebookF className={`text-muted ${HomeStyle.social}`} ></FaFacebookF></a>
                                <a href="https://www.linkedin.com/in/abdelrahman-abdallah-85b5481ab/" target="_blank"><FaLinkedinIn className={`text-muted ${HomeStyle.social}`}></FaLinkedinIn></a>
                                <a href="https://www.instagram.com/abdo_code/?hl=en" target="_blank"><FaInstagram className={`text-muted ${HomeStyle.social}`}></FaInstagram></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Home
