import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoosePaginate from 'mongoose-paginate-v2';

class TutorialModel {
    // eslint-disable-next-line class-methods-use-this
    initSchema() {
        const schema = new Schema(
            {
                title: {
                    type: String,
                    default: null,
                },
                description: {
                    type: String,
                },
                published: {
                    type: Boolean,
                },
            },
            {
                timestamps: true,
            },
        );
        schema.plugin(uniqueValidator);
        schema.plugin(mongoosePaginate);
        mongoose.model('tutorials', schema);

    }

    getInstance() {
        this.initSchema();
        return mongoose.model('tutorials');
    }

    // eslint-disable-next-line class-methods-use-this
    getModel() {
        return mongoose.model('tutorials');
    }
}

export default TutorialModel;
