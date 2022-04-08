export default (state, action) => {
  switch (action.type) {
    case 'LOGIN':
       return {...state, user: action.user};
    case 'LOGOUT':
      return {...state, user: null};
    case 'SET_BOARDS':
      return {...state, boards: action.boards};
    default:
      return state;
  };
};
