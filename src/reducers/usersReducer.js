import ACTION_TYPES from "../actions/actionTypes";

const initialState = { 
  users: [
      {
        id: Date.now(),
        name: 'Myself',
        phone: '+380509409056',
        isBanned: false,
      },
  ],
};

const usersReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.CREATE_USER: {
      const { userData } = action;
      const { users } = state;
      const newUser = {
        ...userData, id: Date.now(), isBanned: false
      };
      const newUsers = [...users, newUser];
      return { users: newUsers };
    }
    case ACTION_TYPES.DELETE_USER: {
      const { index } = action;
      const { users } = state;
      return { users: users.splice(index, 1)}
    }
    default: 
      return state;
  }  
};

export default usersReducer;
