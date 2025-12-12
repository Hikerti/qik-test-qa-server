import pytest
import allure

@allure.feature("Calculator")
@allure.story("Start page")
@allure.title("Открытие калькулятора")
@allure.label("owner", "qa")
@pytest.mark.asyncio
async def test_open_calculator(page):
    # Arrange
    await page.goto("http://localhost:3000/calculator")
    # Act
    title = await page.text_content("text=Калькулятор")
    # Assert
    assert "Калькулятор" in title