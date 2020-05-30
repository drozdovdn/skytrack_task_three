export const getImages = () => {
  return async function (dispatch) {
    try {
      dispatch({type: 'MAIN_IMAGES_REQUEST'});
      const data = await fetch('https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY')
        .then((response)=> {return response.json()})
        .then((response)=> {return response.data});
      dispatch({type: 'MAIN_IMAGES_SUCCESS', payload: data});
    }catch (e) {
      dispatch({type: 'MAIN_IMAGES_FAIL'});
    }
  }
}