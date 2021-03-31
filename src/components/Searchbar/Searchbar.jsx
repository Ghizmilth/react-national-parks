import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { Button, Input } from "@material-ui/core";
import styles from './Searchbar.module.css';
                      

const handleChange = (e) => {

}

const handleSearch = (e) =>
e.preventDefault();


const Searchbar = () => {
    return (
        <div>
            <form onSubmit={ handleSearch }>
                <Input className="searchInput" name="parkName" color="primary" placeholder="Type name of National Park Here" inputProps={{ 'aria-label': 'description'}} onChange={ handleChange }/>
                <Button 
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={styles.button}
                    startIcon={<SearchIcon />}
                >
                </Button>
            </form>
        </div>
    )
}


export default Searchbar;