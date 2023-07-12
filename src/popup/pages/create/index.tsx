import TextField from '@/popup/components/textfield';
import ToolButton from '@/popup/components/toolbutton';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/utils/constants/routes';
import Button from '@/popup/components/button';
import Flex from '@/popup/components/flex';
import SelectBox from '@/popup/components/selectbox';
import TextArea from '@/popup/components/textarea';

import styles from './create.module.css';
import { authenticities, difficulties, origins } from '@/utils/mock';
import { FormProvider, useForm } from 'react-hook-form';

export default function Recipe() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(ROUTES.home);
  };


  const methods = useForm();

  const onSubmit = methods.handleSubmit(data => {
    console.log(data);
  });

  
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ToolButton transparent icon={faChevronLeft} handler={handleBack} />
        <span className={styles.title}>Add new recipe</span>
      </div>
      <div className={styles.content}>
        <FormProvider {...methods}>
          <form noValidate onSubmit={e => e.preventDefault()}>
            <Flex gap={24} dir="column">
              <Flex gap={10} justifyContent="space-between">
                <TextField name="name" label="name"/>
                <SelectBox name="origin" label="origin" items={origins}/>
              </Flex>
              <TextArea 
                name="description" 
                label="description" 
                maxLength={200}
                placeholder="Describe your recipe..."
              />
              <Flex gap={10} justifyContent="space-between">
                <SelectBox name="difficulty" label="difficulty" items={difficulties} type="number"/>
                <TextField name="protein" label="protein"/>
              </Flex>
              <Flex gap={10} justifyContent="space-between">
                <TextField name="produce" label="produce"/>
                <TextField name="spice" label="spice"/>
              </Flex>
              <Flex gap={10} justifyContent="space-between">
                <TextField name="cookingOil" label="Cooking Oil?"/>
                <TextField name="volume" label="volume" unit="gram" type="number"/>
              </Flex>
              <Flex gap={10} justifyContent="space-between">
                <TextField name="serves" label="serves" unit="people" type="number"/>
                <SelectBox name="authenticity" label="authenticity" items={authenticities}/>
              </Flex>
              <TextField name="stock" label="stock" size="full"/>
              
              <Button label="Add Recipe" type='submit' handler={onSubmit}/>
            </Flex>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}