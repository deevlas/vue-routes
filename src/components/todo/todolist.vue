<template>
  <div>
    <h2>todolist</h2>

    <ul>
      <li v-for="(toDo, i) in toDoArr" :key="i">
        <todoitem @removeToDo="remToDoList" :toDo="toDo" :index="i" />
      </li>
    </ul>
  </div>
</template>

<script>
import todoitem from "./todoitem";

export default {
  name: "todolist",

  components: {
    todoitem
  },

  props: ["toDoArr"],

  methods: {
    remToDoList(i) {
      this.$emit("removeToDoApp", i);
    }
  }
};
</script>

<style scoped>
</style>