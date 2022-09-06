import {Image} from '@shopify/hydrogen';
// ----------------------------------------------------------------------

export default function Test({path = '/images/test.jpg'}) {
  return (
    <>
      <h1>Test</h1>
      <Image src={path} width="300" height="300" alt="blah" />
      <img className="product-card__image" src={path} />
    </>
  );
}
