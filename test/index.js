'use strict'

var test = require('tape').test;
var Errorable = require('../src');
var TestError = require('./test-error');
var SubTestError = require('./test-sub-error');

var err1 = new Errorable();
var err2 = new TestError();
var err3 = new SubTestError();
var err4 = new Errorable('Custom Message');

test('instances of...', function (t) {
	t.true(err1 instanceof Error, 'err1 is an instance of Error');
	t.true(err1 instanceof Errorable, 'err1 is an instance of Errorable');

	t.true(err2 instanceof Error, 'err2 is an instance of Error');
	t.true(err2 instanceof Errorable, 'err2 is an instance of Errorable');
	t.true(err2 instanceof TestError, 'err2 is an instance of TestError');

	t.true(err3 instanceof Error, 'err3 is an instance of Error');
	t.true(err3 instanceof Errorable, 'err3 is an instance of Errorable');
	t.true(err3 instanceof TestError, 'err3 is an instance of TestError');
	t.true(err3 instanceof SubTestError, 'err3 is an instance of SubTestError');

	t.end();
});

test('names of...', function (t) {
	t.equal(err1.name, 'Errorable', 'err1 inherits its Error name');
	t.equal(err2.name, 'TestError', 'err2 inherits its Error name');
	t.equal(err3.name, 'SubTestError', 'err3 inherits its Error name');
	t.end();
});

test('messages of...', function (t) {
	t.equal(err1.message, '', 'default error message is blank');
	t.equal(err4.message, 'Custom Message', 'custom message is preserved');
	t.end();
});

test('errors toString()', function (t) {
	t.equal(err1.toString(), 'Errorable');
	t.equal(err2.toString(), 'TestError');
	t.equal(err3.toString(), 'SubTestError');
	t.equal(err4.toString(), 'Errorable: Custom Message', 'custom message included in string');
	t.end();
});
