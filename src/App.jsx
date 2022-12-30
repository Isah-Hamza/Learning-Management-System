import { Route, Routes } from "react-router-dom";
import "./App.css";
import AccountSelection from "./pages/AccountSelection";
import AdminDashboard from "./pages/Admin/Dashboard";
import AdminStudents from "./pages/Admin/Student";
import AddStudent from "./pages/Admin/Student/AddStudent";
import EditStudent from "./pages/Admin/Student/EditStudent";
import ViewStudentDetails from "./pages/Admin/Student/ViewStudentDetails";
import AdminSubject from "./pages/Admin/Subject";
import AddNewSubject from "./pages/Admin/Subject/AddNewSubject";
import AdminClass from "./pages/Admin/Subject/Class";
import AdminTopics from "./pages/Admin/Subject/Topics";
import AdminTeachers from "./pages/Admin/Teacher";
import AddTeacher from "./pages/Admin/Teacher/AddTeacher";
import EditTeacher from "./pages/Admin/Teacher/EditTeacher";
import ViewTeacherDetails from "./pages/Admin/Teacher/ViewTeacherDetails";
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import ResetPassword from "./pages/ResetPassword";
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
      </Routes>
    </div>
  );
}

export default App;
