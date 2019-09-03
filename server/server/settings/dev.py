from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '^hqy4c+95sg%z+%!h84p+(cw_ylhskh+dt^(s1%zh6x)ibl1vm'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*']

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'ciancoders_test',
        'USER': 'leonel',
        'PASSWORD': 'macos',
        'HOST': 'localhost',
        'PORT': ''
    }
}

try:
    from .local import *
except ImportError:
    pass
