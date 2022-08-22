import React, { useState } from 'react'
import Button from '../components/Button'
import  FlashCards  from '../components/FlashCards'
import Header from '../components/Header'
import Main from '../components/Main'
import {allFlashCards} from '../data/allFlashCards'
import FlashCard from '../components/FlashCard'
import {helperShuffleArray} from '../helpers/arrayHelpers'
import RadioButton from '../components/RadioButton'

function FlashCardsPage() {
    const [allCards, setAllCards] = useState(allFlashCards)
    const [showTitle, setShowTitle] = useState(true);

    function handleButtonClick() {
        const shuffledCards = helperShuffleArray(allCards)
        setAllCards(shuffledCards)
    }

    function handleRadioShowTitleClick(){
        setShowTitle(true);
    }

    function handleRadioShowDescriptionClick(){
        setShowTitle(false);
    }

    return (
        <>
        <Header>React FlashCard - V1</Header>
        <Main>
            <div className="text-center mb-4">
            <Button onButtonClick = {handleButtonClick}>Embaralhar Cards</Button>
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 m-4">
                <RadioButton 
                id = "radioButtonShowTitle" 
                name="showInfo"
                buttonChecked = {showTitle}
                onButtonClick= {handleRadioShowTitleClick}
                >
                    Mostrar Títulos
                </RadioButton>

                <RadioButton  
                id = "radioButtonShowDescription" name="showInfo"
                buttonChecked = {!showTitle}
                onButtonClick= {handleRadioShowDescriptionClick}

                >
                    Mostrar Descrições
                    </RadioButton>
            </div>
            <FlashCards>
            {allCards.map(({id, title,description}) => {
                        return (
                        <FlashCard 
                        key={id} 
                        title={title} 
                        description={description}
                        showFlashCardTitle={showTitle}
                        />
                        )
                    })}
            </FlashCards>
        </Main>
    </>
    )
    }

export default FlashCardsPage
