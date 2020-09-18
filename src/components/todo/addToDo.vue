<template>
  <div>
    <h2>addToDo</h2>
    <div v-if="toDoArr.length < 7">
      <input type="text" placeholder="Input ToDo" v-model="inpTxt" />
      <button @click="addToDo">Add ToDo</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addToDo",

  data: function() {
    return {
      inpTxt: ""
    };
  },

  props: ["toDoArr"],

  methods: {
    addToDo() {
      this.$emit("addToDoApp", this.inpTxt);
      this.inpTxt = "";

      // if (this.inpTxt.length > 0) {
      //     this.toDoArr.push(this.inpTxt)
    }
  }
};
</script>

<style scoped>
</style>
