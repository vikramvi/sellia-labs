import { NextPage } from "next";
import { useRouter } from "next/router";

// import dynamic from 'next/dynamic';
import Head from "next/head";
import { Block } from "baseui/block";
import Container from "../../components/UiElements/Container/Container";
import Chat from "../../containers/Chat/Chat";

import withLayout from "../../hoc/withLayout";
import PageMeta from "../../components/PageMeta";
import { withApollo } from "../../helpers/apollo";

// const DynamicChatWithNoSSR = dynamic(
//   () => import('../containers/Chat/Chat'),
//   { ssr: false }
// );

export default withApollo(
  withLayout(({ userId }) => {
    const {
      query: { post },
    } = useRouter();

    const postData = JSON.parse(post);
    return (
      <>
        <Head>
          <title>Chat | INST.</title>
          <meta name="Description" content="Inst chat app ui" />
        </Head>

        <Container>
          <Block paddingTop={["15px", "20px", "30px", "40px"]}>
            <Chat currentPost={postData} userId={userId} />
          </Block>
        </Container>
      </>
    );
  })
);

// const ChatPage: NextPage<{}> = () => {
//   return (
//     <>
//       <Head>
//         <title>Chat | INST.</title>
//         <meta name="Description" content="Inst chat app ui" />
//       </Head>

//       <Container>
//         <Block paddingTop={["15px", "20px", "30px", "40px"]}>
//           <Chat />
//         </Block>
//       </Container>
//     </>
//   );
// };

// export default ChatPage;
