'use strict';

const imagemin = require('imagemin');
const pngquant = require('imagemin-pngquant');
const mozjpeg  = require('imagemin-mozjpeg');
const webp     = require('imagemin-webp');
const argv     = require('argv');
const del      = require('del');
const config   = require('./config');

const args = argv.option({
    name: 'mode',
    short: 'm',
    type: 'string',
    description: 'Select a mode for imgoptim',
    example: "'script --mode=value' or 'script -m value'"
}).run();

const setImgoptim = function() {
    const imgoptim = new Imgoptim();

    if (args.options.mode === 'convert') {
        imgoptim.convert();
    } else {
        imgoptim.imagemin();
    }
}

class Imgoptim {
    constructor() {
        this.cleanUp();
    }

    cleanUp() {
        del([config.dir.output]).then(paths => {
            console.log('Clean up a output folder.');
        });
    }

    imagemin() {
        return imagemin([`${config.dir.input}.{gif,jpg,png,svg}`], config.dir.output, {
            plugins: [
                pngquant(config.option.pngquant),
                mozjpeg(config.option.mozjpeg)
            ]
        }).then(files => {
            console.log(files);
            console.log('Complete!');
        });
    }

    convert() {
        return imagemin([`${config.dir.input}.{gif,jpg,png,svg,webp}`], config.dir.output, {
            plugins: [
                webp(config.option.webp)
            ]
        }).then(files => {
            console.log(files);
            console.log('Complete!');
        });
    }
}

module.exports = setImgoptim();
