import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;

    .form-container {
      gap: 2rem;
      height: 85vh;

      .form {
        padding: 2rem;
        background-color: #000000b0;
        width: 25vw;
        gap: 2rem;
        color: white;

        /* Media Query for Tablet-sized screens */
        @media (max-width: 768px) {
          width: 50vw;
        }

        /* Media Query for Mobile-sized screens */
        @media (max-width: 480px) {
          width: 80vw;
          padding: 1rem;
        }

        .container {
          gap: 2rem;

          input {
            padding: 0.5rem 1rem;
            width: 15rem;

            /* Media Query for Tablet-sized screens */
            @media (max-width: 768px) {
              width: 100%;
            }
          }

          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.2rem;
            font-weight: bolder;
            font-size: 1.05rem;

            /* Media Query for Mobile-sized screens */
            @media (max-width: 480px) {
              width: 100%;
            }
          }
        }
      }
    }
  }
`;
