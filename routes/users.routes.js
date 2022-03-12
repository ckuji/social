const {Router} = require('express')
const User = require('../models/User')

const router = Router()

router.get(
    '/',
    async (req, res) => {
        try {
            const usersList = await User.find()

            if(!usersList) {
                return res.status(400).json({message: 'Пользователи не найдены'})
            }

            res.json({users: usersList})

        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

module.exports = router