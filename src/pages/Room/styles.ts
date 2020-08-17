import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  background-color: #202024;
  padding: 30px;
  box-shadow: rgb(20, 18, 18) 0px 0.2rem 2rem;

  button{
    display: flex;
    font-size: 14px;
    color: #87868B;
    padding: 80px;
    background-color: transparent;
    border-width: 0px;
    align-items: center;

    img{
      padding: 10px
    }
  }
`

export const Game = styled.div`
  margin: 30px 0px 0px 30px;
  max-width: 960px;

  h2{
    font-weight: normal;
    font-size: 20px;
    color: #87868B
  }

  h1{
    font-size: 26px;
    color: #ffffff;
    font-weight: bold;
    margin: 0px 0px 10px 0px;
  }

  li{
    justify-content: center;
    display: flex;
    margin-top: 15px;

    ul{
      margin: 0 15px 0 15px;

      button{
        display: flex;
        align-items: center;
        border-width: 0px;
        border-radius: 15px;
        background-color: #202024;
        color: white;
        height: 45px;
        padding: 0 25px 0 25px;
        font-weight: 500;

        img{
          margin: 0 12px 0 0;
        }

        div.color{
          margin: 0 12px 0 0;
          width: 20px;
          height: 20px;
          background-color: #EF233C;
          border-radius: 50%;
          border: 1px solid #ffffff;
        }
      }
    }
  }
`
