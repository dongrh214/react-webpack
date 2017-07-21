/**
 * Created by dongruihe on 2017/7/20.
 */
const getUa = ()=> {
    try {
        return navigator.userAgent
    } catch (e) {

    } finally {

    }
}
module.exports = {
    ua: getUa()
};
