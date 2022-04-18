import {useForm} from 'react-hook-form';
import {createList} from '../../services/lists-service';


const AddNewList = ({board, setBoard, boardId, setIsAddingList}) => {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();

  const onAddList = async (data) => {
    try {
      let newList = await createList({name: data.listName}, boardId);
      delete newList.boardId;
      newList = {
        ...newList,
        cardOrder: [],
      }

      setBoard({
        ...board,
        lists: {
          ...board.lists,
          [`list-${newList.id}`]: newList
        },
        listOrder: [...board.listOrder, `list-${newList.id}`]
      });
      setIsAddingList(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className='add-list-form' onSubmit={handleSubmit(onAddList)}>
      <input
        {...register('listName')}
        name="listName"
        placeholder="Shopping" />
      <button type="submit" disabled={!watch('listName')} >Add</button>
    </form>
  );
}

export default AddNewList;
