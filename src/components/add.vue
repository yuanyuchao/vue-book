<template>
  <div class="add">
    <myHeader>添加</myHeader>
    <div class="content">
      <pop v-show="isShow" >{{msg}}</pop>
      <div>
        <label for="">书名</label>
        <input type="text" v-model="obj.bookName" placeholder="不能为空">
      </div>

      <div>
        <label for="">价格</label>
        <input type="text" v-model="obj.bookPrice" @input="handleInput" placeholder="不能为空">
      </div>
      <div>
        <label for="">简介</label>
        <input type="text" v-model="obj.bookInfo" placeholder="不能为空">
      </div>
        <button @click="addList(obj)">添加</button>
    </div>
  </div>
</template>

<script>
  import myHeader from '../base/myHeader'
  import pop from '../base/alert'
  import {mapMutations,mapState,mapActions} from 'vuex'
    export default {
        name: "add",
      components:{
        myHeader,
        pop,
      },
      data(){
          return{
           obj:{
             bookCover:'https://img12.360buyimg.com/n1/s200x200_jfs/t3199/262/7067558943/58497/e77f3d90/58af0e1bNd71632d2.jpg',
             bookName:'',
             bookPrice:'',
             bookInfo:'',
             bookNumber:1,
             id:Math.random()*10,
           },
            isShow:false,
            msg:'',
          }
      },
      created(){
        this.jumpList();
      },
      methods:{
        addList(obj){
          if (obj.bookName.length==0){
            this.isShow=true;
            this.msg='书名不能为空';
            setTimeout(()=>{
              this.isShow=false;
            },2000)
            return
          };
          if (obj.bookPrice.length==0){
            this.isShow=true;
            this.msg='请输入有效价格';
            setTimeout(()=>{
              this.isShow=false;
            },2000)
            return
          };
          if (obj.bookInfo.length==0){
            this.isShow=true;
            this.msg='书籍信息不能为空';
            setTimeout(()=>{
              this.isShow=false;
            },2000)
            return
          };
          this.add(obj);
        },
        ...mapMutations(['add']),
        jumpList(){
          if(this.list.length==0){
            this.isShow=true;
            this.msg='即将前往列表页获取数据';
            setTimeout(()=>{
              this.isShow=false;
            },2000)
            this.$router.push('/list');
          }
        },
        handleInput(e){
          this.obj.bookPrice=e.target.value.replace(/[^\d.]/g,'');
        },
      },
      computed:{
        ...mapState(['list']),
      },
      updated(){
      }
    }
</script>

<style scoped>
  .content {
    padding: 5px;
  }
  button {
    border: none;
    background-color: yellowgreen;
    width: 100px;
    height: 40px;
    outline: none;
    border-radius: 4px;
    margin-left: 150px;
    font-size: 20px;
    margin-top: 20px;
  }
  label {
    font-size: 20px;

  }
  input {
    display: block;
    width: 97%;
    height: 30px;
    font-size: 20px;
    margin: 10px 0;
    text-indent: 1em;
  }
</style>
