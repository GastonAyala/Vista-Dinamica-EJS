const menus = require("../../database/menus.json")
module.exports = (req, res) => {
    const idMenu = req.params.id
    const menuFind = menus.find((menu) => 
        menu.id === +idMenu)
    res.render("detalleMenu", {menu: menuFind})
}