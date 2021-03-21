#!/bin/bash

live-server .
tsc -w &
npx webpack --watch &
npm t -- --watch

exit 0
