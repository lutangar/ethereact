export const createEntitiesReducer = schema =>
  (state = {}, action) => {
    if (action.entities && action.entities[schema.getKey()]) {
      return state.mergeDeep(action.entities[schema.getKey()]);
    }

    return state;
  };
