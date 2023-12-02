import { useEffect } from 'react';
import './App.css';
import FilterBar from './components/filters/FilterBar';
import UserList from './components/userList/UserList';
import { useDispatch } from 'react-redux';
import { fetchUserList } from './services/fetchData';
import Footer from './components/footer/Footer';

function App() {

const dispatch = useDispatch();

  useEffect(()=>{
    fetchUserList(dispatch)
  },[dispatch])

  return (
    <div className="App">
      <FilterBar/>
      <UserList/>
      <Footer/>
    </div>
  );
}

export default App;
