import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useCategories } from '../../contexts/categories-context';

const CategoryBanner: React.FC = () => {
  const { categories } = useCategories();
  categories?.filter((category: Category) => category.link);

  return (
    <div>
      <p>Categories</p>
      <div>
        {categories?.map(({ name, image, link }: Category, index: number) => (
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
