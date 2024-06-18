const Product = ({name, urlImg, descImg, price}) => {
 
    return (
  <div>
    <h2>{name}</h2>
    < img src={urlImg} alt ={descImg} width="640"/>
    <p>Price: {price} EURO</p>
  </div>
    );
};
export default Product
