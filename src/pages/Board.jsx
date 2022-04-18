import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

import {useBoardContext} from '../context/BoardProvider';
import useOffSetState from '../hooks/useOffSetState';

import List from '../components/boards/List';
import AddNewList from '../components/forms/AddNewList';

const BoardContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Board = () => {
  const [isAddingList, setIsAddingList] = useState(false);
  const {id} = useParams();
  const {board, setBoard, getBoard} = useBoardContext();
  useOffSetState('.add-list-form', isAddingList, setIsAddingList);

  const onDragEnd = (result) => {
    // console.log(result);
    const {destination, source, draggableId, type} = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }

    if (type == 'list') {
      let newListOrder = [...board.listOrder];
      newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, draggableId);
      setBoard({...board, listOrder: newListOrder});
      return;
    };

    const startList = board.lists[source.droppableId];
    const endList = board.lists[destination.droppableId];
    const startCardOrder = startList.cardOrder;
    const endCardOrder = endList.cardOrder;

    if (destination.droppableId == source.droppableId) {
      startCardOrder.splice(source.index, 1);
      startCardOrder.splice(destination.index, 0, draggableId);
      setBoard({
        ...board,
        lists: {
          ...board.lists,
          [source.droppableId]: {
            ...startList,
            cardOrder: startCardOrder,
          },
        },
      });
      return;
    };

    startCardOrder.splice(source.index, 1);
    endCardOrder.splice(destination.index, 0, draggableId);
    setBoard({
      ...board,
      lists: {
        ...board.lists,
        [source.droppableId]: {
          ...startList,
          cardOrder: startCardOrder,
        },
        [destination.droppableId]: {
          ...endList,
          cardOrder: endCardOrder,
        }
      }
    })
  };

  useEffect(() => {
    getBoard(id);
  }, [id]);

  return (
    board ?
      <div>
        <div>
          <h1>Hello {board.name}</h1>
          <h2>{board.starred ? 'Starred' : ''}</h2>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId='all-lists'
            direction='horizontal'
            type='list'>
            {(provided) => (
              <BoardContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {board.listOrder.map((listId, index) => (
                  <List
                    key={listId}
                    list={board.lists[listId]}
                    board={board}
                    index={index} />
                ))}

                {provided.placeholder}

                {isAddingList ? (
                  <AddNewList
                    board={board}
                    setBoard={setBoard}
                    boardId={id}
                    setIsAddingList={setIsAddingList} />
                ) : (
                  <button
                    onClick={() => setIsAddingList(true)}
                  >Add new list</button>
                )}
              </BoardContainer>
            )}
          </Droppable>
        </DragDropContext>

      </div> :
      <h1>Loading...</h1>
  );
};

export default Board;
