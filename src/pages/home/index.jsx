import { AppBar, Box, Typography } from "@mui/material";

const style = {
  container: {
    width: "100vw",
    height: "100vh",
  },
  header: {
    height: "10vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottom: "2px solid #e0e0e0",
    padding: "0 20px",
  },
  boxConteudo: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflowY: "auto",
    overflowX: "hidden",
  },
  boxCardsValores: {
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "20px",
    margin: "20px",
  },
  cardValores: {
    width: "200px",
    height: "100px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
      scale: "1.02",
      transition: "scale 0.1s ease-in-out",
    },
  },
};

const Home = () => {
  return (
    <Box bgcolor={"background.default"} sx={style.container}>
      {/* Header */}
      <Box color="background.default" position="static" sx={style.header}>
        <Typography color="text.primary" fontWeight={"bold"} fontSize="1.6rem">
          Caixa - FH Maison
        </Typography>
      </Box>

      {/* Conteúdo principal */}
      <Box sx={style.boxConteudo}>
        <Box sx={style.boxCardsValores}>
          <Box sx={style.cardValores}>
            <Typography color="text.primary" fontWeight={"bold"}>
              Total de Vendas
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
