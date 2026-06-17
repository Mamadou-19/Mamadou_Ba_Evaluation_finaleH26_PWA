require("dotenv").config();

const express = require("express");
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use(cors());
app.use(express.json());

const livresRoutes = require("./routes/livresRoutes");

app.use("/api/livres", livresRoutes);

// Export pour les tests
module.exports = app;

// Démarrage du serveur seulement si lancé directement
if (require.main === module) {
  app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
  });
}