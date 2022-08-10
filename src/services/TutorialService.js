import Service from './Service';

const getPagination = (page, size) => {
    const limit = size ? +size : 5;
    const offset = page ? page * limit : 1;
    return { limit, offset }
}

class TutorialService extends Service {
    // eslint-disable-next-line no-useless-constructor
    constructor(model) {
        super(model);
        this.addTutorial = this.addTutorial.bind(this);
        this.getAllTutorial = this.getAllTutorial.bind(this);
        this.getOneTutorial = this.getOneTutorial.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);
        this.deleteManyTutorial = this.deleteManyTutorial.bind(this);
        this.findAllPublished = this.findAllPublished.bind(this);
    }



    // Create and Save a new Tutorial
    async addTutorial(req, res) {
        if (!req.body.title) {
            return {
                error: "content Cannot be empty",
                statusCode: 500,
                errors,
            };
        }
        try {
            const data = await this.model.create(req.body);
            return {
                error: false,
                statusCode: 200,
                data: data,
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors,
            };
        }
    }

    // Retrieve all Tutorials from the database.
    async getAllTutorial(req, res) {
        console.log(req.query);
        const { page, size, title } = req.query;
        // const title = req.query.title
        var condation = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {}

        console.log("condation", condation)
        const { limit, offset } = getPagination(page, size);
        try {
            const data = await this.model.paginate(condation, { offset, limit });
            return {
                error: false,
                statusCode: 200,
                data: data.docs,
                totalItems: data.totalDocs,
                totalPages: data.totalPages,
                currentPage: data.page - 1,
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors,
            };
        }
    }

    // Find a single Tutorial with an id
    async getOneTutorial(req, res) {
        const id = req.params.id
        try {
            const data = await this.model.findById(id);
            return {
                error: false,
                statusCode: 200,
                data: data,
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors,
            };
        }
    }

    // Update a Tutorial by the id in the request
    async updateTutorial(req, res) {

        let item = req.body;

        const id = req.params.id

        try {
            const data = await this.model.findByIdAndUpdate(id, item, { new: true });

            return {
                error: false,
                statusCode: 200,
                data: data,
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors,
            };
        }
    }

    // Delete a Tutorial with the specified id in the request
    async deleteTutorial(req, res) {
        const id = req.params.id
        try {
            const data = await this.model.findByIdAndDelete(id);

            if (!data) {
                return {
                    error: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
                    statusCode: 500,
                    errors,
                };
            }

            return {
                error: false,
                statusCode: 200,
                data: data,
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors,
            };
        }
    }

    // Delete all Tutorials from the database.

    async deleteManyTutorial(req, res) {
        try {
            const data = await this.model.deleteMany({});
            return {
                error: false,
                statusCode: 200,
                data: data,
                deleteCount: data.count,
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors,
            };
        }
    }

    //Find Tutorials from database
    async findAllPublished(req, res) {
        const { page, size } = req.query;
        const { limit, offset } = getPagination(page, size);

        try {
            const data = await this.model.paginate({ published: true }, { offset, limit })

            return {
                error: false,
                statusCode: 200,
                data: data.docs,
                totalItems: data.totalDocs,
                totalPages: data.totalPages,
                currentPage: data.page - 1,
            };
        } catch (errors) {
            return {
                error: true,
                statusCode: 500,
                errors,
            };
        }
    }
}

export default TutorialService;
