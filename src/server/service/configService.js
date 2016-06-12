
import EnvModel from '../mongo/models/env';

class ConfigService {
  find() {
    EnvModel.find();
  }

  insert(data) {
    EnvModel.insert(data);
  }

  update(data) {
    // check is existed
    let updateData = {
      query: {name: "JavaEnv"},
      updateData: data,
      cb: (error, raw) => {
        if (error) throw error;
        if (raw === void 0 || raw === 0) {
          data.name = "JavaEnv";
          insert(data);
        }
      }
    }
    EnvModel.update(updateData);
  }
}

export default new ConfigService();
