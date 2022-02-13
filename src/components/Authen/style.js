import { makeStyles } from '@mui/styles';
import { AUTHEN_FORM_COLOR, AUTHEN_FORM_TEXT_COLOR } from "../colors";
export const useStyles = makeStyles({ 
    root : {
      position : 'absolute',
      width : '50%',
      height : 'auto',
      minHeight : '35%',
      top : '45%',
      left : '45%',
      transform : 'translate(-45%, -45%)',
      display: 'flex',
      flexDirection: 'column',
      gap : '1rem'
    },
    body : {
        display : "grid",
        gridTemplateRows : "1fr 5fr 1fr",
        padding : '1rem',
        backgroundColor : AUTHEN_FORM_COLOR,
        borderRadius : '10px',
        color : AUTHEN_FORM_TEXT_COLOR,
    },
    header : {
      display: "flex",
      flexDirection : 'row',
      gap : '1rem',
    },
    main : {
      display: 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      gap : '1rem',
      
    },
    footer: {
      display:"flex",
      justifyContent : 'flex-end',
    },
    icon : {
      fill: '#ecedee!important',
      height: '3.2rem!important',
      width: '3.2rem!important',
    },
  })