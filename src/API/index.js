import axios from 'axios';
//增加默认请求路径
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5adb39f7ca92ef20e1bcf0e8/example';
axios.interceptors.response.use((res) => {
  return res.data;//在这里拦截结果 把结果处理成res.data
})
//获取轮播图数据 返回的是promise对象
export let getSwiper = () => {
  return axios.post('/query_copy_1541483813092');
}
//获取热门图书
export let getHotBook = () => {
  return axios.post('/query_copy_1541483813092');
}
//获取录播图和热门图书
export let getAll = () =>{
  return axios.all([getSwiper(),getHotBook()])
}

//获取全部图书
export let getBook = () => {
  return axios.post('/query_copy_1541483813092');
}
//删除某一本图书
// export let removeBook = (id)=> {
// return axios.delete(`/book?id=${id}`);
// }
//获取某一本书
export let findOneBook = (id) =>{
  return axios.post('/query_copy_1541483813092/id=${id}')
}




