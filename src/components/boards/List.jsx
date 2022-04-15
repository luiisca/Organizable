import {Droppable, Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

import Card from './Card';

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
                {provided.placeholder}
              </CardsContainer>
            )}
          </Droppable>
          {/*<div className="list-add-card">
        <AddCard listId={list.id} />
        </div>*/}
        </Container>
      )}
    </Draggable>
  );
}
export default List;
