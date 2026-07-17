import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { login } from "../store/slice/authSlice.js";
import { registerUser } from '../api/user.api.js';


const RegisterForm = ({state}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password.length < 6){
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const data = await registerUser(name,password,email);

      dispatch(login(data.user));
      navigate({to:"/dashboard"});

      setLoading(false);

    } catch(err){
      setLoading(false);
      setError(err.message || 'Registration failed. Please try again.');
    }
  };


  return (

    <div className="
      w-full
      max-w-md
      mx-auto
      px-4
      sm:px-0
    ">

      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          shadow-md
          rounded-md
          px-5
          py-5
          sm:px-8
          sm:pt-6
          sm:pb-8
          mb-4
        "
      >

        <h2 className="
          text-xl
          sm:text-2xl
          font-bold
          text-center
          mb-6
        ">
          Create an Account
        </h2>


        {error && (

          <div className="
            mb-4
            p-3
            text-sm
            bg-red-100
            text-red-700
            rounded-md
          ">
            {error}
          </div>

        )}



        <div className="mb-4">

          <label
            className="
              block
              text-gray-700
              text-sm
              font-bold
              mb-2
            "
            htmlFor="name"
          >
            Full Name
          </label>


          <input

            className="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-sm
              sm:text-base
              text-gray-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "

            id="name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required

          />

        </div>




        <div className="mb-4">

          <label
            className="
              block
              text-gray-700
              text-sm
              font-bold
              mb-2
            "
            htmlFor="email"
          >
            Email
          </label>


          <input

            className="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-sm
              sm:text-base
              text-gray-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "

            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required

          />

        </div>





        <div className="mb-6">

          <label
            className="
              block
              text-gray-700
              text-sm
              font-bold
              mb-2
            "
            htmlFor="password"
          >
            Password
          </label>


          <input

            className="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-sm
              sm:text-base
              text-gray-700
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
            "

            id="password"
            type="password"
            placeholder="******************"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            minLength={6}

          />

        </div>





        <button

          className={`
            bg-blue-500
            hover:bg-blue-700
            text-white
            font-bold
            py-2
            px-4
            rounded
            w-full
            text-sm
            sm:text-base
            ${loading ? 'opacity-50 cursor-not-allowed' : ''}
          `}

          type="submit"
          disabled={loading}

        >

          {loading ? 'Creating...' : 'Create Account'}

        </button>





        <div className="text-center mt-4">

          <p className="
            cursor-pointer
            text-xs
            sm:text-sm
            text-gray-600
          ">

            Already have an account?{" "}

            <span
              onClick={()=>state(true)}
              className="
                text-blue-500
                hover:text-blue-700
              "
            >
              Sign In
            </span>

          </p>

        </div>


      </form>

    </div>

  );
};


export default RegisterForm;