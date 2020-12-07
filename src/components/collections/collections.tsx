import React, { useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useCategories } from '../../contexts/categories-context';
import { useProducts } from '../../contexts/products-context';

const Collections: React.FC = () => {
  const { categories } = useCategories();
  const { products } = useProducts();
  const sidebar = useRef<HTMLDivElement>(null);
  const page = useRef<HTMLDivElement>(null);

  const Sidebar = categories?.map((category: Category) => (
    <div key={category.id}>
      <p>{category.name}</p>
      <Link href={`/collection#${category.slug}`}>
        <div>
          <p>
            Products
            <span>{category.count}</span>
          </p>
        </div>
      </Link>
    </div>
  ));

  const filterProductsByCat = (catSlug: string) => {
    const cat = categories?.find(
      (category: Category) => category.slug === catSlug
    );
    if (!cat) {
      return [];
    }
    return products?.filter((product: Product) =>
      product.categories.find(
        (productCategory: Category) => productCategory.id === cat.id
      )
    );
  };

  const Collection = () => {
    const reg = /(<([^>]+)>)/gi;

    return (
      <div>
        {categories?.map((category: Category) => (
          <div key={category.id}>
            <p id={category.slug}>{category.name}</p>
            <div>
              {filterProductsByCat(category.slug).map((product: Product) => (
                <div key={product.id}>
                  <Link
                    href="/product/[permalink]"
                    as={`/product/${product.permalink}`}>
                    <div
                      style={{
                        background: `url("${product.media.source}") center center/cover`,
                      }}>
                      <p>{product.name}</p>
                      <p>{product.description.replace(reg, '')}</p>
                      <p>{product.price.formatted_with_symbol}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>Collections</title>
      </Head>
      <div>
        <div ref={sidebar}>{Sidebar}</div>
        <div ref={page}>
          <div>
            <div>{Collection()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
