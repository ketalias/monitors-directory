import { createStore } from "vuex";

export default createStore({
  state: {
    students: [
      {
        lastName: "Ковач",
        firstName: "Роман",
        middleName: "Володимирович",
        lastDutyDate: "2024-10-01",
        gender: "чоловік",
        address: "вул. Шипілява, 12, м. Ужгород",
      },
      {
        lastName: "Сібулатова",
        firstName: "Ксенія",
        middleName: "Борисівна",
        lastDutyDate: "2024-10-01",
        gender: "жінка",
        address: "вул. Шипілява, 12, м. Ужгород",
      },
      {
        lastName: "Трикур",
        firstName: "Артем",
        middleName: "Іванович",
        lastDutyDate: "2024-10-01",
        gender: "чоловік",
        address: "вул. Шипілява, 12, м. Ужгород",
      },
      {
        lastName: "Пекар",
        firstName: "Михайло",
        middleName: "Михайлович",
        lastDutyDate: "2024-10-01",
        gender: "чоловік",
        address: "вул. Шипілява, 12, м. Ужгород",
      },
      {
        lastName: "Ведернікова",
        firstName: "Єва",
        middleName: "Мирославівна",
        lastDutyDate: "2024-10-01",
        gender: "жінка",
        address: "вул. Шипілява, 12, м. Ужгород",
      },
    ],
  },
  getters: { getStudents: (state) => state.students },
  mutations: {
    removeStudent(state, lastName) {
      state.students = state.students.filter(
        (student) => student.lastName !== lastName
      );
    },
    addStudent(state, student) {
      state.students.push(student);
    },
  },
  actions: {
    deleteStudent({ commit }, lastName) {
      commit("removeStudent", lastName);
    },
    addStudent({ commit }, student) {
      commit("addStudent", student);
    },
  },
});
