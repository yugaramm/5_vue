<template lang="">
  <h1>유저 정보 조회</h1>
  <ul>
    <CheckBoxItem v-for='user in users' :key='user.number'
     :number='user.number' :name='user.name' :checked='user.checked'/>
  </ul>
</template>
<script>
import CheckBoxItem from './components/CheckboxItem.vue';

export default {
  name : 'App',
  components : {CheckboxItem},

  data() {
    return {
      users : [
        {number : 1, name : "유가람", checked : true},
        {number : 2, name : "홍길동"},
        {number : 3, name : "신짱구"},
        {number : 4, name : "임꺽정", checked : true},
      ]
    }
  },
}
</script>
<style lang="">
  
</style>