

exports.getDate = function (){
  const today = new Date();
  // new way to show date -> below is options object to change the day format shown
  const options = {
    weekday : "long",
    day : "numeric",
    month: "long"
  };
   return  today.toLocaleDateString("en-US", options);
};


exports.getDay = function (){
  const today = new Date();
  // new way to show date -> below is options object to change the day format shown
  const options = {
    weekday : "long",
  };
  return  today.toLocaleDateString("en-US", options);

};
