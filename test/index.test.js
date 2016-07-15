var tape = require('tape');
var rule = require('../index.js');

tape('Detects root login correctly', function(t){
	var rootLoginEvent = require('./fixtures/rootLoginEvent.json');
	rule.fn(rootLoginEvent,function(err,message){
		t.ok(message.subject,'Detected root user login');
		t.end();
	});
});

tape('Detected other login', function(t){
	var notRootLoginEvent = require('./fixtures/notRootLoginEvent.json');
	rule.fn(notRootLoginEvent,function(err,message){
		t.ok(message,'Detected other user login');
		t.end();
	});
});

//tape('',function(t){});
