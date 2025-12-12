import httpx
import allure

BASE_URL = "https://compute.api.cloud.ru"
TOKEN = "fake-token"

def _headers():
    return {"Authorization": f"Bearer {TOKEN}"}

@allure.feature("VMs")
@allure.story("List VMs")
@allure.title("GET /vms returns 200")
@allure.label("owner", "qa")
def test_list_vms_ok():
    resp = httpx.get(f"{BASE_URL}/vms", headers=_headers())
    assert resp.status_code == 200