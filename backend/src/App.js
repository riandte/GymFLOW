import express from 'express';
import cors from 'cors';
// import grupoClientesRoutes from './routes/grupoClientesRoutes.js';
// import avisosRoutes from './routes/avisosRoutes.js';
// import clientesRoutes from './routes/clientesRoutes.js';
// import produtoseservicosRoutes from './routes/produtosServicosRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/grupoclientes", grupoClientesRoutes);
// app.use("/avisos", avisosRoutes);
// app.use("/clientes", clientesRoutes);
// app.use("/produtoseservicos", produtoseservicosRoutes);


export default app;