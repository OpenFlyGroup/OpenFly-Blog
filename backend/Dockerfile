FROM python:3.11.3

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

WORKDIR /backend

# Somehow requirments.txt isn't work. Maybe due to my 24IQ.
RUN pip install asgiref==3.7.2 \
                Django==5.0.2 \
                django-cors-headers==4.3.1 \
                djangorestframework==3.14.0 \
                djangorestframework-simplejwt==5.3.1 \
                pillow==10.2.0 \
                psycopg2-binary==2.9.9 \
                PyJWT==2.8.0 \
                python-dotenv==1.0.1 \
                pytz==2024.1 \
                sqlparse==0.4.4 \
                typing_extensions==4.9.0 \
                tzdata==2024.1

EXPOSE 8000

COPY . /backend

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
