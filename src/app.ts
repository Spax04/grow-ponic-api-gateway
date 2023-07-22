import express, { Application } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

export class App {
  private app: Application;

  constructor(private port?: number | string) {
    dotenv.config();
    this.app = express();
    this.setting();
    this.middlewares();
    this.routes();
    this.errors();
  }

  setting() {
    this.app.set('port', this.port || process.env.PORT || 3000);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  middlewares() {
    this.app.use(morgan('dev'));
  }

  routes() {
    
  }

  errors() {
    this.app.use(
      (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.status(500).json({ message: err.message });
      }
    );
  }

  connection() {
    
  }

  async listen() {
    this.connection();
    await this.app.listen(this.app.get('port'));
    console.log('server is running on port ', this.app.get('port'));
  }
}
