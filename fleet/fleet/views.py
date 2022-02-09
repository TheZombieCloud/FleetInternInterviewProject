from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json

class getServices(APIView):

    def get(self, request, format=None):
        with open('fleet/input/data.json', 'r') as f:
            data = json.load(f)
        return Response(status=status.HTTP_200_OK, data=data)