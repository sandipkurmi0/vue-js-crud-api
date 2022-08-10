import TutorialController from '../controllers/TutorialController';
import auth from '../middleware/auth.middleware';

export default (router) => {
    router.post(`/api/tutorial`, TutorialController.addTutorial);
    router.get(`/api/tutorial`, TutorialController.getAllTutorial);
    router.get(`/api/tutorial/:id`, TutorialController.getOneTutorial);
    router.put(`/api/tutorial/:id`, TutorialController.updateTutorial);
    router.delete(`/api/tutorial/:id`, TutorialController.deleteTutorial);
    router.delete(`/api/tutorial/`, TutorialController.deleteManyTutorial);
    router.get(`/api/published`, TutorialController.findAllPublished);
    // router.get(`/api/tutorial`, TutorialController.getAll);

};
