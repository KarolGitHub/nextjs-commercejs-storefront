import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useCategories } from '../../contexts/categories-context';

const CategoryBanner: FunctionComponent = () => {
  const { categories }: any = useCategories();
  categories?.filter((category: any) => category.link);

  return (
    <div>
      <p>Categories</p>
      <div>
        {categories?.map(({ name, image, link }: any, index: number) => (
          <div key={`category-item-${index}`}>
            <Link href={link}>
              <div
                style={{
                  background: `url("${image}") center center/cover`,
                }}>
                {name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

CategoryBanner.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};

CategoryBanner.defaultProps = {
  categories: [],
};

export default CategoryBanner;
