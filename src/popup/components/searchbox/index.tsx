import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMagnifyingGlass, faNoteSticky } from '@fortawesome/free-solid-svg-icons';

import styles from './searchbox.module.css';
import CountryFlag from '../countryflag';
import NoteSticky from '../notesticky';
import useRecipes from '@/popup/store/useRecipes';
import { RecipeType } from '@/utils/types/recipe';
import { DIFFICULITY } from '@/utils/constants/difficulty';

export default function SearchBox() {
  const store = useRecipes();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    store.filter(keyword);
  };

  const handleSelectRecipe = (recipe: RecipeType) => {
    store.setActiveRecipe(recipe);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input onChange={handleChange} className={styles.searchInput} type="text" placeholder="Search cruisine"/>
      </div>
      <div className={styles.menu}>
        {store.filteredRecipes.map((recipe: RecipeType, idx: number) => {
          return (
            <div key={idx} className={styles.menuItem} onMouseDown={() => handleSelectRecipe(recipe)}>
              <div className={styles.country}>
                <CountryFlag countryCode={recipe.origin} />
                <span className="country-label">{recipe.name}</span>
              </div>
              <div className={styles.detail}>
                <NoteSticky status={DIFFICULITY[recipe.difficulty]}/>
                <span className={styles.status}>{DIFFICULITY[recipe.difficulty]}</span>
                <span className={styles.spliter}></span>
                <span className={styles.delay}>{recipe.serves}min</span>
              </div>
            </div>
          );
        }
        )}
      </div>
    </div>
  );
}