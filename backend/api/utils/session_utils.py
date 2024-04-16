from ..serializers import SessionsSerializer
from ..models import Sessions


def session_update(creation_time, user_id : int):
    """
    Update user session information.

    Parameters:
    - creation_time (str): Timestamp indicating session creation time.
    - user_id (int): User id connected with session.

    Returns:
    - None: If session update is successful.
    - str: Serialized error message if there are validation errors.
    """
    existing_session = Sessions.objects.filter(user=user_id).first()

    if existing_session:
        existing_session.created_at = creation_time
        serializer = SessionsSerializer(instance=existing_session, data={'created_at': creation_time, 'user': user_id})
    else:
        session_data = {
            'created_at': creation_time,
            'user': user_id
        }
        serializer = SessionsSerializer(data=session_data)
    if serializer.is_valid():
        serializer.save()
        return None
    else:
        return str(serializer.errors)