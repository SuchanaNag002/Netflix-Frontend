import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  .hero {
    position: relative;
    .background-image {
      filter: brightness(60%);
    }
    img {
      height: 100vh;
      width: 100vw;
    }
    .container {
      position: absolute;
      bottom: 5rem;
      left: 5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      .logo {
        img {
          width: 80%;
          max-width: 400px;
          height: auto;
          margin-top: 1rem;
        }
      }
      .buttons {
        /* Adjust the margin-left to move buttons to the left */
        margin-left: 0rem;
        gap: 2rem;
        display: flex;
        align-items: flex-start;
        /* Add justify-content: flex-start to shift buttons to the left */
        justify-content: flex-start;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
`;
