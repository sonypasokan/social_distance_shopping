from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
# Create your views here.

@api_view(["POST"])
@permission_classes((AllowAny,))
def signup(request):
    username = request.data.get("username")
    password = request.data.get("password")
    User.objects.create_user(username=username, password=password, is_active=1)
    return Response(
        data = { "success" : True },
        status = status.HTTP_200_OK
    )
