
function changeRouter(_this, type, _id) {
    switch(type) {
        case 'product': _this.$router.push({ name: 'host-product-view', params: { id: _id }});
        break;
        case 'cate': _this.$router.push({ name: 'host-product-list', params: {  id: _id }});
        break;
        case 'channel': _this.$router.push({ name: 'host-channel', params: { id: _id } });
        break;
        case 'url': window.location.href = _id;
        break;
        default: break;
    }   
}

module.exports = changeRouter;