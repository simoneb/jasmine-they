#!/bin/bash

git clone -b gh-pages https://github.com/simoneb/jasmine-they.git gh-pages
rm -rf gh-pages/*
docco -o gh-pages examples/* *.js
cd gh-pages
cp jasmine-they.example.html index.html
git add -A
git config --global user.email "simone.busoli@gmail.com"
git config --global user.name "Travis-CI"
git config push.default simple
git config credential.helper "store --file=.git/credentials"
echo "https://${GITHUB_TOKEN}:@github.com" > .git/credentials
git commit -m "Travis build ${TRAVIS_BUILD_NUMBER} pushed to gh-pages"
git push
rm .git/credentials