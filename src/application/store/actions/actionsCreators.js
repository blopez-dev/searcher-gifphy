export const actions = {
  LOAD_GIF: 'LOAD_GIF'
};

import {searchGif} from '../../../common/services'

export function searchGif(){
  return async (dispatch) => {
    dispatch({
      type: actions.LOAD_GIF,

    })
  }
}
