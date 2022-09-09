
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { productAdapter } from '../../adapters';
import { CategoryAdapter } from '../../adapters/category.adapter';
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search.png";
import { Loading } from '../../common/components/Loading';
import useFetchAndLoad from '../../hooks/useFetchAndLoad';
import { filterCategories } from '../../redux/states/category';
import { filterProducts } from '../../redux/states/product';
import { getProducts } from '../../services/public.service';
import { Col, Grid, Row } from '../../styled.component/global.styled.component';
import { Icon, IconContainer, Image, Input, InputContainer, Layout, Search } from './navbar.styled.component';

interface NavbarInterface { }

const Navbar: React.FC<NavbarInterface> = () => {
  const [querySearch, setquerySearch] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, callEndpoint, errors } = useFetchAndLoad();

  const handleClick = async () => {

    const products = await callEndpoint(getProducts(querySearch));

    //Products
    const listAdapter = products.data.results?.map((item: any) => productAdapter(item));
    dispatch(filterProducts(listAdapter));

    //Categories
    const Categories = products.data.available_filters?.find(
      (e: { name: string }) => e.name === 'Categories');
    const listCategories = Categories !== undefined ? Categories?.values?.map((item: any) => CategoryAdapter(item)) : '';
    dispatch(filterCategories(listCategories));

    //Navigate List Items
    navigate('/items');

  };




  return (
    <>

      <Search>

        <Layout>

          <Grid>
            <Row>

              <Col sizeCol={20}>

                <InputContainer>
                  <Image>
                    <img src={Logo} alt="logo" />
                  </Image>
                  <Input
                    data-test-id="search-input-product"

                    placeholder={'Nunca dejes de buscar'}
                    onChange={(e) => setquerySearch(e.target.value)}
                  />


                </InputContainer>
              </Col>
              <Col sizeCol={1}>
                <IconContainer>
                  <button


                    onClick={handleClick}
                  >
                    <Icon>
                      <img src={SearchIcon} alt="search-icon" />
                    </Icon>

                  </button>
                </IconContainer>

              </Col>
            </Row>
          </Grid>

        </Layout>
      </Search>
      {loading && <Loading />}
      {errors && <span>Hubo un error, reintenta la busqueda.</span>}
    </>

  );
}
export default Navbar;


