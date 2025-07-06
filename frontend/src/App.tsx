import { Home } from "./components/Home";
import { ThemeProvider } from "@/components/theme-provider" 
import { LoginForm } from "./components/login-form";
import { Header } from "./components/Header";
import { RegisterForm } from "./components/register-form";
import { Routes, Route, Link } from 'react-router';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
