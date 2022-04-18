import {useState} from 'react';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

import useOffSetState from '../../hooks/useOffSetState';

import Card from './Card';
import AddNewCard from '../../components/forms/AddNewCard';

const Container = styled.div`
  background: #AAA;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.6);
  margin-right: 20px;

  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CardsContainer = styled.div`
  background: #FFF;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.6);
  margin-top: 10px;
  padding: 10px;
  height: 100%;
`;

const List = ({list, board, index}) => {
  const [addingCard, setAddingCard] = useState(false);
  useOffSetState('.add-card-form', addingCard, setAddingCard);

  return (
    <Draggable
      draggableId={`list-${list.listId}`}
      index={index}
    >
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <h3>{list.name}</h3>
            <button>Delete</button>
          </div>
          <Droppable
            droppableId={`list-${list.listId}`}>
            {(provided) => (
              <>
                <CardsContainer
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {list.cardOrder.map((cardId, index) => (
                    <Card
                      key={cardId}
                      card={board.cards[cardId]}
                      index={index} />
                  ))}
                  {addingCard && (
                    <AddNewCard
                      listId={list.listId}
                      setAddingCard={setAddingCard} />
                  )}

                  {provided.placeholder}
                </CardsContainer>
                {!addingCard ? (
                  <button onClick={() => {
                    console.log('button clicked')
                    setAddingCard(true)
                  }}>Add card</button>
                ) : ''}
              </>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}
export default List;
