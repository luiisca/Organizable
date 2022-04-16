import {useState} from 'react';

const AddNewList = ({setIsAddingList}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    setIsAddingList(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Shopping" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddNewList;
