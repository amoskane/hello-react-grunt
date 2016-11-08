.PHONY: node_modules

all: grunt_build

node_modules: package.json
	npm install

grunt_build: Gruntfile.js node_modules
	./node_modules/.bin/grunt build

clean_build:
	rm -rf dist

clean: clean_build
	rm -rf node_modules
