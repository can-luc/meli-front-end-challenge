
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search.png";
import { Loading } from '../../common/components/Loading';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { filterProducts } from '../../redux/states/product';
import { getProducts } from '../../services/public.service';
import { NavbarStyled } from './navbar.styled.component';

interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
  const [querySearch, setquerySearch] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, callEndpoint, errors } = useFetchAndLoad();

  const handleClick = async () => {

    const products = await callEndpoint(getProducts(querySearch));
    console.log(products)
    dispatch(filterProducts(products.data));
    navigate('/items');

  };

  return (
    <>

      <NavbarStyled>
        <div className='layout'>
          <img src={Logo} alt="logo" className='img'></img>
          <input data-test-id="search-input-product" onChange={(e) => setquerySearch(e.target.value)} placeholder={'Nunca dejes de buscar'} className='input'>
          </input>
          <div className='iconContainer'>
            <button onClick={() => handleClick()} type='button' className='button' > <div className='icon'>
              <img src={SearchIcon} alt="search-icon" />
            </div></button>
          </div>
        </div>
      </NavbarStyled>
      {loading && <Loading />}
      {errors && <span>Hubo un error, reintenta la busqueda.</span>}
    </>

  );
}
export default Navbar;


