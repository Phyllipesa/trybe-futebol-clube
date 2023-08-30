import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import { IModelTeams } from './interfaces/IModel';

class Teams extends Model<IModelTeams> {
  declare id: number;
  declare teamName: string;
}

Teams.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'teams',
  timestamps: false,
});

export default Teams;
