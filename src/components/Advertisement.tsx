interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: string;
}

function Advertisement(props: AdvertisementProps) {
  return (
    <div className="advertisement">
      <p>{props.companyName}</p>
      <h2>Hello</h2>
      <p>{props.productDescription}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Advertisement;
