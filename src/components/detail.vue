<template>
  <div class="detail">
    <MyHeader :back="true">详情</MyHeader>
    <div class="content">
      <Alert v-show="isShow">{{msg}}</Alert>
      <div>
        <label for="">书名</label>
        <input type="text" v-model="obj.bookName">
      </div>

      <div>
        <label for="">价格</label>
        <input type="text" v-model.number="obj.bookPrice" @input="handleInput">
      </div>
      <div>
        <label for="">简介</label>
        <input type="text" v-model="obj.bookInfo">
      </div>
      <button @click="newRevise(obj)" @keyup.enter="newRevise(obj)">确认修改</button>
    </div>

  </div>

</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  export default {
    name: "detail",
    data() {
      return {
        obj: {
          id: '',
          bookName: '',
          bookPrice: '',
          bookInfo: '',
          bookCover: '',
          bookNumber: 1,
          isSelected:false
        },
        isShow:false,
        msg:'',
      }
    },
    created() {
      this.getSaveData();//如果页面刷新后vuex里的list的值为空，就把本地储存的值赋值给list。
      this.getMsg(this.id);//根据id来获取不同书籍的各种信息。
    },
    methods: {
      getSaveData(){
        if(this.list==''){
          this.getSave();
        }
      },
      //存储数据

      newRevise(obj){
        if(this.obj.bookName.length==0){
          this.isShow=true;
          this.msg='书名不能为空';
          setTimeout(()=>{
            this.isShow=false;
          },2000)
          return
        };
        if(this.obj.bookPrice.length==0){
          this.isShow=true;
          this.msg='请输入有效价格';
          setTimeout(()=>{
            this.isShow=false;
          },2000)
          return
        };
        if(this.obj.bookInfo.length==0){
          this.isShow=true;
          this.msg='书籍信息不能为空';
          setTimeout(()=>{
            this.isShow=false;
          },2000);
          return
        };
        this.revise(obj);
      },
      ...mapMutations(['update', 'revise','getSave']),
      // async getOneBook(){
      //  let {data} = await findOneBook(this.id);
      //  this.book = data.list;
      // }
      // getData() {
      //   this.name = this.$route.query.name;
      //   this.price = this.$route.query.price;
      //   this.info = this.$route.query.info;
      //   this.bid = this.$route.query.id;
      // },
      getMsg(id) {
        for (let i = 0; i < this.list.length; i++) {
          if (id == this.list[i].id) {
            this.obj.bookName = this.list[i].bookName;
            this.obj.bookPrice = this.list[i].bookPrice;
            this.obj.bookInfo = this.list[i].bookInfo;
            this.obj.id = this.list[i].id;
            this.obj.bookCover = this.list[i].bookCover;
            this.obj.bookNumber = this.list[i].bookNumber;
            this.obj.isSelected = this.list[i].isSelected;
          }
        }
      },
      handleInput(e){
        this.obj.bookPrice=e.target.value.replace(/[^\d.]/g,'');
      },
    },
    computed: {
      ...mapState(['list']),
      id() {
        return this.$route.query.id;
      }
    }
  }
</script>

<style scoped>
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    z-index: 100;
  }

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
