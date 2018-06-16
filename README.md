# 2018 六角學院 - The F2E - 前端修練精神時光屋 week2 filter


### DEMO page


### 本週相關資訊
- [主辦單位提供的參考設計稿](https://hexschool.github.io/THE_F2E_Design/week2-filter/)
- [高雄旅遊景點API網址](https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97)
- [FB上的討論](https://www.facebook.com/groups/173311386703334/learning_content/?filter=377909922704174&post=181532992547840)
- 本週題目由 [Will 保哥](https://github.com/doggy8088)提供，  
2018/06/15 他將在[FB上](https://www.facebook.com/will.fans/videos/2124246790937787/)直播示範本週程式開發相關技巧

### project meta data
- 使用react + redux 開發
- css的解決方案是使用 [Styled-Components](https://github.com/styled-components/styled-components)
- react開發起手式使用[自己整理出來的這一套](https://github.com/akari0624/react-starter-boilerplate) 


### 值得一提的使用到的第三方Library
- 大部分的CSS和動畫都是用Styled-Components手刻，只有  
  - [分頁區](https://github.com/akari0624/hexSchoolWeek2_filter/blob/master/src/landingPage/containers/PaginationArea.js) 用了[antd的Pagination](https://ant.design/components/pagination/)  
  - [左方行政區篩選區](https://github.com/akari0624/hexSchoolWeek2_filter/blob/master/src/landingPage/components/KCGAreaCheckboxGroup.js)用了[antd的CheckboxGroup](https://ant.design/components/checkbox/#Checkbox-Group)

### note
- API有點問題，只會回傳100筆景點資料，所以我在reactDOM render前，先用38個行政區的名字作為參數，用Promise.all包起來，像API做38次像是 
```javascript
// url:
......&q=${行政區名}
```
這樣的請求，才能夠抓到完整的資料(有265筆)。
抓取完後再把[這些資料整理成init state丟進redux裡 變成store](https://github.com/akari0624/hexSchoolWeek2_filter/blob/60c297717db3f2c766a3c8c3d0bb870477498571/src/index.js#L28)


### bug
- 目前手機上滑動起來相當不順





