import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
  background-color: salmon;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

const Card = ({card, index}) => {
  return (
    <Draggable
      draggableId={`card-${card.cardId}`}
      index={index}
    >
      {provided => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <h2>{card.name}</h2>
        </Container>
      )}
    </Draggable>
  )
}

export default Card;
