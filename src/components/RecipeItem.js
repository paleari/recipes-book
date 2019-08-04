import React from 'react';
import styles from './styles/recipeItem.module.scss';
import texts from './texts';

const getIngredientsList = (ingredients) => (
    ingredients
    .split(",")
    .map((ingredient, index) => 
        <li key={index+ingredient}>
            {ingredient}
        </li>
    )
);

const hasLactose = (ingredients) => ingredients.match(/milk|cheese/i);

const RecipeItem = ({item}) => (
    <div className={styles.recipe}>
        <a href={item.href} className={styles.recipe__a}>
            <div className={styles.recipe__image_wrapper}>
               {hasLactose(item.ingredients) &&
                 <span className={styles.recipe__label}>{texts.LABEL_LACTOSE}</span>
               }
                <img className={styles.recipe__image} alt={"Recipe"} src={item.thumbnail}/>
            </div>
            <span className={styles.recipe__title}>
                {item.title}        
                <button className={styles.recipe__button}>
                    {texts.BUTTON_FAVORITE}
                </button>
            </span>
            <ul>
                {getIngredientsList(item.ingredients)}
            </ul>
        </a>
    </div>
)

export default RecipeItem;