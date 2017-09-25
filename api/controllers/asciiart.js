var figlet = require('figlet');

function asciiart(request, reply) {
    // Call figlet to generate the ASCII Art and return it!
    const msg = request.swagger.params.body.value.message;
    figlet(msg, function(err, data) {
        reply.json({ art: data});
    });    
}
  
module.exports = {
    asciiart: asciiart
};
  