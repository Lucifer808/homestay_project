import { Box, CircularProgress, Fab } from "@mui/material";
import { useEffect, useState } from "react";
import { Check, Save } from "@mui/icons-material";
import { green } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { updateTypeOfService, selectSuccess } from "../../features/adminSlice";
import { useDispatch, useSelector } from "react-redux";
const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          borderRadius: "50% !important",
        },
      },
    },
  },
});
const AdminActions = ({ params, rowId, setRowId }) => {
  const dispatch = useDispatch();
  const selectSuccessData = useSelector(selectSuccess);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const { id, name, desc, active } = params.row;
    dispatch(updateTypeOfService({ id, name, desc, active }));
    if (selectSuccessData) {
      setSuccess(true);
      setRowId(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (rowId === params.id && selectSuccessData) setSuccess(false);
  }, [rowId, params.id, selectSuccessData]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          m: 1,
          position: "relative",
          cursor: "pointer",
        }}
      >
        {success ? (
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
              bgcolor: green[500],
              borderRadius: " 30px !important",
              "&:hover": { bgcolor: green[700] },
            }}
          >
            <Check />
          </Fab>
        ) : (
          <Fab
            color="primary"
            sx={{
              width: 40,
              height: 40,
            }}
            disabled={params.id !== rowId || loading}
            onClick={handleSubmit}
          >
            <Save />
          </Fab>
        )}
        {loading && (
          <CircularProgress
            size={52}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};

export default AdminActions;
