interface AdvertisementProps {
  companyName: string;
  productDescription: string;
  price: string;
}

function Advertisement(props: AdvertisementProps) {
  return (
    <div className="advertisement">
      <h2>Hello</h2>
      <p>{props.companyName}</p>
      <p>{props.productDescription}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default Advertisement;
