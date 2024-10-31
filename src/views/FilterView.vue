<template>
  <div>
    <h1>Список студентів</h1>
    <input v-model="searchTerm" placeholder="Пошук за прізвищем" />

    <div class="student-list">
      <student-item
        v-for="student in filteredStudents"
        :key="student.lastName"
        :student="student"
        @deleteStudent="handleDeleteStudent"
      />
    </div>
  </div>
</template>

<script>
import StudentItem from "@/components/StudentItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "StudentList",
  components: {
    StudentItem,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    ...mapGetters(["getStudents"]),
    filteredStudents() {
      return this.getStudents
        ? this.getStudents.filter((student) =>
            student.lastName
              .toLowerCase()
              .includes(this.searchTerm.toLowerCase())
          )
        : [];
    },
  },
  methods: {
    ...mapActions(["deleteStudent"]),
    handleDeleteStudent(lastName) {
      this.deleteStudent(lastName);
    },
  },
};
</script>

<style lang="scss" scoped>
$black: #000;
$white: #fff;
$dark-green: #004d00;

h1 {
  color: $black;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid $black;
  border-radius: 5px;
  font-size: 1em;
  margin-bottom: 20px;

  &:focus {
    border-color: $dark-green;
    outline: none;
  }
}

.student-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
