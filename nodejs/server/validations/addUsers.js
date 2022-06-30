const addUsersProperties = ["name", "sur_name", "phone", "email"];
module.exports.validateAddUsersProperties = function (data) {
    const requireMent = {};
    addUsersProperties.forEach((up) => {
        if (!data[up]) {
            requireMent[up] = `${up} الزامی می باشد.`;
        }
    });
  return requireMent;
};
