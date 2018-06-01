
function changeRouter(_this, type, _id) {
    switch(type) {
        case 'product': _this.$router.push({ name: 'product-view', params: { id: _id }});
        break;
        case 'cate': _this.$router.push({ name: 'product-list', params: {  id: _id }});
        break;
        case 'channel': _this.$router.push({ path: `../channel/${_id}`});
        break;
        case 'url': window.location.href = _id;
        break;
        default: break;
    }   
}

module.exports = changeRouter;