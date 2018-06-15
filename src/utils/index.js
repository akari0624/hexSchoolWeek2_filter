import axios from 'axios'
import { combineReducers } from 'redux'
import {LocationAPI_baseUrl} from '../api_url'



export const wrapToAction = (typeText, data) => ({type: typeText, payload: data})

const fetchOneAreaData = urlIncludeAreaName => {

  return new Promise((resolve, reject) => {

    axios
      .get(urlIncludeAreaName)
      .then(res => resolve(res.data))
      .catch(err => reject(err))

  })
}



export const fetchAllRealData = async() => {



  try {
    const fullData = {
      q:'',
      records: [],
      total: 0,
      errorMsg: ''
    }

    const resultArr = await Promise.all(KaohsiungAllAreaName.map(areaName => `${LocationAPI_baseUrl}&q=${areaName}`).map(
      async (url) => { return await fetchOneAreaData(url)
      }

    ))

    resultArr.forEach(obj => {

      obj
        .result
        .records
        .forEach(dd => fullData.records.push(dd))

    }) 

    fullData.total = fullData.records.length

    return fullData

  } catch (err) {
    throw new Error('抓取資料時發生錯誤，程式中止:' + err)
  }

  

}

// length = 38
export const KaohsiungAllAreaName = [
  '楠梓區',
  '左營區',
  '鼓山區',
  '三民區',
  '苓雅區',
  '新興區',
  '前金區',
  '鹽埕區',
  '前鎮區',
  '旗津區',
  '小港區',
  '鳳山區',
  '茂林區',
  '甲仙區',
  '六龜區',
  '杉林區',
  '美濃區',
  '內門區',
  '仁武區',
  '田寮區',
  '旗山區',
  '梓官區',
  '阿蓮區',
  '湖內區',
  '岡山區',
  '茄萣區',
  '路竹區',
  '鳥松區',
  '永安區',
  '燕巢區',
  '大樹區',
  '大寮區',
  '林園區',
  '彌陀區',
  '橋頭區',
  '大社區',
  '那瑪夏區',
  '桃源區'
]


export const returnDefaultRootReducer = () => {

  const locationData = {records:[],q:'',total:0,errorMsg:''}
  const appConditionNow = {isInLoading:false}
  const currPageInfo =  {
    currPage:1,
    rowPerpage:5,
  }
  const searchTerm = ''
  const afterConditionDataCount = 0
  const checkedArea = []
  

  return  combineReducers({
    locationData,
    appConditionNow,
    currPageInfo,
    searchTerm,
    afterConditionDataCount,
    checkedArea,

  })

  


}
