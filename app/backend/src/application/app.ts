import * as express from 'express';
import userRoutes from '../infra/routes/user.routes';
import ErrorHandler from '../infra/middlewares/errorHandler';
import teamRoutes from '../infra/routes/team.routes';
import matchRoutes from '../infra/routes/match.routes';
import leaderboardRoutes from '../infra/routes/leaderboard.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/teams', teamRoutes);
    this.app.use('/login', userRoutes);
    this.app.use('/matches', matchRoutes);
    this.app.use('/leaderboard', leaderboardRoutes);
    this.app.use(ErrorHandler.execute);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
