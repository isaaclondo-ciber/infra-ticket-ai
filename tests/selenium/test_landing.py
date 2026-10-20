import pytest
from selenium.webdriver.common.by import By

TITULO = "Automatización Inteligente de Solicitudes de Infraestructura"

SECCIONES = [
    "Descripción del Proyecto",
    "Problemática",
    "Objetivos",
    "Arquitectura de la Solución",
    "Flujo de Trabajo",
    "Tecnologías Utilizadas",
    "DevSecOps y Seguridad",
    "Resultados Esperados",
    "Equipo de Trabajo",
]

COMPONENTES = ["Teams", "Power Automate", "IA Generativa", "Azure DevOps", "Outlook"]


def abrir(navegador, base_url):
    navegador.get(base_url + "/")


def test_la_pagina_carga_con_titulo_y_encabezado(navegador, base_url):
    abrir(navegador, base_url)
    assert "Infra Ticket AI" in navegador.title
    assert navegador.find_element(By.TAG_NAME, "h1").text == TITULO


@pytest.mark.parametrize("seccion", SECCIONES)
def test_cada_seccion_tiene_su_titulo(navegador, base_url, seccion):
    abrir(navegador, base_url)
    titulos = [h2.text for h2 in navegador.find_elements(By.TAG_NAME, "h2")]
    assert seccion in titulos


def test_la_arquitectura_muestra_los_cinco_componentes(navegador, base_url):
    abrir(navegador, base_url)
    seccion = navegador.find_element(
        By.XPATH, "//h2[normalize-space()='Arquitectura de la Solución']/.."
    )
    assert seccion.text.split("\n")[1:] == COMPONENTES


def test_el_flujo_tiene_seis_pasos(navegador, base_url):
    abrir(navegador, base_url)
    pasos = navegador.find_elements(
        By.XPATH, "//h2[normalize-space()='Flujo de Trabajo']/following-sibling::ol/li"
    )
    assert len(pasos) == 6


def test_el_navegador_no_reporta_errores(navegador, base_url):
    abrir(navegador, base_url)
    errores = [
        entrada["message"]
        for entrada in navegador.get_log("browser")
        if entrada["level"] == "SEVERE"
    ]
    assert errores == []
