const daoCommon = require ('../daos/common/daoCommon')

const lostInTimeDao = {
    ...daoCommon,
    ...require('./api/lostInTimeDao')
}

const profileDao = {
    ...daoCommon,
    ...require('./api/profileDao')
}

module.exports = {
    lostInTimeDao,
    profileDao,
}