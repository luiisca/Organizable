import Card from './Card';

const List = ({list}) => {
  return (
    <div className="list">
      <div className="list-header">
        <h3>{list.name}</h3>
        <button className="btn btn-danger">Delete</button>
      </div>
      <div className="list-cards">
        {list.cards.map(card => <Card key={card.id} card={card} />)}
      </div>
      {/*<div className="list-add-card">
        <AddCard listId={list.id} />
      </div>*/}
    </div>
  );
}
export default List;
