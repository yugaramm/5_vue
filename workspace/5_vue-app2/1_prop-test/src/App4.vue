<template lang="">
  <h1>유저 정보 조회</h1>
  <ul>
    <CheckboxItem v-for='user in users' :key='user.number' :user='user'/>
  </ul>
</template>
<script>
import CheckboxItem from './components/CheckboxItem4.vue';
import User from './user.js';

  export default {
    name : 'App4',
    components : {CheckboxItem},

    data() {
      return {
        users : [
          new User(1, '류호근', true),
          new User(2, '홍길동', true),
          new User(3, '신짱구', true),
          { number : 4, name:'임꺽정', checked : true}
        ]
      }
    },
  }
</script>
<style lang="">
  
</style>