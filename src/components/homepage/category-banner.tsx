import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useCategories } from '../../contexts/categories-context';

const CategoryBanner: React.FC = () => {
  const { categories } = useCategories();
  categories?.filter((category: Category) => category.link);

  return (
    <div className="bg-grad2 text-center p-12">
      <p className="my-3 text-4xl font-bold">Categories</p>
      <div className="grid  grid-cols-2/12-24 lg:grid-cols-4/12-24 gap-4 max-w-7xl mx-auto justify-center">
        {categories?.map(({ name, image, link }: Category, index: number) => (
          <div
            key={`category-item-${index}`}
            className="shadow-inset transform hover:shadow-inner hover:opacity-65 hover:scale-110 active:scale-90 transition-all duration-500 rounded-xl">
            <Link href={link}>
              <a>
                <div
                  className="img-min-max"
                  style={{
                    background: `url("${image}") center center/contain no-repeat`,
                  }}></div>
                <p className="text-3xl font-header">{name}</p>
              </a>
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
