import React from 'react';
import Link from 'next/link';
import { Row, Col } from 'react-styled-flexboxgrid';
import { GET_CATEGORIES } from 'core/graphql/Category.query';
import { SINGLE_CATEGORY_PAGE } from 'core/navigation/constant';
import { useQuery } from '@apollo/react-hooks';
import CategoryLoader from '../../../components/Loader/CategoryLoader';
import { CategoryGridCard as CategoryGridCardComp } from '../../../components/CategoryCard';
import ListGridComp from 'reusecore/src/elements/ListGrid';
import NoItemFound from '../../../components/NoItemFound';
import OnError from '../../../components/OnError';

import styled from 'styled-components';

const ListGrid = styled(ListGridComp)`
  .singleGridBox {
    margin-right: -1px;
    margin-bottom: -1px;
    transition: all ease 0.3s;
    &:hover {
      position: relative;
      z-index: 1;
      box-shadow: rgba(39, 79, 117, 0.2) 0px 40px 90px -30px;
    }
  }

  @media only screen and (max-width: 767px) {
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 10px;
  }
`;

const CategoryGridCard = styled(CategoryGridCardComp)`
  height: 100%;

  @media only screen and (max-width: 767px) {
    background-color: transparent;
    border: 0;
    padding: 0 32px;
    min-height: auto;
  }
`;

export default function CategoryPost() {
  const QUERY_VARIABLES = {
    LIMIT: 8,
  };
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    variables: QUERY_VARIABLES,
  });
  if (error) return <OnError />;

  const categories =
    !loading && data && data.categories ? data.categories.data : [];
  categories.sort((a, b) => b.posts.total - a.posts.total);
  const renderCategoryItem = item => {
    const {
      name,
      image: { url },
      slug,
    } = item;
    return (
      <Link
        href={`${SINGLE_CATEGORY_PAGE}/[slug]`}
        as={`${SINGLE_CATEGORY_PAGE}/${slug}`}
      >
        <a style={{ height: '100%', display: 'block' }}>
          <CategoryGridCard
            imageSrc={url}
            title={name}
            style={{
              marginRight: -1,
              marginTop: -1,
            }}
          />
        </a>
      </Link>
    );
  };
  return (
    <Row>
      <Col xs={12} mdOffset={3} smOffset={2} sm={8}>
        {!categories ? (
          <NoItemFound />
        ) : (
          <ListGrid
            data={categories}
            columnWidth={[1, 1 / 2, 1 / 3, 1 / 4]}
            component={renderCategoryItem}
            loading={loading}
            placeholder={<CategoryLoader />}
            limit={QUERY_VARIABLES.LIMIT}
            componentContainerStyle={{ p: 0 }}
            componentWrapperStyle={{
              ml: 0,
              mr: 0,
              flexBox: true,
              flexWrap: 'wrap',
            }}
          />
        )}
      </Col>
    </Row>
  );
}
