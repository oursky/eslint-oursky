#!/bin/bash

set -ex

npm ci
npm run build
cd test
npm i

if [ "$1" != "--ignore-changes" ]; then
	test -z "$(git status --porcelain)"
fi
if [ "$1" = "--update" ]; then
	npm test -- -u
else
	npm test
fi
