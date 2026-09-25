import reactLogo from "./assets/react.svg";
import reduxLogo from "/redux.svg";
import "./App.css";
import UserForm from "./components/UserForm";
import User from "./components/User";
import { useGetUsersQuery } from "./redux-toolkit/api/usersApi";

function App() {
  const { data: users = [], isLoading, isError } = useGetUsersQuery();

  return (
    <>
      <div>
        <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h3>Redux + React</h3>

      <div className="card">
        <UserForm />
      </div>

      <div className="card">
        {isLoading && <h3>Loading...</h3>}

        {isError && <h3>Failed to load users</h3>}

        {!isLoading && !isError && users.length === 0 && (
          <h3>No users</h3>
        )}

        {!isLoading &&
          !isError &&
          users.map((user) => <User user={user} key={user.id} />)}
      </div>
    </>
  );
}

export default App;
