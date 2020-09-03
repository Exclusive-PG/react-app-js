const VIEWED_PRODUCT = "VIEWED_PRODUCT";


const initialState = {
  viewed: [],
};

const ViewedProducts = (state = initialState, action) => {
  switch (action.type) {
    case VIEWED_PRODUCT: {
      let copy = { ...state };
       copy.viewed = [...state.viewed];
      copy.viewed.push(action.product);
      console.log(copy);
      return copy;
    }

    default:
      return state;
  }
};

export const addProductToListAC = (product) => ({
  type: VIEWED_PRODUCT,
  product,
});

export default ViewedProducts;

