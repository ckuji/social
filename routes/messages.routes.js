const {Router} = require('express')
const auth = require("../middleware/auth.middleware");
const Message = require("../models/Message");
const router = Router()

router.get(
    '/:id',
    auth,
    async (req, res) => {
        try {
            const list = await Message.find({participants:
                [req.params.id, req.user.userId]
            }).sort({ "timestamp": -1 })

            res.json({data: list})

        } catch (e) {
            res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

module.exports = router