import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import './breadcrumb.css'

const BreadCrumb = (props) => { 
    const isShopPage = location.pathname === '/shop';
    const isCategoryPage = location.pathname.startsWith(`${props.category}`);
  
    return (
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <IoIosArrowForward />
        {isShopPage ? null : <Link to="/shop">Shop</Link>}
        {isCategoryPage ? (
          <>
            <IoIosArrowForward />
            <Link to={`/${props.category}`}>{props.category}</Link>
          </>
        ) : null}
        {props.category && (
          <>
            <IoIosArrowForward />
            <Link to={`/${props.category}`} style={{textTransform: "capitalize"}}>{props.category}</Link>
          </>
        )}
        {props.title && (
          <>
            <IoIosArrowForward />
            {props.title}
          </>
        )}
      </div>
  )
}

export default BreadCrumb


