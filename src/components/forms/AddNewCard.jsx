import {createCard} from '../../services/cards-service'
import {useForm} from 'react-hook-form';

import {useBoardContext} from '../../context/BoardProvider';

const AddNewCard = ({listId, setAddingCard}) => {
  const {board, setBoard} = useBoardContext();
  const {register, handleSubmit, errors} = useForm();
  const onAddCard = async (data) => {
    try {
      const card = await createCard(listId, {name: data.title});
      const newListId = `list-${listId}`;
      const newCardId = `card-${card.cardId}`;

      const newList = {
        ...board.lists[newListId],
        cardOrder: [...board.lists[newListId].cardOrder, newCardId],
      };

      const newBoard = {
        ...board,
        cards: {
          ...board.cards,
          [newCardId]: card,
        },
        lists: {
          ...board.lists,
          [newListId]: newList,
        },
      };

      setBoard(newBoard);
      // console.log(newBoard);
      setAddingCard(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className='add-card-form' onSubmit={handleSubmit(onAddCard)}>
      <input
        name="title"
        placeholder="Milk"
        {...register('title')} />
    </form>
  )
}

export default AddNewCard;
