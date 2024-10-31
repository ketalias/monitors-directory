<template>
  <div class="student-item">
    <h3>
      {{ student.lastName }} {{ student.firstName }} {{ student.middleName }}
    </h3>
    <p>Дата останнього чергування: {{ student.lastDutyDate }}</p>
    <p>Стать: {{ student.gender }}</p>
    <p>Адреса: {{ student.address }}</p>
    <button @click="handleDeleteStudent">Видалити</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    student: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(["deleteStudent"]),

    handleDeleteStudent() {
      this.deleteStudent(this.student.lastName);
    },
  },
};
</script>

<style lang="scss" scoped>
$black: #000;
$white: #fff;
$dark-green: #4aa9a5;

.student-item {
  background-color: $white;
  border: 1px solid $black;
  border-radius: 5px;
  padding: 15px;
  margin: 10px auto;
  max-width: 400px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h3 {
    color: $black;
    margin: 0 0 10px 0;
  }

  p {
    color: $black;
    margin: 5px 0;
  }

  button {
    background-color: $dark-green;
    color: $white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: darken($dark-green, 10%);
    }
  }
}
</style>
