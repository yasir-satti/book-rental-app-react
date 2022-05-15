from behave import step

@step('I am on "{page}" page')
def step_impl(context, page):
    print(f"Page == {page}")
    print(f"BASE URL = {context.baseUrl}")
    url = context.baseUrl + '/registration'
    print("URL = '{url}'")
    context.basePage.open(url)