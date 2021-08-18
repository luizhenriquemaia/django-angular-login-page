from django.contrib.auth.models import User
from main.serializers import UserSerializer, LoginSerializer
from rest_framework import generics, status
from rest_framework.response import Response


class LoginViewSet(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        #serializer.is_valid(raise_exception=True)
        if not serializer.is_valid():
            return Response({"message": "Dados incorretos"}, status=status.HTTP_400_BAD_REQUEST)
        user = serializer.validated_data
        return Response({"user": UserSerializer(user,
            context=self.get_serializer_context()).data, "message": "Login efetuado"},
            status=status.HTTP_200_OK)