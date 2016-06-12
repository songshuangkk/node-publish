import Mongoose from '../index';

var Schema = Mongoose.Schema;

var EnvModelSchema = new Schema({
  title: String,
  language: String,
  command: String
});

class EnvModel {
  constructor() {
    this.Model = Mongoose.model('Env', EnvModelSchema, 'Env');
  }

  find(option) {
    this.Model.find(option, (error, data) => {
      if(error) throw error;
      console.log(data);
    });
  }

  insert(data) {
    this.Model.create(data, (error) => {
      if (error) throw error;
    });
  }

  update(data) {
    this.Model.update(data.query, data.updateData, data.cb());
  }

}

export default new EnvModel();
