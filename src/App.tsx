import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import { ProtectedRoute } from "./components/ProtectedRoute"

// Public Pages
import HomePage from "./pages/portfolio/HomePage"
import ProjectsPage from "./pages/portfolio/ProjectsPage"
import ContactPage from "./pages/portfolio/ContactPage"

// Admin Pages
import LoginPage from "./pages/admin/LoginPage"
import DashboardPage from "./pages/admin/DashboardPage"
import AboutCRUDPage from "./pages/admin/AboutCRUDPage"
import SkillsCRUDPage from "./pages/admin/SkillsCRUDPage"
import ExperiencesCRUDPage from "./pages/admin/ExperiencesCRUDPage"
import ProjectsCRUDPage from "./pages/admin/ProjectsCRUDPage"
import ContactDetailsCRUDPage from "./pages/admin/ContactDetailsCRUDPage"
import ProjectDetailsPage from "./pages/portfolio/ProjectDetailsPage"

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<LoginPage />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<DashboardPage />} />
            <Route path="/admin/about" element={<AboutCRUDPage />} />
            <Route path="/admin/skills" element={<SkillsCRUDPage />} />
            <Route path="/admin/experiences" element={<ExperiencesCRUDPage />} />
            <Route path="/admin/projects" element={<ProjectsCRUDPage />} />
            <Route path="/admin/contact" element={<ContactDetailsCRUDPage />} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
