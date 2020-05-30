const initState = {
  image: {
    id: '',
    url: '',
    title: '',
    date: '',
  },
  images: [],
  loading: false,
  currentPage: 1,
  postPerPage: 3
};

export default function mainReducer(state=initState, action) {
  switch (action.type) {
    case 'MAIN_IMAGES_REQUEST':
      return {
        ...state,
        loading: true
      };
    case 'MAIN_IMAGES_SUCCESS':
      const img = {
        id: action.payload.id,
        url: action.payload.fixed_height_downsampled_url,
        title: action.payload.title,
        date: new Date().toLocaleTimeString()
      };
      return {
        ...state,
        image: img,
        images: state.images.concat(img),
        loading: false
      };
    case 'MAIN_IMAGES_FAIL':
      console.log('Error Name: ', action.error.name);
      console.log('Error Message: ', action.error.message);
      break;
    case 'HISTORY_DELETE_IMAGE':
      return {
        ...state,
        images: state.images.filter( el => el.id !== action.payload )
      };
    case 'PAGINATION_PAGE':
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      return state;
  }
}