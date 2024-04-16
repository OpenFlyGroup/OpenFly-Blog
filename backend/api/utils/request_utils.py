def check_not_none(*args):
    if not all(arg is not None for arg in args):
        raise Exception