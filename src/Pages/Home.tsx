import styled from "styled-components";

import { Footer } from "../Components/Footer";
import { PageContainer } from "../Components/PageContainer";
import { Main } from "../Components/Main";

export const Home = () => {
  return (
    <div>
      <PageContainer>
        <Main />
        <Footer />
      </PageContainer>
    </div>
  );
};
