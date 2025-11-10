# Back/core/templatetags/form_helpers.py
from django import template

register = template.Library()

@register.filter
def get_item(dictionary, key):
    """Permite acessar dicionário em templates: {{ dict|get_item:key }}"""
    return dictionary.get(key)