<template>
  <div>
    {{toDo}}
    <button @click="delToDo(index)">Delete</button>
  </div>
</template>

<script>
export default {
  name: "todoitem",

  props: ["toDo", "index", "toDoArr"],

  methods: {
    delToDo() {
      this.$emit("removeToDo", this.index);
    }
  }
};
</script>

<style scoped>
</style>