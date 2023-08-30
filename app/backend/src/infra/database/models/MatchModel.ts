import { INTEGER, Model, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './TeamModel';
import { IBasicModel, IModelMatch } from './interfaces/IModel';

class Matches extends Model<IModelMatch, IBasicModel> {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  homeTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamId: {
    type: INTEGER,
    allowNull: false,
  },
  awayTeamGoals: {
    type: INTEGER,
    allowNull: false,
  },
  inProgress: {
    type: BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'matches',
  timestamps: false,
});

Teams.hasMany(Matches, { foreignKey: 'awayTeamId', as: 'awayTeam' });
Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });

Teams.hasMany(Matches, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

export default Matches;
