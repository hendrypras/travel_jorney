import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
  DetailJorneyPage,
  BookMarkPage,
  HomePage,
  JorneyPage,
  LoginPage,
  NotFoundPage,
  ProfilePage,
  RegisterPage,
  AddJorneyPage,
} from './pages'
import { MainLayout } from './components'
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="jorney" element={<JorneyPage />} />
        <Route path="book-mark" element={<BookMarkPage />} />
        <Route path="user/profile" element={<ProfilePage />} />
        <Route path="user/add-jorney" element={<AddJorneyPage />} />
        <Route path="jorney/:jorneyId" element={<DetailJorneyPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
