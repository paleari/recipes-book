import React from 'react';
import {connect} from 'react-redux';
import {getRecipes} from '../store/ducks/recipesDuck';
import styles from './styles/search.module.scss';
import {ReactComponent as IconSearch} from '../static/icons/search.svg';

export const Search = ({submit}) => {

    const [search, setSearch] = React.useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(search.length > 3){
            submit(search);
        }
    }

    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit} id='searchForm'>
                <div className={styles.search__input_parent}>
                    <IconSearch className={styles.search__icon}/>
                    <input
                        id='searchInput'
                        className={styles.search__input}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    submit: (searchQuery) => dispatch(getRecipes(searchQuery))
});

export default connect(null, mapDispatchToProps)(Search);