interface IMatchPersistence {
  getAll(entity: any): Promise<any>
  finishMatch(entity: any): Promise<any>
  updateMatchResult(entity: any): Promise<any>
  createMatch(entity: any): Promise<any>
}

export default IMatchPersistence;
