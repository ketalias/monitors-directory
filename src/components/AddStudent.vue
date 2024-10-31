<template>
  <div class="add-student">
    <h2>Додати нового студента</h2>
    <form @submit.prevent="addNewStudent">
      <label for="firstName">Ім'я:</label>
      <input type="text" v-model="firstName" required />
      <label for="lastName">Прізвище:</label>
      <input type="text" v-model="lastName" required />
      <label for="middleName">По-батькові:</label>
      <input type="text" v-model="middleName" />
      <label for="lastDutyDate">Дата останнього чергування:</label>
      <input type="date" v-model="lastDutyDate" />
      <label for="gender">Стать:</label>
      <select v-model="gender" required>
        <option value="">Оберіть стать</option>
        <option value="чоловіча">Чоловіча</option>
        <option value="жіноча">Жіноча</option>
      </select>
      <div>
        <label for="address">Адреса:</label>
        <input type="text" v-model="address" required />
      </div>
      <button type="submit">Додати студента</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      middleName: "",
      lastDutyDate: "",
      gender: "",
      address: "",
    };
  },
  methods: {
    ...mapActions(["addStudent"]),
    addNewStudent() {
      const newStudent = {
        firstName: this.firstName,
        lastName: this.lastName,
        middleName: this.middleName,
        lastDutyDate: this.lastDutyDate,
        gender: this.gender,
        address: this.address,
      };
      this.addStudent(newStudent);

      this.firstName = "";
      this.lastName = "";
      this.middleName = "";
      this.lastDutyDate = "";
      this.gender = "";
      this.address = "";
    },
  },
};
</script>

<style lang="scss" scoped>
$black: #000;
$white: #fff;
$dark-green: #359e83;
$gray: #f3f3f3;
$error-red: #d9534f;
$success-green: #5cb85c;

.add-student {
  background-color: $white;
  border: 1px solid $black;
  border-radius: 8px;
  padding: 25px;
  margin: 30px auto;
  max-width: 420px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  h2 {
    color: $dark-green;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 100%;

    label {
      color: darken($black, 20%);
      font-weight: 500;
      margin-bottom: 5px;
    }

    input[type="text"],
    input[type="date"],
    select {
      width: 90%;
      padding: 10px;
      border: 1px solid lighten($black, 30%);
      border-radius: 6px;
      font-size: 1em;
      background-color: $gray;
      transition: border-color 0.3s ease, background-color 0.3s ease;

      &:focus {
        border-color: $dark-green;
        background-color: lighten($gray, 10%);
        outline: none;
      }
    }

    .feedback {
      font-size: 0.9em;
      font-weight: 500;
      text-align: center;
      margin-top: 10px;
      &.success {
        color: $success-green;
      }
      &.error {
        color: $error-red;
      }
    }

    button {
      background-color: $dark-green;
      color: $white;
      padding: 12px;
      font-size: 1em;
      font-weight: 600;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;

      &:hover {
        background-color: darken($dark-green, 15%);
        transform: scale(1.02);
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }
}
</style>
