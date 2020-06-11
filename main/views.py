
from django.conf import settings
from django.views.generic import TemplateView


class IndexView(TemplateView):

    template_name = '' 'main/index.html'

    def get_context_data(self, **kwargs):

        print(f"STATICFILES_FINDERS={settings.STATICFILES_FINDERS}")

        return {}
