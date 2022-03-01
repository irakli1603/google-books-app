import styled from "styled-components";

const Content = styled.div`
  margin: 0 auto;
  max-width: 950px;
  height: 100vh;
`;

const withLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <Content>
        <Component {...props} />
      </Content>
    );
  };

export default withLayout;
