import {Router} from 'express'
const router = Router()

router.get("/", (req, res) => res.render('index', {title: 'First web with node'}));
// ++primer paso++ res.send("Hola perdida soy yo el amor de tu vida");

router.get("/about", (req, res) => res.render('about', {title: 'About Me'}));

router.get("/contact", (req, res) => res.render('contact', {title: 'contact page'}));

export default router