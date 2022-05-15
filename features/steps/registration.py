from behave import step

@step('I make registration')
def step_impl(context):
    print('registration....')