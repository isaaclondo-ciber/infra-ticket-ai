import os

import pytest
from selenium import webdriver

BASE_URL = os.environ.get("BASE_URL", "http://localhost:3000").rstrip("/")


@pytest.fixture
def base_url():
    return BASE_URL


@pytest.fixture
def navegador():
    opciones = webdriver.ChromeOptions()
    opciones.add_argument("--headless=new")
    opciones.add_argument("--window-size=1366,900")
    opciones.add_argument("--no-sandbox")
    opciones.set_capability("goog:loggingPrefs", {"browser": "ALL"})
    driver = webdriver.Chrome(options=opciones)
    driver.implicitly_wait(5)
    yield driver
    driver.quit()
