interface IUserPersistence {
  // register(entity: any): Promise<any>
  login(entity: any): Promise<any>
  getRole(entity: any): Promise<any>
}

export default IUserPersistence;
