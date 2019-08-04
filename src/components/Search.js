import React, {useState} from 'react';
import {connect} from 'react-redux';
import {getRecipes} from '../store/ducks/recipesDuck';
import styles from './styles/search.module.scss';
import texts from './texts';
import {ReactComponent as IconSearch} from '../static/icons/search.svg';

const Search = ({submit}) => {

    const [search, setSearch] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(search.length > 3){
            submit(search);
        }
    }

    return (
        <div className={styles.search}>
            <form onSubmit={handleSubmit}>
                <IconSearch className={styles.search__icon}/>
                <input
                    className={styles.search__input}
                    placeholder={texts.TITLE_SEARCH}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    submit: (searchQuery) => dispatch(getRecipes(searchQuery))
});

export default connect(null, mapDispatchToProps)(Search);