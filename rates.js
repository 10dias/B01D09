/**
  * @author Thassio Victor <tvmcarvalho@gmail.com>
  * @desc Busca as cotações das moedas internacionais de acordo com o real
  * @license MIT
  */

'use strict';

const http = require('http');

const API = {
    hostname:'api.fixer.io',
    path:'/latest?base=BRL'
};

http.get(API, function(res) {
    let rates = '';

    res.on('data', function(d) {
        rates += d;
    });

    res.on('end', function() {
        rates = JSON.parse(rates);
        console.log(rates);
    });
});

