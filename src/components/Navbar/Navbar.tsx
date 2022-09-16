import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search.png";
import { Loading } from '../../common/components/Loading';
import { removeAccents } from '../../common/utils/removeAccents';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { filterProducts } from '../../redux/states/products';
import { getProducts } from '../../services/public.service';
import { NavbarStyled } from './navbar.styled.component';

interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
  const [querySearch, setquerySearch] = useState<string>('');
  const [message, setmessage] = useState(false);
  const previousInputValue = useRef('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, callEndpoint, errors } = useFetchAndLoad();


  const handleClick = async () => {
   
    //con este condicional mejoramos el performance de la app ya que evitamos que vuelva a hace la request si la busqueda es la misma.
    if (previousInputValue.current !== querySearch) {
      setmessage(false);
      const products = await callEndpoint(getProducts(querySearch));
      dispatch(filterProducts(products.data));
      navigate('/items');
      previousInputValue.current = querySearch;
    }else
    setmessage(true);
    //
  };
  return (
    <>

      <NavbarStyled>
        <div className='layout'>
          <img src={Logo} alt="logo" className='img'></img>
          <input data-test-id="search-input-product" onChange={(e) => setquerySearch(removeAccents(e.target.value))} placeholder={'Nunca dejes de buscar'} className='input'>
          </input>
          <div className='iconContainer'>
            <button onClick={() => handleClick()} type='button' data-test-id="search-button" className='button' > <div className='icon'>
              <img src={SearchIcon} alt="search-icon" />
            </div></button>
          </div>
        </div>
      </NavbarStyled>
      {loading && <Loading />}
      {message && <span>la busqueda arroja los mismos resultados, intente ingresar otras palabras</span>}
    {errors && <span>Hubo un error, reintenta la busqueda.</span>}

    </>

  );
}
export default Navbar;


