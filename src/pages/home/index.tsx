import React from "react";
// import { Page, PageProps } from "./layout";
// import { Loading, PageError } from "components";
// import { useGetUserBoardsQuery } from "@molly/apollo";

type Props = {
    id: string;
}

const BoardContainer: React.FC<Props> = ({ id }) => {
  // const { data, loading, error } = useGetUserBoardsQuery({ varibles: { id }})

  // if(loading && data === undefined) {
  //   return <Loading/>
  // } else if (error) {
  //   return <PageError error={error} />
  // } else {
  return (
      <React.Fragment>
        {/* <Container>
          
        </Container> */}
         Hello World
      </React.Fragment>
    )
  // }
}

export default BoardContainer;

// const HomePage: React.FC<PageProps> = ({}) => {
//   const id = params.id;
//   return (
//       <Page>
//           <BoardContainer id={id}/>
//       </Page>
//   )
// }

// export default HomePage;
