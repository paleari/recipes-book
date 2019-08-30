import React from 'react';
import styles from './styles/recipeItem.module.scss';
import texts from './texts';

const getIngredientsList = (ingredients) => (
    ingredients
    .split(",")
    .map((ingredient, index) => 
        <li key={index+ingredient} className={styles.recipe__ingredient}>
            {ingredient.trim()}
        </li>
    )
);

const checkLactose = (ingredients) => ingredients.match(/milk|cheese/i);

const RecipeItem = ({item}) => (
    <>
        <a href={item.href} className={styles.recipe__a}>
            <div className={styles.recipe__image_wrapper}>
                {checkLactose(item.ingredients) &&
                    <span className={styles.recipe__label}>{texts.LABEL_LACTOSE}</span>
                }
                <img className={styles.recipe__image} alt={"Recipe"} src={item.thumbnail}/>
            </div>
            <div className={styles.recipe__title}>
                {item.title}   
            </div>     
            <button className={styles.recipe__button}>
                    {texts.BUTTON_FAVORITE}
            </button>
            <ul className={styles.recipe__ingredients}>
                {getIngredientsList(item.ingredients)}
            </ul>
        </a>
    </>
)

export default RecipeItem;