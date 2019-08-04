import React from 'react';
import {connect} from 'react-redux';
import {recipesSelector} from '../store/ducks/recipesDuck';
import RecipeItem from './RecipeItem';
import styles from './styles/recipeList.module.scss';

const RecipesList = ({recipes}) => (
    <div className={styles.recipe_list}>    
        {recipes.map(item => 
                <RecipeItem item={item}/>
            )}
    </div>
)

const mapStateToProps = (state) => ({
    recipes: recipesSelector(state)
})

export default connect(mapStateToProps, null)(RecipesList);

