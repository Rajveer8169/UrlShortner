import { Link } from '@tanstack/react-router';
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../store/slice/authSlice';
import { logoutUser } from '../api/user.api';

const Navbar = () => {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-white border-b border-gray-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-14 sm:h-16">

          {/* Left side */}
          <div className="flex items-center">
            <Link
              to="/"
              className="
                text-lg 
                sm:text-xl 
                font-bold 
                text-gray-800
              "
            >
              URL Shortener
            </Link>
          </div>


          {/* Right side */}
          <div className="flex items-center">

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="
                  rounded-md 
                  bg-red-600 
                  px-3 py-2
                  sm:px-4
                  text-sm
                  sm:text-base
                  font-medium 
                  text-white 
                  hover:bg-red-700
                "
              >
                Logout
              </button>
            ) : (
              <Link
                to="/auth"
                className="
                  rounded-md 
                  bg-blue-600 
                  px-3 py-2
                  sm:px-4
                  text-sm
                  sm:text-base
                  font-medium 
                  text-white 
                  hover:bg-blue-700
                "
              >
                Login
              </Link>
            )}

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;