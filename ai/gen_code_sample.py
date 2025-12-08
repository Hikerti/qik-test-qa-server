# @allure.manual
# @allure.label("owner", owner)
# @allure.feature(feature)
# @allure.story(story)
# @allure.suite(test_type)
# @mark.manual
#     class RegistrationFormTests:
#     @allure.title(test_title)
#     @allure.link(jira_link, name=jira_name)
#     @allure.tag("CRITICAL" | "NORMAL" | "LOW")
#     @allure.label("priority", priority)
#     def test_function_name(self) -> None:
#     with allure_step(step1):
#     pass
#     with allure_step(step2):
#     pass
#     with allure_step(step3):
#     allure.attach.file(
#         "screenshots/registration_form.png",
#         name="registration_form",
#         attachment_type=allure.attachment_type.PNG,
#     )