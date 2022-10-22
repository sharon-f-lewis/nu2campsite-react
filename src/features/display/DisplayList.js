import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import AnimatedDisplayCard from './AnimatedDisplayCard';
// import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite} from '../campsites/campsitesSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DisplayList = () => {
  const items = useSelector((state) => [
    selectFeaturedCampsite(state), 
    selectFeaturedPromotion(state), 
    selectFeaturedPartner(state)
  ]);

  return (
    <Row>
      {items.map((item, idx) => {
        const { featuredItem, isLoading, errMsg } = item;
        if (isLoading) {
          return <Loading key={idx} />;
        }
        if (errMsg) {
          return <Error errMsg={errMsg} key={idx} />;
        }
        return (
          featuredItem && (
            <Col md className='m-1' key={idx}>
              {/* <DisplayCard item={item} /> */}
              <AnimatedDisplayCard item={featuredItem} />
            </Col>
          )
        );
      })}
    </Row>
  )
}

export default DisplayList;