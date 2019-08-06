import React from 'react';
import {connect} from 'react-redux';
import {recipesSelector} from '../store/ducks/recipesDuck';
import RecipeItem from './RecipeItem';
import styles from './styles/recipeList.module.scss';

const RecipesList = ({recipes}) => (
        <ul className={styles.recipe_list}> 
            {recipes && recipes.map(item => 
                <li className={styles.recipe_list__item} key={item.href}>
                    <RecipeItem item={item}/>
                </li>
            )}
        </ul>
    );

const mapStateToProps = (state) => ({
    recipes: recipesSelector(state)
})

export default connect(mapStateToProps, null)(RecipesList);

