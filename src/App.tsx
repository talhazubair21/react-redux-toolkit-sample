import { useDispatch } from "react-redux";
import "./index.css";
import { appActions, useAppSelector } from "./store/app/appReducer";

const App = () => {
  const dispatch = useDispatch();
  const appState = useAppSelector((state) => state);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    dispatch(
      appActions.setUser({
        name: "Micheal Jordan",
        email: "micheal.jordan@gmail.com",
        phone: "+01-328982389",
        photo:
          "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      } as any)
    );
    dispatch(appActions.login());
  };

  const logout = () => {
    dispatch(appActions.logout());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        {appState.isLoggedIn ? (
          <div>
            <div className="flex justify-center">
              <img
                src={appState.user.photo}
                alt={appState.user.name}
                className="h-20 w-20 rounded-full border-2 border-white shadow-2xl bg-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">
              Welcome, {appState.user.name}!
            </h2>
            <p className="text-gray-600">Email: {appState.user.email}</p>
            <div className="flex justify-start pt-4">
              <button
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded border-gray-300 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default App;
