import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { BlogContextProvider } from './contexts/BlogContextProvider';
import BlogDetail from './pages/BlogDetail';
import AddPost from './pages/AddPost';
import EditPost from './pages/EditPost';
import BlogList from './pages/BlogList';


const App = () => {

  return (
    <BlogContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path='/blog/new' element={<AddPost />} />
            <Route path="/blog/edit/:id" element={<EditPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BlogContextProvider>
  );
}

export default App;