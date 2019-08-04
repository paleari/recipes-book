import React from 'react';
import styles from './styles/recipeItem.module.scss';
import texts from './texts';

const RecipeItem = (item) => (
    <div className={styles.recipe}>
        <img className={styles.recipe__image} alt={"Recipe"} src={item.thumbnail}/>
        <div className={styles.recipe__content}>
            <span className={styles.recipe__title}>
                {item.title}
            </span>
            <button className={styles.recipe__button}>
                {texts.BUTTON_FAVORITE}
            </button>
            <div className={styles.recipe__ingredients}>
                {item.ingredients}
            </div>
        </div>
    </div>
)

export default RecipeItem;