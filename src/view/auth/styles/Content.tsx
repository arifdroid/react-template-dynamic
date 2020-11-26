import { styled } from '@material-ui/core/styles';

const Content = styled('div')(({ theme }) => ({
  width: '32%',
  height: '50%',
  minHeight: '50%',
  overflowY: 'auto',
  zIndex: 1,
  // justifyContent: 'center',
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '56px 40px',
  backgroundColor: '#fafafa',  

  // [theme.breakpoints.down('sm')]: {
  //   width: '100%',
  //   borderLeft: 0,
  // },
}));

export default Content;
