from rest_framework.response import Response


def response_handler(function):

    def wrapper(*args, **kwargs):
        try:
            res = function(*args, **kwargs)
            return res
        except Exception as e:
            print(e)
            # Return generic error
            return Response("An error occurred", status=400)

    return wrapper
