import Controller from './Controller';
import Tutorial from '../models/TutorialModel';
import TutorialService from '../services/TutorialService';

const tutorialService = new TutorialService(new Tutorial().getInstance());

class TutorialController extends Controller {
    constructor(service) {
        super(service);
        this.addTutorial = this.addTutorial.bind(this);
        this.getAllTutorial = this.getAllTutorial.bind(this);
        this.getOneTutorial = this.getOneTutorial.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);
        this.deleteManyTutorial = this.deleteManyTutorial.bind(this);
        this.findAllPublished = this.findAllPublished.bind(this);
    }

    async addTutorial(req, res) {
        let response = await this.service.addTutorial(req, res);
        return res.status(response.statusCode).send(response);
    }
    async getAllTutorial(req, res) {
        let response = await this.service.getAllTutorial(req, res);
        return res.status(response.statusCode).send(response);
    }
    async getOneTutorial(req, res) {
        let response = await this.service.getOneTutorial(req, res);
        return res.status(response.statusCode).send(response);
    }
    async updateTutorial(req, res) {
        let response = await this.service.updateTutorial(req, res);
        return res.status(response.statusCode).send(response);
    }
    async deleteTutorial(req, res) {
        let response = await this.service.deleteTutorial(req, res);
        return res.status(response.statusCode).send(response);
    }

    async deleteManyTutorial(req, res) {
        let response = await this.service.deleteManyTutorial(req, res);
        return res.status(response.statusCode).send(response);
    }

    async findAllPublished(req, res) {
        let response = await this.service.findAllPublished(req, res);
        return res.status(response.statusCode).send(response);
    }

}

export default new TutorialController(tutorialService);
