import { NextPage } from "next";
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
  withLayout(function ChatPage() {
    return (
      <>
        <Head>
          <title>Chat | INST.</title>
          <meta name="Description" content="Inst chat app ui" />
        </Head>

        <Container>
          <Block paddingTop={["15px", "20px", "30px", "40px"]}>
            <Chat />
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
