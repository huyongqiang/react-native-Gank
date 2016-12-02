/**
 * Created by wangdi on 2/12/16.
 */
'use strict';

import * as TYPES from '../actions/actionTypes';

const initialState = {
    dataSource: [],
    isStarred: false
};

export default function favorData(state=initialState, action) {
    switch(action.type){
        case TYPES.UPDATE_STAR_LIST:
            return Object.assign({}, state, {
                ...state,
                dataSource: action.list
            });

        case TYPES.STAR_DATA_SUCCESS:
            return Object.assign({}, state, {
                isStarred: true,
                dataSource: action.list
            });

        case TYPES.UPDATA_STAR_STATE:
            return Object.assign({}, state, {
                ...state,
                isStarred: action.isStarred
            });

        default:
            return state;
    }
}