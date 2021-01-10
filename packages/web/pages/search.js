import SearchPage from "../containers/Search";
import { SearchProvider } from "../contexts/SearchContext";
import withLayout from "../hoc/withLayout";
import PageMeta from "../components/PageMeta";
import { withApollo } from "../helpers/apollo";
export default withApollo(
  withLayout(({ isLoggedIn, userId, location }) => {
    console.log("userId ->", userId);
    return (
      <>
        <PageMeta title="Search Products" description="Search Products" />
        <SearchProvider>
          <SearchPage userId={userId} />
        </SearchProvider>
      </>
    );
  })
);
