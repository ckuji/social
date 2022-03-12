const {Router} = require('express')
const auth = require('../middleware/auth.middleware')
const Message = require('../models/Message')

const router = Router()

router.post(
    '/:id',
    auth,
    async (req, res) => {
        try {
            const {textValue} = req.body

            if(!textValue) {
                return res.status(400).json({message: 'Пустое сообщение'})
            }

            const message = new Message({
                sender: req.user.userId,
                recipient: req.params.id,
                textValue
            })

            await message.save()

            return res.status(201).json({message: 'Сообщение добавлено'})

        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

module.exports = router