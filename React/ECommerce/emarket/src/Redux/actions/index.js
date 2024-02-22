import {POST_ADDED,POST_REMOVED } from '../actions/ActionTypes/index';

export const postAdded=(product)=>{
    return {
        type:POST_ADDED,
        payload:product

    }
}


export const postRemoved=(product)=>{
    return {
        type:POST_REMOVED,
        payload:product

    }
};