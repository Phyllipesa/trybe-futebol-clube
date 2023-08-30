import { QueryTypes } from 'sequelize';
import Teams from '../../database/models/TeamModel';
import Matches from '../../database/models/MatchModel';

export const matchRelationship = {
  include: [
    { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
    { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
  ],
};

export const matchProgressTrue = {
  where: { inProgress: true },
  include: [
    { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
    { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
  ],
};

export const matchProgressFalse = {
  where: { inProgress: false },
  include: [
    { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
    { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
  ],
};

export const queryConfig = {
  type: QueryTypes.SELECT,
  mapToModel: true,
  model: Matches,
  include: [
    { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
    { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
  ],
  raw: true,
};
