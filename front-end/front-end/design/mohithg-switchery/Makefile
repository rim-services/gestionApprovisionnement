#
# Variables
#

NAME = Switchery

#
# Paths
#

COMPONENT_BUILD = design/.bin/component-build
COMPONENT_INSTALL = design/.bin/component-install
UGLIFYJS = design/uglify-js/bin/uglifyjs
UGLIFYCSS = design/uglifycss/uglifycss
JS_DEST = dist/switchery.js
JS_MIN_DEST = dist/switchery.min.js
CSS_DEST = dist/switchery.css
CSS_MIN_DEST = dist/switchery.min.css

#
# All
#

all: install

#
# Install
#

install: design components build

#
# Make a new development build
#

build: components switchery.js switchery.css
	@$(COMPONENT_BUILD) --dev

#
# Install components (+ dev)
#

components: component.json
	@$(COMPONENT_INSTALL) --dev

#
# Make a standalone version that doesn't depend on component etc.
#

standalone: build components
	@$(COMPONENT_BUILD) -s $(NAME) -o .
	@mv build.js $(JS_DEST)
	@mv build.css $(CSS_DEST)
	@$(UGLIFYJS) $(JS_DEST) --output $(JS_MIN_DEST)
	@$(UGLIFYCSS) $(CSS_DEST) > $(CSS_MIN_DEST)

#
# Install Node.js modules
#

design:
	@npm install

#
# Clean all
#

clean: clean-components clean-node

#
# Clean components & build
#

clean-components:
	@rm -rf build
	@rm -rf components

#
# Clean the installed Node.js modules
#

clean-node:
	@rm -rf design

#
# Instructions
#

.PHONY: clean build components
