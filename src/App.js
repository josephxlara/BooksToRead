import BookForm from './Components/bookForm';
import BookList from './Components/bookList';
import NavBar from './Components/navBar';
import BookContextProvider from './Contexts/bookContext';

function App() {
  return (
    <div className='App'>
      <BookContextProvider>
        <NavBar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
