from django import forms

class RegistrationForm(forms.Form):
    password = forms.CharField()
    nickname = forms.CharField()
    email = forms.EmailField()
