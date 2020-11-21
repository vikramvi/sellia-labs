import React, { useState } from 'react';
import { Grid, Row } from 'react-styled-flexboxgrid';
import TextButton from '../../components/TextButton';
import { IoMdFunnel } from 'react-icons/io';
import SearchCategory from './Categories/index';
import SearchPost from './SearchPost/index';
import SortList from './SortList';
import FilterList from './FilterList';
import { CategoriesWrapper, Holder, Col, SideDrawerInner } from './style';
import SideDrawer from 'reusecore/src/elements/Drawer';
import Text from 'reusecore/src/elements/Text';
import Icon from 'react-icons-kit';
import { androidClose } from 'react-icons-kit/ionicons/androidClose';
import { androidArchive } from 'react-icons-kit/ionicons/androidArchive';

const SearchPage = props => {
  const [showFilter, setShowFilter] = useState(false);
  const [catDrawerState, toggleDrawer] = useState(false);
  const [filterDrawerState, toggleFilterDrawer] = useState(false);
  const handleCategoryToggle = () => toggleDrawer(!catDrawerState);
  const handleFilterToggle = () => toggleFilterDrawer(!filterDrawerState);

  return (
    <div style={{ paddingBottom: 50, paddingTop: 75 }}>
      <Grid style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
        <Row>
          <Col xs={0} sm={5} md={4}>
            {process.browser && (
              <CategoriesWrapper style={{ marginBottom: 30 }}>
                <Text
                  as="h3"
                  fontSize="16px"
                  fontWeight="600"
                  fontFamily="Poppins"
                  ml="25px"
                  mt="30px"
                  content="Category List"
                />
                <SearchCategory {...props} />
              </CategoriesWrapper>
            )}
          </Col>

          <Col xs={12} sm={12} md={8}>
            <Holder>
              <div>
                <SortList />
              </div>

              <TextButton
                title="Categories"
                iconPosition="left"
                icon={<Icon icon={androidArchive} size={18} color="#333333" />}
                onClick={handleCategoryToggle}
                className="md-hidden"
                style={{ marginLeft: 'auto', marginRight: 20 }}
              />

              <TextButton
                title="Filter"
                iconPosition="left"
                icon={<IoMdFunnel />}
                onClick={handleFilterToggle}
                className="md-hidden"
              />

              <TextButton
                title="Filter"
                iconPosition="left"
                icon={<IoMdFunnel />}
                onClick={() => setShowFilter(!showFilter)}
                className="lg-show"
              />
            </Holder>
            {/* Category Drawer which only show on mobile and tab */}
            {catDrawerState && (
              <SideDrawer
                width="80vw"
                open={catDrawerState}
                onClose={handleCategoryToggle}
                toggleHandler={handleCategoryToggle}
                closeButton={
                  <Icon icon={androidClose} size={21} color="#333333" />
                }
                closeButtonStyle={{
                  display: 'inline-flex',
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  cursor: 'pointer',
                }}
              >
                <SideDrawerInner>
                  <SearchCategory {...props} />
                </SideDrawerInner>
              </SideDrawer>
            )}

            {/* Search filter Drawer which only show on mobile and tab */}
            {filterDrawerState && (
              <SideDrawer
                width="80vw"
                open={filterDrawerState}
                onClose={handleFilterToggle}
                toggleHandler={handleFilterToggle}
                closeButton={
                  <Icon icon={androidClose} size={21} color="#333333" />
                }
                closeButtonStyle={{
                  display: 'inline-flex',
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  cursor: 'pointer',
                }}
              >
                <SideDrawerInner>
                  <FilterList toggleSearchDrawer={handleFilterToggle} />
                </SideDrawerInner>
              </SideDrawer>
            )}

            {/* Toggle showFilter component based on filter TextButton click */}
            {showFilter && (
              <FilterList
                toggleSearchDrawer={() => setShowFilter(!showFilter)}
              />
            )}
            <SearchPost {...props} />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default SearchPage;
