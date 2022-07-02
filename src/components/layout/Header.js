import React,{useEffect} from 'react';
import styled from 'styled-components';
import {
    unLoadUser,
    reLoadUser
  } from "../../redux/actions/loginAction";
  import { useDispatch,useSelector} from 'react-redux'
  import { useNavigate,Link  } from "react-router-dom";
  import Cookies from 'js-cookie';
const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 64px;
  background: rgba(255,255,255,0.4);
  border-bottom: 1px solid rgba(225,225,225,0.5);
  z-index: 1000;
  margin-bottom: 20px;
  }
`;
const First = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 3rem;
  }
`;
const Second = styled.div`

padding: 1rem;
  }
`;
const LI = styled.div`
  color: #3a3535;
  cursor: pointer;
  }
`;
const checkLogin = () => {
    const loggedin =Cookies?.get('_AUTH')
    console.log(loggedin)
    return loggedin?.user? true:false;
}
const Header = () => {
    const user = useSelector((state) => state.user.user);
     const dispatch = useDispatch();
     const navigate = useNavigate();
       
      if (checkLogin() === false && !user) {
        navigate(`/login`)
      }
      useEffect(() => {
        dispatch(reLoadUser())
      }, [dispatch]);
    return (
              <Navbar>
            <First>
                <LI>
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={`/`}
                    >
                        Posts
                    </Link>
                </LI>
                <LI>
                    <Link
                        style={{ textDecoration: 'none', color: 'black' }}
                        to={`/add-posts`} 
                    >
                        Add posts
                    </Link>
                </LI>
            </First>

            <Second>
                <LI onClick={() => dispatch(unLoadUser())}>Log out</LI>
            </Second>
        </Navbar>
    );
}

export default Header;