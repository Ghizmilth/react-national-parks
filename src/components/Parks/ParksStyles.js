import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    cards: {
    maxWidth: 345,
    },
    favoriteButton: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
    },
    expand: {
      marginLeft: 'auto',
    },
    media: {
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      
    }

    }));

  export { useStyles }; 