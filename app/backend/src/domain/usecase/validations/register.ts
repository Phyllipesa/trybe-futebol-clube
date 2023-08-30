import User from '../../entities/User';

class validate {
  public emailAndPassword = (entity: Pick<User, 'email' | 'password'>) => {
    if (!entity.email || !entity.password) throw new Error('All fields must be filled');

    if (entity.email.length > 40) throw new Error('O email fornecido é muito grande');

    if (entity.password.length < 12) {
      throw new Error('Password deve ter mais que 12 caracteres');
    }
  };
}

export default validate;
