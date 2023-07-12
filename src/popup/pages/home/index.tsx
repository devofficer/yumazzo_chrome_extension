import React from 'react';
import Description from '@/popup/components/description';
import Details from '@/popup/components/details';
import Flex from '@/popup/components/flex';
import SearchBox from '@/popup/components/searchbox';
import Toolbar from '@/popup/components/toolbar';
import useRecipes from '@/popup/store/useRecipes';
import styles from './home.module.css';

export default function Home() {
  const { activeRecipe } = useRecipes();

  return (
    <div className={styles.container}>
      <Flex dir="column" gap={24}>
        <SearchBox />
        <Toolbar recipe={activeRecipe} />
        <Description difficulty="Medium" description="Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area." />
        <Details />
      </Flex>
    </div>
  );
}