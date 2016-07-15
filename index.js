var lcfn = require('lambda-cfn');
var message = lcfn.message;
module.exports ={};
module.exports.fn = function(event,callback){ //El module permite incluir codigo 
//de otras personas, sin necesidad de que estos esten copiando y pegando el codigo
//El evento es patrol-root-login
	
 	
    if(event.detail.userIdentity.userName === 'root'){

    	var notification = {
      		subject: 'Root user logged in to the console.', //limita a 64 caracteres
      		summary: 'Patrol detected that the root AWS user log ad in to the console.',
      		event: event
    	};
    	message(notification, function(err, result) {
      		callback(err, result);
    	});

    }else{
    	callback(null, 'Not root user login');

    }
};

module.exports.config ={
	name: 'rootLogin', 
	eventRule: {
    eventPattern: {
      'detail-type': [
        'AWS API Call via CloudTrail'
      ],
      detail: {
        eventSource: [
          'signin.amazonaws.com'
        ],
        eventName: [
          'ConsoleLogin'
        ]
      }
    }
  }
};