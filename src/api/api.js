const api = "http://secure_learning_mgmt_system.test/api";
// const api = "http://127.0.0.1:8000/api";

export const ApiEndpoints = {
  AUTH: {},
  ADMIN: {
    GET_TOTAL_STUDENTS: `${api}/admin/dashboard/total-students`,
    GET_TOTAL_TEACHERS: `${api}/admin/dashboard/total-teachers`
  },
  STUDENTS: {
    GET_ALL_STUDENTS: `${api}/admin/students`,
    CREATE_STUDENT: `${api}/admin/create-student`
  },
  CURRICULUM: {
    GET_ALL_SUBJECTS: `${api}/admin/subjects/all`
  }
};
