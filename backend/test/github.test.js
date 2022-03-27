let expect = require('chai').expect;
let request = require('request');

describe('Status and content', function() {
    describe ('Users page', function() {
        it('status', function(done){
            request('http://localhost:8080/search/github/that-guy-lee',
                function(error, response, body) {
                    expect(response.statusCode).to.equal(200);
            done();
        });
    });
});
});
