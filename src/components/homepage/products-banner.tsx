import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useProducts } from '../../contexts/products-context';

const ProductsBanner: FunctionComponent = () => {
  const { products }: any = useProducts();
  const reg = /(<([^>]+)>)/gi;
  return (
    <div>
      <div>
        <p>Introducing Our Latest Products</p>
        <Link href="/collection">
          <a>
            <p>See more products</p>
            <img src="/icon/arrow-long-right.svg" alt="collection" />
          </a>
        </Link>
      </div>
      {products?.map(
        (
          { id, permalink, media, name, price, description }: any,
          index: number
        ) => (
          <div key={id}>
            <Link href="/product/[permalink]" as={`/product/${permalink}`}>
              <a>
                <div
                  style={{
                    background: `url("${media.source}") center center/cover`,
                  }}
                />
                <p>{name}</p>
                <p>{description && description.replace(reg, '')}</p>
                <p>{price.formatted_with_symbol}</p>
              </a>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

ProductsBanner.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

ProductsBanner.defaultProps = {
  products: [],
};

export default ProductsBanner;
