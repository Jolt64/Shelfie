

module.exports = {
    getAllProducts: (req, res) => {
        req.app.get('db')
        .read_products()
        .then((products) => {
            res.status(200).send(products)
        }).catch(err => {res.status(500).send({errorMessage:"There has been a problem. our engineers are working on it"})
        console.log(`problem with ${err}`)})
    },

    createProduct: (req, res) => {
        const { name, price, img } = req.body
        req.app.get('db')
        .createProduct([name,price,img])
        .then(res.status(200).send(`Product has been added`))
        .catch(err => {res.status(500).send({errorMessage:"There has been a problem. our engineers are working on it"})
        console.log(`problem with ${err}`)})
    },

    deleteProduct: (req, res) => {
        const { id } = req.params
        req.app.get('db')
        .deleteProduct(id)
        .then(res.status(200).send(`Product ${id} is gone`))
        .catch(err => {res.status(500).send({errorMessage:"There has been a problem. our engineers are working on it"})
        console.log(`problem with ${err}`)})
    },

    updateProduct: (req, res) => {
        const { id } = req.params
        const { name, price, img } = req.body
        req.app.get('db')
        .updateProduct([name, +price, img, id])
        .then(res.status(200).send(`Product ${id} has been updated`))
        .catch(err => console.log(`problem with ${err}`))
    }

}