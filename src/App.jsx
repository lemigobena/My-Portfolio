import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import CertificatesPage from './pages/CertificatesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="experience" element={<ExperiencePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="skills" element={<SkillsPage />} />

          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="certifications" element={<Navigate to="/certificates" replace />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="index.html" element={<Navigate to="/" replace />} />
          <Route path="about.html" element={<Navigate to="/about" replace />} />
          <Route path="experience.html" element={<Navigate to="/experience" replace />} />
          <Route path="projects.html" element={<Navigate to="/projects" replace />} />
          <Route path="skills.html" element={<Navigate to="/skills" replace />} />
          <Route path="certificates.html" element={<Navigate to="/certificates" replace />} />
          <Route path="contact.html" element={<Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
