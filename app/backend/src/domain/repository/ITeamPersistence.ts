interface ITeamPersistence {
  getAll(): Promise<any>
  getById(entity: any): Promise<any>
}

export default ITeamPersistence;
