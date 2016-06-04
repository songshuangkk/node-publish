import Mongoose from '../index';


class JavaEnv {
    constructor() {
      this.schema = Mongoose.Schema({
        Command: String
      });
      this.model = Mongoose.model('JAVA_COMMAND', this.schema);

      this.javaEnv = new this.model();
    }

    getRunCommand() {
      this.javaEnv.find((data) => {

      });
    }
}

export default new JavaEnv;
