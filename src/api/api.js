// const api = "http://secure_learning_mgmt_system.test/api";
const api = "http://127.0.0.1:8000/api";

export const ApiEndpoints = {
  AUTH: {
    LOGIN: `${api}/auth/login`
  },
  ADMIN: {
    GET_TOTAL_STUDENTS: `${api}/admin/dashboard/total-students`,
    GET_TOTAL_TEACHERS: `${api}/admin/dashboard/total-teachers`
  },
  STUDENTS: {
    GET_ALL_STUDENTS: `${api}/admin/students`,
    CREATE_STUDENT: `${api}/admin/create-student`,
    VIEW_STUDENT: `${api}/admin/students/view`,
    UPDATE_STUDENT: `${api}/admin/students/update`,
    DELETE_STUDENT: `${api}/admin/students/delete`,
    DOWNLOAD_STUDENTS: `${api}/admin/students/download`,
    SEARCH_STUDENTS: `${api}/admin/students/search-by-class-level-and-name`
  },
  TEACHERS: {
    GET_ALL_TEACHERS: `${api}/admin/teachers`,
    CREATE_TEACHER: `${api}/admin/create-teacher`,
    VIEW_TEACHER: `${api}/admin/teachers/view`,
    UPDATE_TEACHER: `${api}/admin/teachers/update`,
    DELETE_TEACHER: `${api}/admin/teachers/delete`,
    DOWNLOAD_TEACHERS: `${api}/admin/teachers/download`
  },
  CURRICULUM: {
    GET_ALL_SUBJECTS: `${api}/admin/subjects/all`,
    GET_ALL_CLASS: `${api}/admin/class/all`,
    GET_SINGLE_CLASS: `${api}/admin/class`,
    CREATE_SUBJECT: `${api}/admin/subject/store`,
    CREATE_TOPIC: `${api}/admin/topic/create-single-topic`
  },
  USER: {
    USER_LOGGED_ACTIVITY: `${api}/admin/user-logged-activity`
  },
  SECURITY: {
    CHANGE_PASSWORD: `${api}/security/change-password`,
    TWO_STEP: `${api}/security/two-step-verification`,
    GET_TWO_STEP: `${api}/security/get/two-step-verification-details`,
  }
};
