/**
 * Created by wangdi on 1/12/16.
 */
'use strict';

const FAVOR_DATA = 'favorData';

import {AsyncStorage} from 'react-native';

export default class FavouriteDataDAO{

    save(dataList){
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(FAVOR_DATA, JSON.stringify(dataList), (error)=>{
                if(!error)
                    resolve('收藏成功');
                else
                    reject('收藏失败');
            });
        });
    }

    getFavouriteList(){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(FAVOR_DATA, (error, result) => {
                if(!error){
                    const list = JSON.parse(result);
                    if(list){
                        resolve(list);
                    }else{
                        reject(null);
                    }
                }else{
                    reject(null);
                }
            });
        });
    }
}