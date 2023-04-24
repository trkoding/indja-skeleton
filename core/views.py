from inertia import inertia


@inertia('welcome')
def index(request):
  return {
    'welcome': 'Welcome to Goblin base project.',
  }
