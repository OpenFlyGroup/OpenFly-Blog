OS = $(shell uname)

all:
	make -j 2 run


run: back front


back:
	python3 backend/manage.py runserver


front:
	cd frontend/ ; npm run dev