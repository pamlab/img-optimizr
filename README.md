img-optimizr
============

Image optimize and convert.


Features
--------

- Image optimaze
- convert x to webp


Formats
-------

- png
- jpeg
- webp
- svg
- gif


Structure
---------

```bash
.
├── index.js
├── config.json     # Set configuration
├── input           # Input images
│   ├── img.png
│   ├── img.jpg
│   ├── img.webp
│   ├── img.svg
│   ├── img.gif
└── output          # Output images
```


Usage
-----

### Image optimaze

```bash
$ node index.js
```

or

```bash
$ npm run start
```


### convert x to webp

```bash
$ node index.js -m convert
```

or

```bash
$ npm run convert
```


Dependence
----------

[Plugins list](https://github.com/pamlab/img-optimizr/wiki)
