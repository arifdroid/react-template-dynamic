import styled from 'styled-components';

// const Content = styled.div`
// width: '32%';
// height: '50%';
// minHeight: '50%';
// overflowY: 'auto';
// zIndex: 1;
// justifyContent: 'center';
// position: 'relative';
// display: 'flex';
// align-items:'center';
// padding: '56px 40px';
// backgroundColor: "yellow";  
// `

const Content = styled.div`
  background-color: #282c34;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 2vmin);
  color: white;

  h1 {
      color:yellow;
      font-size: calc(10px + 2vmin);
  }

  
`

export default Content