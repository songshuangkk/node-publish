
import EnvModel from '../mongo/models/env';

class ConfigService {
  find() {
    EnvModel.find();
  }

  insert() {
    let data = {title: 'Java Env',
    language: 'Java',
    command: 'Test'}
    EnvModel.insert();
  }
}

export default new ConfigService();
