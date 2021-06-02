
info:
	@ echo 'code created using command: npx create-react-app my-app'

build:
	@ echo " \033[0;34m Building...  \033[0m "
	@ echo ''
	@ npm install
	@ npm run build

start: build
	@ echo " \033[0;33m Starting...  \033[0m "
	@echo ''
	@ npm start

clean:
	@ echo " \033[0;31m Cleaning...  \033[0m "
	@ rm -rf ./node_modules ./build
