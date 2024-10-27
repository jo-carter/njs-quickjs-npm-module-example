#!/bin/sh
npx browserify load.js -p esmify > bundle.js;
cat my-script.js >> bundle.js;
