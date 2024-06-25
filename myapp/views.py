from django.shortcuts import render,HttpResponse
from openai import OpenAI
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from chatapp.models import QuestionAnswer

def gpt(request):
      return render(request,'gpt.html')
def index(request):
	return render(request, 'index.html')
def home(request):
	return render(request, 'home.html')


import json
# @csrf_exempt
# def product(request):
#     question_input=''
#     if request.method == "POST":
#         question_input="what itasdfjalskdjfaksldjfalskd"
#         # data = json.loads(request.body)
#         # question_input = data.get('questionInput')
#         print(question_input)
#     context_data={'quesiton':question_input,'content':"this is answer"}
    
#     return render(request, 'product.html',context_data)

def product2(request):
      return render(request,'product2.html')

def chatGpt(request):
	question=''
	if request.method=="POST":
		question=request.POST.get('question')
		print(question)
		response=QuestionAnswer.objects.filter(question__icontains=question).first()
		return render(request,'answer.html',{'chat':response})
		# print(response.question)
		# print(response.answer)
	return render(request,'product.html')
def answerGpt(request):
	if request.method=="POST":
		pass
	else:
		return HttpResponse("404 not found")
	return render(request,'answer.html')