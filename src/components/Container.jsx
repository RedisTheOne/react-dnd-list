import { useCallback, useEffect, useState } from 'react';

import { Card } from './Card';
import update from 'immutability-helper';

const style = {
  width: 400,
};
export const Container = () => {
  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if(localStorage.getItem('ITEMS')) {
      setCards(JSON.parse(localStorage.getItem('ITEMS')));
    } else {
      setCards([
        {
          id: 1,
          text: 'Write a cool JS library',
        },
        {
          id: 2,
          text: 'Make it generic enough',
        },
        {
          id: 3,
          text: 'Write README',
        },
        {
          id: 4,
          text: 'Create some examples',
        },
        {
          id: 5,
          text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
        },
        {
          id: 6,
          text: '???',
        },
        {
          id: 7,
          text: 'PROFIT',
        },
      ]);
    }
  }, []);

  useEffect(() => {
    if(cards.length > 0) {
      localStorage.setItem('ITEMS', JSON.stringify(cards));
    }
  }, [cards]);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    const dragCard = cards[dragIndex];
    setCards(update(cards, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragCard]
      ]
    }));
  }, [cards]);

  const renderCard = (card, index) => {
    return <Card key={card.id} index={index} id={card.id} text={card.text} moveCard={moveCard} />;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    setCards(prev => {
      return [...prev, { id: prev.length + 1, text: inputValue }]
    });
  };
  
  return (
    <>
      <center>
        <h2>Add Item</h2>
        <form onSubmit={formSubmit}>
          <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <button type="submit">Add</button>
        </form>
      </center>
      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </>
  );
}

