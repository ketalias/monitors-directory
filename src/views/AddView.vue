<template>
  <div class="container">
    <AddStudent />
  </div>
</template>

<script>
import AddStudent from "@/components/AddStudent.vue";

export default {
  name: "AboutView",
  components: {
    AddStudent,
  },
};
</script>

<style lang="scss" scoped>
$black: #000;
$white: #fff;
$dark-green: #004d00;
</style>
