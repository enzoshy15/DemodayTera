import Logo from "./b.jpg";
import "./ListProduct.css";

function ListProduct() {
  return (
    <div className="card card-product">
      <img src={Logo} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Bum</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default ListProduct;
