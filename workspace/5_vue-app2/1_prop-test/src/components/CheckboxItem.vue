<template lang="">
    <input type='checkbox' :checked='checked'>{{name}}
    <br>
</template>
<script>
    export default {
      name : 'CheckboxItem',
      props : ['name', 'checked']  
    }
</script>
<style lang="">
    
</style>