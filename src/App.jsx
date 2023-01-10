import { Route, Routes } from "react-router-dom";
import "./App.css";
import AccountSelection from "./pages/AccountSelection";
import AdminDashboard from "./pages/Admin/Dashboard";
import MyAccount from "./pages/Admin/MyAccount";
import AdminStudents from "./pages/Admin/Student";
import AddStudent from "./pages/Admin/Student/AddStudent";
import EditStudent from "./pages/Admin/Student/EditStudent";
import ViewStudentDetails from "./pages/Admin/Student/ViewStudentDetails";
import AdminSubject from "./pages/Admin/Subject";
import AddNewSubject from "./pages/Admin/Subject/AddNewSubject";
import AdminClass from "./pages/Admin/Subject/Class";
import AdminTopics from "./pages/Admin/Subject/Topics";
import Subscription from "./pages/Admin/Subscription";
import Support from "./pages/Admin/Support";
import AdminTeachers from "./pages/Admin/Teacher";
import AddTeacher from "./pages/Admin/Teacher/AddTeacher";
import EditTeacher from "./pages/Admin/Teacher/EditTeacher";
import ViewTeacherDetails from "./pages/Admin/Teacher/ViewTeacherDetails";
import AdminTools from "./pages/Admin/Tools/index.jsx";
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import ResetPassword from "./pages/ResetPassword";
import StudentAssignment from "./pages/Student/Assignment";
import AssignmentPage from "./pages/Student/Assignment/SubjectPage";
import StudentClassroom from "./pages/Student/Classroom";
import StudentDashboard from "./pages/Student/Dashboard/index.jsx";
import StudentAccount from "./pages/Student/MyAccount";
import StudentSubject from "./pages/Student/Subject";
import SubjectPage from "./pages/Student/Subject/SubjectPage";
import StudentTools from "./pages/Student/Tools";
import VerifyAccount from "./pages/VerifyAccount";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<AccountSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/students" element={<AdminStudents />} />
        <Route path="/admin/teachers" element={<AdminTeachers />} />
        <Route path="/admin/student-details" element={<ViewStudentDetails />} />
        <Route path="/admin/teacher-details" element={<ViewTeacherDetails />} />
        <Route path="/admin/new-student" element={<AddStudent />} />
        <Route path="/admin/new-teacher" element={<AddTeacher />} />
        <Route path="/admin/edit-student-details" element={<EditStudent />} />
        <Route path="/admin/edit-teacher-details" element={<EditTeacher />} />

        <Route path="/admin/subjects" element={<AdminSubject />} />
        <Route path="/admin/subject/class" element={<AdminClass />} />
        <Route path="/admin/subject/topics" element={<AdminTopics />} />
        <Route path="/admin/subject/add-new" element={<AddNewSubject />} />

        <Route path="/admin/my-account" element={<MyAccount />} />
        <Route path="/admin/tools" element={<AdminTools />} />
        <Route path="/admin/support" element={<Support />} />
        <Route path="/admin/subscriptions" element={<Subscription />} />

        {/* student routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/subjects" element={<StudentSubject />} />
        <Route path="/student/subject/:subjectName" element={<SubjectPage />} />
        <Route path="/student/assignment" element={<StudentAssignment />} />
        <Route
          path="/student/assignment/:assignmentName"
          element={<AssignmentPage />}
        />
        <Route path="/student/classroom" element={<StudentClassroom />} />
        <Route path="/student/my-account" element={<StudentAccount />} />
        <Route path="/student/tools" element={<StudentTools />} />
      </Routes>
    </div>
  );
}

export default App;
