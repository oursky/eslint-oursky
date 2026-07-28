#!/bin/bash

set -ex

npm ci --legacy-peer-deps
npm run build
cd test
npm i --legacy-peer-deps

if [ "$1" != "--ignore-changes" ]; then
	test -z "$(git status --porcelain)"
fi
if [ "$1" = "--update" ]; then
	npm test -- -u
else
	npm test
fi
